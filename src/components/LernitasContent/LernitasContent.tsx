import React, { useEffect, useState } from "react";

import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import { WAGMICONFIG } from "../../main";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";

import { BeakerIcon, ExclamationCircleIcon } from "@heroicons/react/16/solid";

import BASE_Lernitas_Proxy_ABI from "../../static/BASE-Lernitas-Proxy-ABI.json";

import { Dialog } from "@headlessui/react";
import { cn } from "../../lib/utils";
import { CustomConnectButton, Slider } from "..";

const BASE_LERNITAS_CA = "0xd75f5Bee37168F97552F843076adc2eA9A8A0935";
const DEPOSIT_ADDRESS = "0xf86358b208A177050eAEe6b5552cF24E49f11cfF";

interface ContractReadResult {
  data: bigint | undefined; // Assuming your data should be a string or null
  isLoading: boolean;
}

interface LernitasContentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowZorksees: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContractStateType = "idle" | "transaction_pending" | "transaction_success";

const calculatePercentage = (startingNumber: bigint, percentage: number) => {
  return (startingNumber * BigInt(percentage)) / BigInt(100);
};

const LernitasContent = ({
  open,
  setOpen,
  setShowZorksees,
}: LernitasContentProps) => {
  const [walletPercentage, setWalletPercentage] = useState(0);

  const { address, isConnected } = useAccount();
  const [contractState, setContractState] = useState<ContractStateType>("idle");

  const { data: balanceBigInt, isLoading } = useReadContract({
    address: BASE_LERNITAS_CA,
    abi: BASE_Lernitas_Proxy_ABI,
    functionName: "balanceOf",
    args: [address],
    query: {
      enabled: isConnected,
    },
  }) as ContractReadResult;

  const tokenBalance =
    balanceBigInt !== undefined
      ? Number(BigInt(balanceBigInt) / BigInt(Math.pow(10, 15))) / 1000
      : 0;

  const walletPercentageBigInt =
    balanceBigInt !== undefined
      ? calculatePercentage(balanceBigInt, walletPercentage)
      : 0;

  const walletPercentageDisplay =
    walletPercentageBigInt !== undefined
      ? Number(BigInt(walletPercentageBigInt) / BigInt(Math.pow(10, 15))) / 1000
      : 0;

  const {
    data: hash,
    writeContract,
    isPending,
    isSuccess,
  } = useWriteContract();

  const result = useWaitForTransactionReceipt({
    config: WAGMICONFIG,
    hash: hash,
  });

  useEffect(() => {
    if (result.data?.status === "success") {
      setContractState("transaction_success");
      setShowZorksees(true);
    }
  }, [result]);

  const handleSignContract = () => {
    if (tokenBalance === 0) {
      return;
    }

    writeContract(
      {
        address: BASE_LERNITAS_CA,
        abi: BASE_Lernitas_Proxy_ABI,
        functionName: "transfer",
        args: [
          DEPOSIT_ADDRESS, // recipient_ (address)
          walletPercentageBigInt, // amount_ (uint256)
        ],
      },
      {
        onSuccess: () => {
          setContractState("transaction_pending");
        },
      },
    );
  };

  return (
    <div className="relative">
      <div className="sm:flex sm:items-center">
        <div
          className={cn(
            contractState !== "transaction_success"
              ? "border-keng-gold/30 bg-keng-gold/20"
              : "border-green-700/30 bg-green-700/20",
            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border  sm:mx-0 sm:h-10 sm:w-10",
          )}
        >
          {contractState !== "transaction_success" ? (
            <ShieldExclamationIcon
              className="h-6 w-6 text-keng-gold"
              aria-hidden="true"
            />
          ) : (
            <CheckCircleIcon
              className="h-6 w-6 text-green-700"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-xl font-semibold leading-6 text-white"
          >
            {contractState === "transaction_success"
              ? "contrakt sined"
              : "halp da sportinz"}
          </Dialog.Title>
        </div>
      </div>
      <div>
        {contractState === "idle" && <CustomConnectButton />}

        {isConnected && contractState === "idle" && (
          <div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border  border-neutral-700 bg-neutral-800 p-2">
                <img
                  src="/images/lernitas-icon.png"
                  className="h-12 rounded-lg border border-neutral-700/50 bg-neutral-700/20"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-neutral-300">2192</p>
                  <p className=" text-neutral-200">
                    {isLoading ? "Loading Balance..." : <>{tokenBalance}</>}
                  </p>
                </div>
              </div>

              <ArrowRightIcon className="size-3 sm:size-4 lg:size-6" />

              <div className="flex flex-1 items-center gap-2 rounded-2xl border  border-neutral-700 bg-neutral-800 p-2">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-clip rounded-lg border border-neutral-700/50 bg-neutral-700/20">
                  <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-keng-gold-dark to-keng-gold blur-md"></div>

                  <img
                    src="/images/shield_sm.png"
                    className="relative h-12 rounded-lg border border-neutral-700/50 bg-neutral-700/20 p-1"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-sm font-medium text-neutral-300">
                    War Aid
                  </p>
                  <p className=" text-neutral-200">
                    {isLoading ? (
                      "Loading Balance..."
                    ) : (
                      <>{walletPercentageDisplay}</>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Input slider */}

            <div className="py-4">
              <div className="mb-1.5 flex justify-between">
                <p className="text-sm font-medium">Tokens Committed</p>
                <p className="text-sm font-medium">{walletPercentage}%</p>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={(value) => setWalletPercentage(value[0])}
                value={[walletPercentage]}
                // className={cn("w-[60%]")}
              />
            </div>
            <div className="mt-4 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 text-amber-100">
              <p className="flex items-center gap-x-1 font-semibold">
                <ExclamationCircleIcon className="size-5" />
                Information
              </p>

              <p className="mt-1 text-sm text-amber-100/90">
                Lernitas needs your help to win this battle.
                <br />
                Put fourth as many soldiers as you can to guarantee victory and
                be rewarded with a great and mysterious prize.
              </p>
            </div>
          </div>
        )}

        {contractState === "transaction_pending" && (
          <div className="relative mt-4 rounded-lg border border-sky-600/30 bg-sky-600/20 p-2">
            <span className="absolute right-0 top-0 flex h-3 w-3 translate-x-[30%] translate-y-[-30%] ">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
            </span>

            <p className="text-center  font-medium text-sky-100">
              Transacting Pending...
            </p>
          </div>
        )}

        {contractState === "transaction_success" && (
          <div className="py-6">
            <p className="text-neural-50 text-balance text-center font-ScribbleHand text-3xl">
              fank u for ur davosan
            </p>
            <p className="mt-2 text-balance text-center  font-ScribbleChild text-sm leading-6 tracking-widest text-neutral-400 ">
              ur offa to da wun tru gud keng zorksees haz ben aknoligd
            </p>
          </div>
        )}

        <div className="mt-5 flex-col gap-2 sm:mt-4 sm:flex">
          {!!isConnected && contractState === "idle" && (
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border-t border-t-red-400 bg-red-600 px-3 py-2 text-sm font-semibold text-red-50 shadow  transition hover:bg-red-700  sm:w-auto"
              onClick={handleSignContract}
              disabled={contractState !== "idle" || isPending}
            >
              {isPending ? "Signing Contract..." : "Sign Contract"}
            </button>
          )}
          {contractState !== "transaction_pending" && (
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md border-t border-t-neutral-200 bg-neutral-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-neutral-400 sm:mt-0 sm:w-auto"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LernitasContent;
