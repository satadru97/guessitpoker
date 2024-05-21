import Guess from "@/components/Guess";
import Guessers from "@/components/Guessers";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen space-y-4 md:space-x-4 md:space-y-0 mx-4 md:mx-8">
      <div className="bg-white w-full md:w-3/5 p-4 shadow-xl">
        <h3 className="text-center mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">Guess Points</h3>
        <Guess />
      </div>
      <div className="bg-white w-full md:w-2/5 p-4 shadow-md">
        <h3 className="text-center mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">Guessers</h3>
        <Guessers />
      </div>
    </div>
  );
}
