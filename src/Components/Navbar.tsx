export const NavBar = () => {
  return (
    <div className="w-full flex flex-row absolute top-0 left-0 bg-gradient-to-b from-[#181818] to-[transparent]">
      <div className="w-full flex justify-start border-collapse gap-[.5rem]">
        <a
          className="p-4 hover:opacity-60 hover:bg-overlay border-r-[1px] border-solid border-text"
          href="/"
        >
          /Home
        </a>
      </div>
      <div className="w-full flex justify-end border-collapse gap-[.5rem]">
        <a
          className="p-4 hover:opacity-60 hover:bg-overlay border-l-[1px] border-solid border-text"
          href="/about"
        >
          /About
        </a>
      </div>
    </div>
  );
};
