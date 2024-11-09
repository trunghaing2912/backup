class BookModel {
    id: number;
    title: string;
    author?: string; /* ?: optional variable */
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;

    constructor(id: number, title: string, description: string, author: string, 
        copies: number, copiesAvailable: number, category: string, img: string) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.description = description;
            this.copies = copies;
            this.copiesAvailable = copiesAvailable;
            this.category = category;
            this.img = img;
    }
}

export default BookModel;