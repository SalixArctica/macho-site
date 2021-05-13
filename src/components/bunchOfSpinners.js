import React from 'react'
import { SpinningHead } from './spinningHead';

//this component is hacky garbage please pay it no mind
const getRandomInt = (min = 0, max = 2) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randy = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    return randy;
}

export const BunchOfSpinners = ({ count }) => {
    return (
        <>
            {Array.from(Array(count)).map((x, index) => <SpinningHead key={index} random={[getRandomInt(1,8), getRandomInt(1,8)]}/>)}
        </>
    )
}

