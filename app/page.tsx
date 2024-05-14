import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex justify-center mt-12">
      <Card>
      <h1 className="text-white font-bold text-center text-4xl">
        This is First Nextjs App
      </h1>
      <p className="text-center text-blue-300 font-bold mt-6">This app crafted using Typescript,TailwindCss</p>
    </Card>
    </div>
  );
}
