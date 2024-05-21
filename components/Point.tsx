"use client"
import { useState } from "react";

const points = [1, 2, 3, 5, 8, 13, 21];

export default function Point() {
    const [selection, setSelection] = useState<number | null>(null);

    return (
        <div className="p-8">
            <h1 className="text-xl text-center">Guess Points</h1>
            <div className="flex flex-wrap justify-evenly items-center gap-4 h-96">
                {points.map(point => (
                    <button key={point} className={`w-36 h-36 border-2 ${point === selection ? 'bg-white text-black' : ''}`} onClick={() => setSelection(point)}>{point}</button>
                ))}
            </div>
        </div>
    )
}
