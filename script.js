const timer = document.querySelector(".timer")
const mask = document.querySelector(".mask")

setTimer = () => {
    let date = new Date()
    let i = date.toLocaleTimeString()
    timer.innerText = `${i}`

}
setInterval(setTimer, 10);


let timeOutEvent = 0 // 用来定时器，储存定时器timeoutID
document.addEventListener('touchend', function (e) {
    // 阻止它的默认事件
    // e.preventDefault()
    // 当触摸离开的时候定时器计时
    timeOutEvent = setTimeout(() => {
        mask.style.opacity = ".95"
        timeOutEvent = 0
    }, 6000) // 达到 5s 就会实现效果
})
document.addEventListener('touchstart', function (e) {
    // 如果未达到 5s 且开始移动，则清除计时器
    mask.style.opacity = "0"
    clearTimeout(timeOutEvent)
    timeOutEvent = 0
})

