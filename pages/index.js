import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useForm, useWatch } from 'react-hook-form'
import React, {useEffect, useState} from 'react'
import { Result } from '@components/Result';
import {model} from "../config/1bytemodel";

export default function Home() {

    const { register, control} = useForm({
        mode: "onChange",
        defaultValues: {
            size: 1,
            sizeUnit: "gb",
            time: 60,
            network: "wifi",
            source: "world",
            target: "france",
            device: "mobile"
        }
    });

    return (
        <main>
            <div className="container mx-auto">
                <Head>
                    <title>1byte model calculator!</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#66d55b" />
                    <meta name="msapplication-TileColor" content="#00a300" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <Header title="Welcome to 1 byte model calculator!" />
                <div className="flex md:flex-row flex-col divide-solid md:divide-x divide-y p-3 ring-2 ring-gray-300 bg-gray-100 rounded-sm">
                    <div className="flex flex-col justify-center gap-3 md:px-3 py-3 w-full">
                        <div className="flex flex-row items-center">
                            <label htmlFor="size" className="flex flex-row flex-none text-sm font-medium text-gray-700 md:basis-1/4 basis-24">
                                <span className="pr-1" >💾</span>Size :
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border border-gray-300 text-right pr-2"
                                    placeholder="Size"
                                    type="number"
                                    {...register("size")}
                                />
                                <select
                                    className="inline-flex items-center px-3 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm w-20"
                                    {...register("sizeUnit")}
                                >
                                    <option name="sizeUnit" value="b">byte</option>
                                    <option name="sizeUnit" value="kb">Kbyte</option>
                                    <option name="sizeUnit" value="mb">Mbyte</option>
                                    <option name="sizeUnit" value="gb">Gbyte</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <label htmlFor="time" className="flex-none text-sm font-medium text-gray-700  md:basis-1/4 basis-24">
                                <span className="pr-1">⌛</span>Time :
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input
                                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md sm:text-sm border border-gray-300 text-right pr-2"
                                    placeholder="Time spent in second"
                                    {...register("time")}
                                />
                                <span className="inline-flex items-center px-3 py-2 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                  sec
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-3 md:px-3 py-3 w-full">
                        <div className="flex flex-row items-center">
                            <label htmlFor="network" className="flex-none text-sm font-medium text-gray-700 basis-24">
                                <span className="pr-1">🕸️</span> Network :
                            </label>
                            <div className="mt-1 flex md:flex-auto flex-1 rounded-md shadow-sm">
                                <select
                                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-500 text-sm md:w-36 w-full"
                                    {...register("network")}
                                >
                                    <option name="network" value="wifi">Wifi</option>
                                    <option name="network" value="mobile_network">Mobile Network</option>
                                    <option name="network" value="wired">Wired</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <label htmlFor="source" className="flex-none text-sm font-medium text-gray-700 basis-24">
                                <span className="pr-1">📤</span> Source :
                            </label>
                            <div className="mt-1 flex md:flex-auto flex-1 rounded-md shadow-sm">
                                <select
                                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-500 text-sm md:w-36 w-full"
                                    {...register("source")}
                                >
                                    <option name="source" value="world">World</option>
                                    <option name="source" value="european_union">European Union</option>
                                    <option name="source" value="france">France</option>
                                    <option name="source" value="usa">United States</option>
                                    <option name="source" value="china">China</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <label htmlFor="target" className="flex-none text-sm font-medium text-gray-700 basis-24">
                                <span className="pr-1">📥</span> Target :
                            </label>
                            <div className="mt-1 flex md:flex-auto flex-1 rounded-md shadow-sm">
                                <select
                                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-500 text-sm md:w-36 w-full"
                                    {...register("target")}
                                >
                                    <option name="target" value="world">World</option>
                                    <option name="target" value="european_union">European Union</option>
                                    <option name="target" value="france">France</option>
                                    <option name="target" value="usa">United States</option>
                                    <option name="target" value="china">China</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row items-center">
                            <label htmlFor="device" className="flex-none text-sm font-medium text-gray-700 basis-24">
                                <span className="pr-1">📱💻</span> Device :
                            </label>
                            <div className="mt-1 flex md:flex-auto flex-1 rounded-md shadow-sm">
                                <select
                                    className="inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-500 text-sm md:w-36 w-full"
                                    {...register("device")}
                                >
                                    <option name="device" value="mobile">📱 Mobile</option>
                                    <option name="device" value="pc">💻 PC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Result control={control} />
            </div>
            <Footer />
        </main>
    )
}
