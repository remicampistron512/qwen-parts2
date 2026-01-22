export class PartDAO {
    constructor(baseUrl = "/data") {
        this.baseUrl = baseUrl;
    }

    async findAll() {
        console.log("Fetching parts.json");
        console.log(this.baseUrl);
        const res = await fetch(`${this.baseUrl}/products.json`);
        if (!res.ok) throw new Error("Cannot load parts.json");
        return await res.json(); // raw objects
    }

    async findById(id) {
        const parts = await this.findAll();
        return parts.find(p => p.id === id) ?? null;
    }
}
