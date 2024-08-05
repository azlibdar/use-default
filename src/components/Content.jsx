import { useDefault } from "react-customs";

function Content() {
  const initialValue = "Click to set name";
  const defaultName = "John Doe";

  const [name, setName] = useDefault(initialValue, defaultName);

  const handleSetName = () => {
    setName("Azlan Ibrahim");
  };

  const handleSetNull = () => {
    setName(null);
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="w-full my-6 flex flex-col items-center">
          <h1 className="text-2xl text-zinc-100 font-semibold">{name}</h1>
          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={handleSetName}
              className="py-2.5 px-5 rounded-lg bg-indigo-400 text-black font-semibold transition hover:opacity-90 active:translate-y-[1px] text-sm"
            >
              Set to name
            </button>
            <button
              onClick={handleSetNull}
              className="py-2.5 px-5 rounded-lg bg-zinc-400 text-black font-semibold transition hover:opacity-90 active:translate-y-[1px] text-sm"
            >
              Set to null
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
