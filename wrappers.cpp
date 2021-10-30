/* Wrapper Functions  Copyright (c) 2021  Cato Yiu  MIT */
//% color=#222222 weight=30 icon="#"
namespace wrapper {
  /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "Hello!"
     * @param interval how fast to shift characters; eg: 150, 100, 200, -100
  */
  //% weight=87 blockGap=16
  //% block="Display %text as marquee"
  //% async
  //% blockId=wraper_marquee
  //% parts="ledmatrix"
  //% text.shadowOptions.toString=true
  void marquee(String text, int interval = 150) {
    if (interval <= 0)
      interval = 1;
    int l = text ? text->getUTF8Size() : 0;
    if (l == 0) {
      uBit.display.clear();
      fiber_sleep(interval * 5);
    } else {
      uBit.display.scroll(MSTR(text), interval);
    }
  }
  /**
     * Pause for the specified time in milliseconds
     * @param s how long to pause for, eg: 1, 2, 5, 10
  */
  //% weight=54
  //% async block="pause (s) %s" blockGap=16
  //% blockId=wrapper_delay_seconds
  //% pause.shadow=timePicker
  void pause_s(int s) {
    fiber_sleep(s * 1000);
  }
}
