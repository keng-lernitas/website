import React, { useState } from "react";
import { cn } from "../../lib/utils";

// "letz giv dem sumfin tu drenk!"
// "we fit in da shaid!"
// "giv dem nuting!"
// "bt tek frum dem evrytin!"
// "nu mersy!"
// "TU BATEL!!!"

const ZorkseesQuotes = () => {
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<any>(null);

  const handleZorkseesClicked = () => {
    setQuoteVisible(true);

    // play /audio/poke.mp3
    let audio = new Audio("/audio/poke.mp3");
    audio.volume = 0.1;
    audio.play();

    const timeout = setTimeout(() => {
      setQuoteVisible(false);
    }, 750);

    if (currentTimeout) {
      clearTimeout(currentTimeout);
      setCurrentTimeout(timeout);
    } else {
      setCurrentTimeout(timeout);
    }
  };

  return (
    <>
      <div
        className="group absolute left-[18%] top-[54.2%] w-[31%] cursor-pointer"
        onClick={handleZorkseesClicked}
      >
        <img
          src="/images/zorksees_idle.webp"
          className={cn(
            !quoteVisible ? "opacity-100" : "opacity-0",
            "absolute  ",
          )}
          draggable={false}
        />
        <img
          src="/images/zorksees_angry.webp"
          className={cn(
            quoteVisible ? "opacity-100" : "opacity-0",
            "absolute  ",
          )}
          draggable={false}
        />
      </div>

      {quoteVisible && (
        <h2 className="absolute left-[48%] top-[57%] max-w-[27%] text-center font-ScribbleChild text-[2.3dvw] leading-none text-black lg:text-2xl lg:leading-none">
          slorta dem!
        </h2>
      )}
    </>
  );
};

export default ZorkseesQuotes;
