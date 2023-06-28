input.onButtonPressed(Button.A, function () {
    if (시 < 23) {
        시 += 1
    } else {
        시 += 0
    }
})
input.onGesture(Gesture.Shake, function () {
    현재_시간 = 시
    time = "" + 현재_시간
    time = "" + time + ":"
    time = "" + time + 분 / 10
    time = "" + time + 분 % 10
    basic.showString(time)
})
input.onButtonPressed(Button.B, function () {
    if (분 < 59) {
        분 += 1
    } else {
        분 += 0
    }
})
let time = ""
let 시 = 0
let 분 = 0
let 현재_시간 = 0
let ampm = false
현재_시간 = 0
분 = 0
시 = 0
time = ""
basic.forever(function () {
    basic.pause(60000)
    if (분 < 59) {
        분 += 1
    } else {
        분 += 0
        if (시 < 23) {
            시 += 1
        } else {
            시 += 0
        }
    }
})
