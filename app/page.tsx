import Card from "@/components/Card";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-white font-bold text-center text-3xl sm:text-4xl   lg:text-6xl ">
        This is First Nextjs App
      </h1>
      <p className="text-center text-blue-100 font-bold mt-6 text-xl">This app crafted using Typescript,TailwindCss,Lucide</p>
    </div>
  );
}
