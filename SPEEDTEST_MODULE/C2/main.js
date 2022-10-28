const slider = document.querySelector('.slider')
const imgGray = document.querySelector('.image-grayscale')
const imgOri = document.querySelector('.image-ori')


slider.addEventListener('change', () => {
    imgOri.style.clip = `rect(0px, 1000px, 600px, ${slider.value}px)`
})