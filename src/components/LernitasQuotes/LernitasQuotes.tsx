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
    // play /audio/poke.mp3
    let audio = new Audio("/audio/poke.mp3");
    audio.volume = 0.05;
    audio.play();

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

      // play audio/sportin_battlecry.wav
      let audio = new Audio("/audio/sportin_battlecry.wav");
      audio.volume = 0.1;
      audio.play();
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
        <h2 className="absolute right-[20%] top-[48%] w-full max-w-[27%] text-center font-ScribbleChild  text-[2.3dvw] leading-none text-black lg:text-2xl lg:leading-none">
          {QUOTE_LIST[currentQuote]}
        </h2>
      )}
    </>
  );
};

export default LernitasQuotes;
