export default function Info_main() {
  return (
    <main className=" text-foreground flex items-center justify-center md:p-6 sm:px-6 sm:-m-0 -m-4 text-[10px] sm:scale-100 scale-75">
      <div className="space-y-2 font-light text-[1rem]">
        <p className="font-semibold text-gray-300 text-[1.1rem]">
          Digital creator
        </p>
        <ul className="space-y-1 ml-4 list-disc text-[1rem]">
          <li>
            <span className="text-white">Nayakanz </span>
            <span className="text-sm align-super">LA</span>
          </li>
          <li>23 A/L Batch 📝</li>
          <li>Vegan 🌱</li>
          <li>Game Design 🎮 | Web Dev 💻 | React 🚀</li>
          <li>Creator of ….. 😉</li>
        </ul>
        <p className="pt-2 text-[1.2rem]">
          I’m the best in the whole multiverse
        </p>

        <a
          href="mailto:dev.sandakelum@gmail.com"
          className="text-[1rem] font-light underline"
        >
          dev.sandakelum@gmail.com
        </a>
      </div>
    </main>
  );
}
