/* Wrapper Functions  Copyright (c) 2021  Cato Yiu  MIT */
/* Licanse text at the bottom */
//% color=#222222 weight=30 icon="#"
namespace wrapper {
    /**
     * Pause for the specified time in seconds
     * @param s how long to pause for, eg: 0.1, 0.2, 0.5, 1, 2
    */
    //% blockId=wrapper_delay_seconds block="Sleep %s (seconds)"
    export function delay_by_seconds(s: number) {
        basic.pause(s * 1000)
    }
    /**
     * Get the version of wrapper functions
    */
    //% blockId=wrapper_version block="Wrapper Version"
    export const version = 1
    /**
     * Pause for the specified time in seconds
     * @param s how long to pause for, eg: 1, 2, 5, 10
    */
    //% blockId=wrapper_every_second block="run code every %s seconds" blockGap=16
    export function run_every_seconds(s: number, f: () => void) {
        loops.everyInterval(s * 1000, f)
    }
}
/*
Copyright (c) 2021 Cato Yiu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/