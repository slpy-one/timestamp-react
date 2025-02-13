export const AboutPage = () => {
  return (
    <div className="container md:w-[60%] w-[90%] h-screen mx-auto text-center flex flex-col justify-center items-center">
      <div className="bg-text text-bg px-6 py-2 rounded">
        <h1 className={`p-4 text-3xl underline`}>About</h1>
        <div className="text-left pb-4">
          <p>
            &nbsp;&nbsp;This is one of various project that will be come out
            later in the name of "
            <a
              href="https://github.com/slpy-one"
              target="_blank"
              className="hover:opacity-60 underline hover:no-underline"
            >
              slpy.one
            </a>
            " in MIT LICENSE & Open source.
          </p>
          <br />
          <p>
            &nbsp;&nbsp;This project is got inspiration from {""}
            <a
              href="https://r.3v.fi/discord-timestamps/"
              target="_blank"
              className="hover:opacity-60 underline hover:no-underline"
            >
              https://r.3v.fi/discord-timestamps/
            </a>{" "}
            which is used to generating timestamp for discord. If you want to
            update anything its okay to send a pull request to the repository :)
          </p>

          <br />

          <div>
            <h3 className="py-4 text-xl underline">Links</h3>
            <div>
              &nbsp;&nbsp;
              <a
                href="https://github.com/slpy-one/timestamp"
                target="_blank"
                className="hover:opacity-60 underline hover:no-underline"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
