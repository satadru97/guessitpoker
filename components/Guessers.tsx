const guessers = [
  "Steve Rogers",
  "Spoiler",
  "Thor Odinson",
  "Bruce Banner",
  "Clint Barton",
  "Natasha Romanoff"
]

function Guessers() {
  return (
    <div className="flex flex-wrap justify-around items-center gap-4 p-4">
      {guessers.map((guesser, index) => (
        <button key={guesser} disabled className={`w-20 h-20 md:w-32 md:h-32 lg:w-44 lg:h-44 xl:w-56 xl:h-56 border-2 border-[#F0F2F4] ${index % 2 === 0 ? "border-[#4BCE97] bg-[#4BCE97] text-white" : ""} ${guesser === "Spoiler" ? "font-black" : ""}`}>{guesser}</button>
      ))}
    </div>
  )
}

export default Guessers