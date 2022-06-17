export const model = {
    deviceUse : {//kWh/sec
        mobile: 0.000001833333333,
        pc: 0.000005333333333
    },
    networkUse: {//kWh/byte
        wired: 0.000000000429,
        mobile_network: 0.000000000884,
        wifi: 0.000000000152
    },
    datacenterUse: 7.2*Math.pow(10,-11),//kWh/byte
    emission: {//gCO2e/kWh
        world:460,
        european_union:296,
        usa:447,
        china:596,
        france:59
    }
}