import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-64 bg-hero-pattern bg-repeat-x"></div>
      <div className="flex w-5/6 mx-auto -mt-48 p-16 bg-zinc-800 rounded-t-3xl">
        <div className="w-1/5">
          <Image
            src="/1666365519664.jpg"
            alt="A profile picture of Lucas Bittencourt"
            width={200}
            height={200}
            className="w-full rounded-full border-4 border-zinc-400"
          />
        </div>
        <div className="flex flex-col mx-auto w-5/6 pl-8">
          <p className="text-4xl">Lucas Bittencourt</p>
          <div className="h-8">Socials</div>
          <div className="flex">
            <p className="text-sm pr-64">Role</p>
            <p className="text-sm">Experience</p>
          </div>
          <div className="flex">
            <p className="text-3xl pr-6">Software Engineer</p>
            <p className="text-3xl">7+ years</p>
          </div>
          <div className="h-8">Favorite Tech Stack</div>
          <div className="flex">
            <p className="text-sm p-2 bg-slate-600 rounded-tr-2xl rounded-l-2xl">Next.js</p>
            <p className="text-sm p-2 ml-2 bg-slate-600 rounded-tr-2xl rounded-l-2xl">TailwindCSS</p>
            <p className="text-sm p-2 ml-2 bg-slate-600 rounded-tr-2xl rounded-l-2xl">FastAPI</p>
          </div>
        </div>
      </div>
    </main>
  );
}
