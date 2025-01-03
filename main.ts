function Set_Volume () {
    let l = control.createBuffer(7)
l.setUint8(0, 0x7E)
l.setUint8(1, 0x06)
l.setUint8(2, 0x00)
l.setUint8(3, 0x02)
l.setUint8(4, 0x00)
l.setUint8(5, Volume)
l.setUint8(6, 0xEF)
serial.writeBuffer(l)
}
input.onButtonPressed(Button.A, function () {
    Set_Volume()
    Track_Num += 1
    if (Track_Num > 10) {
        Track_Num = 1
    }
    basic.showString("" + Track_Num)
    if (Track_Num % 2 == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 48)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 48)
    }
    Play_Track()
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
function Play_Track () {
    let m = control.createBuffer(7)
m.setUint8(0, 0x7E)
m.setUint8(1, 0x03)
m.setUint8(2, 0x00)
m.setUint8(3, 0x02)
m.setUint8(4, 0x00)
m.setUint8(5, Track_Num)
m.setUint8(6, 0xEF)
serial.writeBuffer(m)
}
let Track_Num = 0
serial.redirect(
SerialPin.P2,
SerialPin.P1,
BaudRate.BaudRate9600
)
let Volume = 16
Track_Num = 0
basic.showIcon(IconNames.Happy)
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
