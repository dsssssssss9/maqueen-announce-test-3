input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(randint(0, 3), neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip.show()
basic.forever(function () {
	
})
