import { useWatch } from "react-hook-form";
import { model } from "../config/1bytemodel";
import AnimatedNumber from 'animated-number-react'
import {useEffect, useState} from "react";



export function Result({control}) {

    const oneByteModelCalc = ({sizeUnit, size, time, network, source, target, device}) => {
        switch(sizeUnit) {
            case "kb":
                size = size*Math.pow(2,10);
                break;
            case "mb":
                size = size*Math.pow(2,20);
                break;
            case "gb":
                size = size*Math.pow(2,30);
                break;
        }
        const networkEmissionVal = model.emission.world
        const networkVal = model.networkUse[network]
        const sourceEmissionVal = model.emission[source]
        const targetEmissionVal = model.emission[target]
        const deviceUseVal = model.deviceUse[device]
        const datacenterVal = model.datacenterUse
        let result = size*networkVal*networkEmissionVal
            + size*datacenterVal*sourceEmissionVal
            + time*deviceUseVal*targetEmissionVal

        let weightUnit = "g"
        if(result > 1000) {
            weightUnit = "kg";
            result = result/1000;
        }
        if(result > 1000) {
            weightUnit = "t";
            result = result/1000;
        }
        return {
            result,
            weightUnit
        }
    }

    const formatValue = (value) => value.toFixed(3)

    const allFields = useWatch({control})
    let {result, weightUnit} = oneByteModelCalc({...allFields});
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row bg-blue-300 ring-2 ring-blue-500 rounded-sm items-centers m-6 p-3 mb-1 mb-1 text-large font-medium gap-1 object-cover">
                <AnimatedNumber
                    value={result}
                    formatValue={formatValue}
                />
                <span>{weightUnit}CO2e</span>
            </div>
            <span>
                Voir l'équivalence sur <a href="https://monconvertisseurco2.fr/co2e" target="_blank" className="underline underline-offset-1 italic">MonConvertisseurCO2.fr</a>
            </span>
        </div>
    )
}