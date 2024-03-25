import React, { SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sportansVisible } from "../../atoms/sportans";
import { cn } from "../../lib/utils";

// "letz giv dem sumfin tu drenk!"
// "we fit in da shaid!"
// "giv dem nuting!"
// "bt tek frum dem evrytin!"
// "nu mersy!"
// "TU BATEL!!!"

const QUOTE_LIST = [
  "letz giv dem sumfin tu drenk!",
  "we fit in da shaid!",
  "giv dem nuting!",
  "bt tek frum dem evrytin!",
  "nu mersy!",
  "TU BATEL!!!",
];

const LernitasQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [visible, setVisible] = useRecoilState(sportansVisible);
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<any>(null);

  const handleLernitasClicked = () => {
    var cq = Math.floor(Math.random() * QUOTE_LIST.length);

    setCurrentQuote((prev) => (prev + 1) % QUOTE_LIST.length);
    setQuoteVisible(true);

    const timeout = setTimeout(() => {
      setQuoteVisible(false);

      if (QUOTE_LIST[currentQuote + 1] === "TU BATEL!!!") {
        setVisible(false);
      }
    }, 750);

    if (currentTimeout) {
      clearTimeout(currentTimeout);
      setCurrentTimeout(timeout);
    } else {
      setCurrentTimeout(timeout);
    }
  };

  useEffect(() => {
    if (QUOTE_LIST[currentQuote] === "TU BATEL!!!") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [currentQuote]);

  return (
    <>
      <div
        className="group absolute right-[-6%] top-[38.5%] w-[31%] cursor-pointer"
        onClick={handleLernitasClicked}
      >
        <img
          src="/images/kenglernitas_idle.webp"
          className={cn(
            !quoteVisible ? "opacity-100" : "opacity-0",
            "absolute scale-x-[-1]",
          )}
          draggable={false}
        />

        <img
          src="/images/kenglernitas_angry.webp"
          className={cn(
            quoteVisible ? "opacity-100" : "opacity-0",
            "absolute scale-x-[-1]",
          )}
          draggable={false}
        />
      </div>

      {quoteVisible && (
        <h2 className="absolute right-[20%] top-[48%] w-full max-w-[27%] text-center font-ScribbleChild text-2xl text-black">
          {QUOTE_LIST[currentQuote]}
        </h2>
      )}
    </>
  );
};

export default LernitasQuotes;
