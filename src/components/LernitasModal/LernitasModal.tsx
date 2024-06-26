import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";
import { LernitasContent } from "..";

interface LernitasModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LernitasModal = ({ open, setOpen }: LernitasModalProps) => {
  const [showZorksees, setShowZorksees] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-950/90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto overflow-x-clip">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-clip rounded-3xl border border-neutral-700 bg-neutral-900 px-4 pb-4 pt-5 text-left font-MonaSans shadow-xl transition-all sm:my-8 sm:max-w-lg sm:p-6">
                <div className="pointer-events-none absolute inset-0 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-keng-gold/20  blur-3xl"></div>

                <div className="absolute right-0 top-0 z-50 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md  text-neutral-400 transition hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <LernitasContent
                  open={open}
                  setOpen={setOpen}
                  setShowZorksees={setShowZorksees}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LernitasModal;
