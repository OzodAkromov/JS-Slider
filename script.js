const images = document.querySelectorAll('.slider .images img')
const prev = document.querySelector('.slider .btns .prev')
const next = document.querySelector('.slider .btns .next')


let index = 0

// Next Btn

next.addEventListener('click', function () {
    images[index].classList.remove('active')
    index++
    if (index === images.length) {
        index = 0
    }
    images[index].classList.add('active')
})

// Prev Btn
prev.addEventListener('click', function() {
    images[index].classList.remove('active')
    if (index === 0) {
        index = 4
    }
    index--
    images[index].classList.add('active')
})

