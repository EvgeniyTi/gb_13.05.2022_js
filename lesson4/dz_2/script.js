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

