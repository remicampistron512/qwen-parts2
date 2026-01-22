export class Part {
    id;
    name;
    shortDescription;
    longDescription;
    priceCents;
    imageUrl;
    details;
    categoryId;
    constructor(id, name, shortDescription, longDescription, priceCents,imageUrl, details, categoryId) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.priceCents = priceCents;
        this.imageUrl = imageUrl;
        this.details = details;
        this.categoryId = categoryId;
    }

}