export class CategoryDAO {
    constructor(baseUrl = "/data") {
        this.baseUrl = baseUrl;
    }

    async findAll() {
        const res = await fetch(`${this.baseUrl}/categories.json`);
        if (!res.ok) throw new Error("Cannot load categories.json");
        return await res.json();
    }
}
