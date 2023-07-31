import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type StandbyModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const StandbyModal = ({ isOpen, closeModal }: StandbyModalProps) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200 transform"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="fixed inset-0">
              <Dialog.Panel className="fixed inset-0 bg-white mt-[61px] sm:mt-[73px]"></Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default StandbyModal;
