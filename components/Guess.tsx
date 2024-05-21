"use client"
import { useState } from "react";

const points = ["1", "2", "3", "5", "8", "13", "21", "?"];

function Guess() {
    const [selection, setSelection] = useState<string | null>(null);

    return (
        <div className="flex flex-wrap justify-around items-center gap-4 p-4">
            {points.map(point => (
                <button key={point} disabled={point === selection} className={`w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-60 xl:h-60 border-2 border-[#F0F2F4] ${point === selection ? "border-[#0C66E4] bg-[#0C66E4] text-white" : "hover:bg-[#F0F2F4]"}`} onClick={() => setSelection(point)}>{point}</button>
            ))}
        </div>
    )
}

export default Guess