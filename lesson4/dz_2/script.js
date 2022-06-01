'use strict'

//es5 
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = prompt('Введите текст');
}

function AttachedPosd(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighter = false;
}


AttachedPosd.prototype = Object.create(Post.prototype);
AttachedPosd.prototype.constructor = AttachedPosd;

AttachedPosd.prototype.makeTextHighlighted = function () {
    this.highlighter = true;
}

const item = new AttachedPosd("Ivan", 'hi', '25 мая');




//es6

class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = prompt('Введите текст');
    }
}

class AttachedPosd1 extends Post1 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighter = false;
    }

    makeTextHighlighted() {
        this.highlighter = true;
    }
}


const attach = new AttachedPosd1('Ivan', 'hi', '25 мая');
attach.makeTextHighlighted();

console.log(attach);

