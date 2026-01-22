import { routes } from "./routes.js";
import { NotFoundView } from "../views/notFoundView.js";

export class Router {
    constructor(appContainerEl, foucContainerEl) {
        this.appContainerEl = appContainerEl;
        this.foucContainerEl = foucContainerEl;

        // bind popstate handler so "this" stays correct
        this.handlePopState = this.handlePopState.bind(this);
    }

    /**
     * Finds the matching route for the current URL.
     */
    matchRoute() {
        const pathname = window.location.pathname;

        for (const route of routes) {
            const routeParts = route.path.split("/").filter(Boolean);
            const pathParts = pathname.split("/").filter(Boolean);

            if (routeParts.length !== pathParts.length) continue;

            const params = {};
            let match = true;

            for (let i = 0; i < routeParts.length; i++) {
                const rp = routeParts[i];
                const pp = pathParts[i];

                if (rp.startsWith(":")) {
                    params[rp.slice(1)] = decodeURIComponent(pp);
                } else if (rp !== pp) {
                    match = false;
                    break;
                }
            }

            if (match) return { view: route.view, params };
        }

        return { view: NotFoundView, params: {} };
    }

    /**
     * Render the current route view.
     */
    async render() {
        const pathname = window.location.pathname;

        const { view, params } = this.matchRoute();

        // Highlight active SPA nav links
        document.querySelectorAll("a[data-link]").forEach((a) => {
            const href = a.getAttribute("href");
            a.classList.toggle("active", href === pathname);
        });

        // Fade OUT current content before swapping HTML
        this.appContainerEl.classList.add("is-transitioning");

        // Keep your animation timing
        await new Promise((r) => setTimeout(r, 180));

        // Render view (string or Promise<string>)
        this.appContainerEl.innerHTML = await view(params);

        // Remove FOUC protection after first real render
        requestAnimationFrame(() => {
            this.foucContainerEl.classList.remove("app-hidden");
        });

        // Fade IN new content
        requestAnimationFrame(() => {
            this.appContainerEl.classList.remove("is-transitioning");
        });

        // updateCartBadge(); // later
    }

    /**
     * Navigate programmatically
     */
    navigate(to) {
        // avoid useless re-render if already on same page
        if (window.location.pathname === to) return;

        history.pushState({}, "", to);
        this.render();
    }

    /**
     * Handle browser back/forward
     */
    handlePopState() {
        this.render();
    }

    /**
     * Call once at app startup
     */
    start() {
        window.addEventListener("popstate", this.handlePopState);
        this.render();
    }

    /**
     * Optional cleanup
     */
    destroy() {
        window.removeEventListener("popstate", this.handlePopState);
    }
}
