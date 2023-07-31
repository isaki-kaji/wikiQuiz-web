import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type StandbyModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const StandbyModal = ({ isOpen, closeModal }: StandbyModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child as={Fragment}>
            <div className="fixed inset-0">
              <Dialog.Panel className="fixed inset-0 bg-white mt-[61px] sm:mt-[73px]">
                {/* ここにダイアログのコンテンツを記述 */}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default StandbyModal;
