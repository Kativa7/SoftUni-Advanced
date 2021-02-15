class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (room === 'livingRoom' || room === 'bedRoom' || room === 'closet') {
            this.room = room;
            this.shelfCapacity = Number(shelfCapacity);
            this.shelfGenre = shelfGenre;
            this.shelf = [];
        } else {
            throw new Error(`Cannot have book shelf in ${room}`)
        }

    }
    addBook(bookName, bookAuthor, genre) {
        if (this.shelfCapacity > this.shelf.length) {
            this.shelf.push({ bookName, bookAuthor, genre })
        } else {
            this.shelf.shift();
            this.shelf.push({ bookName, bookAuthor, genre })
        }

        return this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

    }

    throwAwayBook(bookName) {
        let book = this.shelf.find(book => book.bookName === bookName);
        let index = this.shelf.indexOf(book);
        return this.shelf.splice(index, 1);

    }

    showBooks(genre) {
        let selectedBooks = this.shelf.filter(book => book.genre === genre);
        let result = `Results for search "${genre}":\n`
        selectedBooks.forEach(x => {
            result += `\uD83D\uDCD6 ${x.bookAuthor} – "${x.bookName}"\n`
        });
        return result.trim();
    }

    toString() {
        if (this.shelf.length <= 0) {
            return "It's an empty shelf";
        } else {
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            this.shelf.forEach(x => {
                result += `"\uD83D\uDCD6" "${x.bookName}" – ${x.bookAuthor}\n`
            })
            return result.trim();

        }
    }

    get shelfCondition() {
        return (this.shelfCapacity - this.shelf.length);
    }

}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
//:\n\uD83D\uDCD6 Cuentos para pensar - "The Guns of August"\n\uD83D\uDCD6 David McCullough - "John Adams"


