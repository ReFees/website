import React from 'react'

export default function CountDown() {
    return (
        <div>
            
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="font-mono text-5xl countdown">
                <span style="--value:15;"></span>
                </span>
                    days
            </div> 
            </div> 
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="font-mono text-5xl countdown">
                <span style="--value:10;"></span>
                </span>
                    hours
            </div> 
        </div>
    )
}
