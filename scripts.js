const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const number = document.getElementById('.numbers')
const list = document.getElementById('.list')

let active = 0;
const total = items.length;
let timer;


