import React, { useEffect, useState } from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";

import CONTRACT_ABI from "../../static/2192-abi.json";
import { FireIcon } from "@heroicons/react/24/outline";
import { WAGMICONFIG } from "../../main";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { cn } from "../../lib/utils";
import { CustomConnectButton } from "..";

const CA2192 = "0x3Ed9AcAac7Bd974eB83a8eA6432a239e3C829D5D";
const DEAD_ADDRESS = "0x000000000000000000000000000000000000dead";

interface ContractReadResult {
  data: bigint | undefined; // Assuming your data should be a string or null
  isLoading: boolean;
}

interface ContractContentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowZorksees: React.Dispatch<React.SetStateAction<boolean>>;
}

type ContractStateType = "idle" | "transaction_pending" | "transaction_success";

const calculatePercentage = (startingNumber: bigint, percentage: number) => {
  return (startingNumber * BigInt(percentage)) / BigInt(100);
};

const ContractContent = ({
  open,
  setOpen,
  setShowZorksees,
}: ContractContentProps) => {
  const { address, isConnected } = useAccount();
  const [contractState, setContractState] = useState<ContractStateType>("idle");

  const { data: balanceBigInt, isLoading } = useReadContract({
    address: CA2192,
    abi: CONTRACT_ABI,
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

  const ninetyPercentBigInt =
    balanceBigInt !== undefined ? calculatePercentage(balanceBigInt, 90) : 0;

  const ninetyPercent =
    ninetyPercentBigInt !== undefined
      ? Number(BigInt(ninetyPercentBigInt) / BigInt(Math.pow(10, 15))) / 1000
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

  const handleBurnTokens = () => {
    if (tokenBalance === 0) {
      return;
    }

    writeContract(
      {
        address: CA2192,
        abi: CONTRACT_ABI,
        functionName: "transfer",
        args: [DEAD_ADDRESS, ninetyPercentBigInt],
      },
      {
        onSuccess: () => {
          setContractState("transaction_pending");
        },
      },
    );
  };

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div
          className={cn(
            contractState !== "transaction_success"
              ? "border-red-500/30 bg-red-500/20"
              : "border-green-700/30 bg-green-700/20",
            "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border  sm:mx-0 sm:h-10 sm:w-10",
          )}
        >
          {contractState !== "transaction_success" ? (
            <ExclamationTriangleIcon
              className="h-6 w-6 text-red-500"
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
              : "Burn 90% of 2192 Tokens"}
          </Dialog.Title>
        </div>
      </div>
      <div>
        {contractState === "idle" && <CustomConnectButton />}

        {isConnected && contractState === "idle" && (
          <div>
            <div className="mt-4 flex gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border  border-neutral-700 bg-neutral-800 p-2">
                <img
                  src="/images/lernitas-icon.png"
                  className="h-12 rounded-lg border border-neutral-700/50 bg-neutral-700/20"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-neutral-300">
                    2192 Tokens
                  </p>
                  <p className=" text-neutral-200">
                    {isLoading ? "Loading Balance..." : <>{tokenBalance}</>}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 items-center gap-2 rounded-2xl border  border-neutral-700 bg-neutral-800 p-2">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-clip rounded-lg border border-neutral-700/50 bg-neutral-700/20">
                  <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-orange-600/60 to-red-600/60 blur-md"></div>
                  <FireIcon className="relative h-8 text-neutral-100" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-neutral-300">
                    Burnable Tokens
                  </p>
                  <p className=" text-neutral-200">
                    {isLoading ? "Loading Balance..." : <>{ninetyPercent}</>}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-amber-100">
              <p className="font-bold">CAUTION:</p>

              <p className="mt-2">
                By signing this contract, you are agreeing to burn 90% of your
                2192 token supply ({ninetyPercent}). In doing so, you will be
                air dropped Zorksees Token.
              </p>

              <p className="mt-2">
                Further details will be shared on the official Keng Lernitas
                twitter account:{" "}
                <a
                  href="https://twitter.com/KengLernitas"
                  className="text-blue-400 transition hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @KengLernitas
                </a>
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
            <p className="font-ScribbleHand text-neural-50 text-balance text-center text-3xl">
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
              onClick={handleBurnTokens}
              disabled={contractState !== "idle"}
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
    </>
  );
};

export default ContractContent;
