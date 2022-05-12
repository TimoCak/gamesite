var Game = class Game {
    constructor(title,description,img,width,height) {
        this.title = title;
        this.description = description;
        this.rating = 0;
        this.img = img;
        this.width = width;
        this.height = height;
    }
}

module.exports = {Game};