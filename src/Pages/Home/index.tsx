import { useEffect, useState } from "react";

import { DateInterface } from "../../Modules/Interface/DateInterface";
import handlingDate from "../../Modules/dataType";
import handleExample from "../../Modules/dateSample";

export const HomePage = () => {
  const [type, setType] = useState<number>(1);
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();

  const [sample, setSample] = useState<string | number>();
  const [rtn, setRTN] = useState<string | number>();

  var Options = [
    { id: 1, text: `default` },
    { id: 2, text: `short time` },
    { id: 3, text: `long time` },
    { id: 4, text: `short date` },
    { id: 5, text: `long date` },
    { id: 6, text: `short date + time` },
    { id: 7, text: `long date + time` },
    { id: 8, text: `relative time` },
  ];

  const submitHandler = () => {
    console.log(type, date, time);
    if (date != undefined && time != undefined && date != "" && time != "") {
      var passData: DateInterface = {
        type: type,
        date: date,
        time: time,
      };

      setRTN(handlingDate(passData));
      setSample(handleExample(passData));
    }
  };

  useEffect(() => {
    submitHandler();
  }, [type, date, time]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-3xl py-6">TimeStamp Generator</h1>

      {/* Main Input */}
      <div className="w-[80%] md:w-[50%] mx-auto bg-text text-bg py-4 rounded">
        <form>
          <select
            className="border-2 border-bg focus:border-bg/50 outline-0 !p-2 mb-2 rounded"
            onChange={(e) => setType(Number(e.target.value))}
          >
            {Options.map((option) => {
              return <option value={option.id}>{option.text}</option>;
            })}
          </select>
          <br />

          <input
            type="date"
            className="border-2 border-bg focus:border-bg/50 outline-0 my-2 p-2 mr-2 rounded"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="border-2 border-bg focus:border-bg/50 outline-0 my-2 p-2 rounded ml-2"
            onChange={(e) => setTime(e.target.value)}
          />
          <br />
        </form>
      </div>

      {/* Result */}
      <div className="w-[80%] md:w-[50%] mx-auto bg-text text-bg py-4 rounded">
        <h1 className={`text-2xl pb-6`}>Result</h1>
        <code className="bg-overlay p-4 text-text">
          {rtn !== "" && rtn !== 0 && rtn !== undefined
            ? rtn
            : "Waiting for input..."}
        </code>
      </div>

      {/* Sample */}
      <div className="w-[80%] md:w-[50%] mx-auto bg-text text-bg py-4 rounded">
        <h1 className={`text-2xl pb-6`}>What showing on discord</h1>
        <code className="bg-overlay p-4 text-text">
          {sample !== "" && sample !== 0 && sample !== undefined
            ? sample
            : "Waiting for input..."}
        </code>
      </div>
    </div>
  );
};
