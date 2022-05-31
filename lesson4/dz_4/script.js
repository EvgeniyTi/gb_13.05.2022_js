'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


// 1 Получить все товары, у которых есть фотографии, можете использовать метод filter
let foto = products.filter(fotos => {
    return fotos.photos && fotos.photos !== null;
})

console.log(foto);


// Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

foto.sort(function (word1, word2) {
    if (word2.price > word1.price) {
        return -1;
    }

    if (word1.price > word2.price) {
        return 1;
    }

    return 0
})
console.log(foto);