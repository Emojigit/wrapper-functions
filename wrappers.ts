/* Wrapper Functions  Copyright (c) 2021  Cato Yiu  MIT */
//% color=#222222 weight=30 icon="#"
namespace wrapper {
    /**
     * Get the version of wrapper functions
    */
    //% blockId=wrapper_version block="Wrapper Version"
    export const version = 1
    /**
     * Run code repeatly
     * @param s the interval of code executing, eg: 1, 2, 5, 10
    */
    //% blockId=wrapper_every_second block="run code every %s seconds" blockGap=16
    export function run_every_seconds(s: number, f: () => void) {
        loops.everyInterval(s * 1000, f)
    }
}
