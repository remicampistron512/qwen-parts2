export class Part {
    id;
    name;
    shortDescription;
    longDescription;
    priceCents;
    details;
    categoryId;
    constructor(name, shortDescription, longDescription, priceCents, details, categoryId) {
        this.name = name;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.priceCents = priceCents;
        this.details = details;
        this.categoryId = categoryId;
    }

}