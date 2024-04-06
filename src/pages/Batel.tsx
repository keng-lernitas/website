import React, { useEffect, useState } from "react";
import {
  BatelBanner,
  Header,
  KengButton,
  LernitasModal,
  LernitasQuotes,
  Perzans,
  Sportans,
  ZorkseesModal,
  ZorkseesQuotes,
} from "../components";
import { cn } from "../lib/utils";
import { useRecoilState } from "recoil";
import { sportansVisible } from "../atoms/sportans";
import {
  useLernitasTokenDataQuery,
  useZorkseesTokenDataQuery,
} from "../api/graphql";

const Batel = () => {
  const [visible, setVisible] = useRecoilState(sportansVisible);

  const [lernitasModalOpen, setLernitasModalOpen] = useState(false);
  const [zorkseesModalOpen, setZorkseesModalOpen] = useState(false);

  const { data: lernitasData } = useLernitasTokenDataQuery();
  const { data: zorkseesData } = useZorkseesTokenDataQuery();

  return (
    <>
      <LernitasModal open={lernitasModalOpen} setOpen={setLernitasModalOpen} />
      <ZorkseesModal open={zorkseesModalOpen} setOpen={setZorkseesModalOpen} />

      <div className="mx-auto min-h-[100dvh] max-w-5xl">
        <div className="relative h-full ">
          <Header />

          <img
            src="/images/efaltez.png"
            className={cn(
              visible ? "right-[-2%] top-[18%]" : "right-[5%] top-[20%]",
              "absolute  w-[20%] transition-all",
            )}
          />

          <img
            src="/images/batel_background.webp"
            className=" pointer-events-none z-0 ml-[0%] mt-[20%] aspect-[4097/6819] w-full scale-[122%] transform-gpu select-none"
          />

          <KengButton
            type="defind"
            className="absolute left-[53%] top-[42%]  z-10 w-[16%] -translate-x-1/2"
            onClick={() => setLernitasModalOpen(true)}
          />

          <KengButton
            type="atak"
            className="absolute left-[54%] top-[68%]  z-10 w-[16%] -translate-x-1/2"
            onClick={() => setZorkseesModalOpen(true)}
          />

          <BatelBanner
            lernitasTVL={{
              formattedTVL: lernitasData?.lernitasTokenData?.formattedTVL,
              tvl: lernitasData?.lernitasTokenData?.TVL,
              maxTVL: lernitasData?.lernitasTokenData?.maxTVL,
            }}
            zorkseesTVL={{
              formattedTVL: zorkseesData?.zorkseesTokenData?.formattedTVL,
              tvl: zorkseesData?.zorkseesTokenData?.TVL,
              maxTVL: zorkseesData?.zorkseesTokenData?.maxTVL,
            }}
          />

          <Sportans
            visibleShields={lernitasData?.lernitasTokenData?.visibleShields}
          />

          <Perzans
            visibleShields={zorkseesData?.zorkseesTokenData?.visibleShields}
          />

          <LernitasQuotes />

          <ZorkseesQuotes />
        </div>
      </div>
    </>
  );
};

export default Batel;
