import React, { useEffect, useState } from "react";
import {
  BatelBanner,
  ContractAddresses,
  Footer,
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
  const [countDownComplete, setCountDownComplete] = useState(false);

  const [visible, setVisible] = useRecoilState(sportansVisible);

  const [lernitasModalOpen, setLernitasModalOpen] = useState(false);
  const [zorkseesModalOpen, setZorkseesModalOpen] = useState(false);

  const { data: lernitasData } = useLernitasTokenDataQuery(
    {},
    {
      refetchInterval: 20000,
    },
  );
  const { data: zorkseesData } = useZorkseesTokenDataQuery(
    {},
    {
      refetchInterval: 20000,
    },
  );

  return (
    <>
      <LernitasModal open={lernitasModalOpen} setOpen={setLernitasModalOpen} />
      <ZorkseesModal open={zorkseesModalOpen} setOpen={setZorkseesModalOpen} />

      <div className="mx-auto min-h-[100dvh] max-w-5xl">
        <div className="relative h-full ">
          <Header />

          <img
            src="/images/batel_background.webp"
            className={cn(
              countDownComplete ? "hidden" : "block",
              "pointer-events-none z-0 ml-[0%] mt-[20%] aspect-[4097/6819] w-full scale-[122%] transform-gpu select-none",
            )}
          />

          <img
            src="/images/batel-finished-background.webp"
            className={cn(
              countDownComplete ? "block" : "hidden",
              "pointer-events-none z-0 ml-[0%] mt-[20%] aspect-[4097/6819] w-full scale-[122%] transform-gpu select-none",
            )}
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
            countDownComplete={countDownComplete}
            setCountDownComplete={setCountDownComplete}
          />

          {!countDownComplete && (
            <>
              <Sportans
                visibleShields={lernitasData?.lernitasTokenData?.visibleShields}
              />

              <Perzans
                visibleShields={zorkseesData?.zorkseesTokenData?.visibleShields}
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

              <LernitasQuotes />

              <ZorkseesQuotes />
            </>
          )}

          {countDownComplete && (
            <>
              <img
                src="/images/script-bg.webp"
                className="pointer-events-none absolute left-1/2 top-[78%] z-0 w-[50%] translate-x-[-40%] scale-[122%] transform-gpu select-none"
              />

              <p className="absolute left-1/2 top-[81%] w-[50%] -translate-x-[40%] whitespace-pre text-center font-ScribbleHand text-[3.5vw] leading-none text-keng-text lg:text-4xl lg:leading-none ">
                {`remember uz\nremember why wi dyed\n\nfur he did nt wysh tribyut or song\nnur monyumentz\nnur powemz ov wor an valur\n\nhiz wish wuz simpol\n\nremumber uz`}
              </p>
            </>
          )}

          <div className="absolute space-y-[5%] pb-[4%] pt-[25%]">
            <div>
              <div className=" mb-[3%] text-center">
                <a
                  href="https://www.coingecko.com/en/api"
                  target="_blank"
                  className=" mx-auto text-center text-xs font-medium text-keng-red transition hover:opacity-80 sm:text-sm md:text-base"
                >
                  Data provided by CoinGecko
                </a>
              </div>

              <ContractAddresses className="" />
            </div>

            <Footer className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Batel;
