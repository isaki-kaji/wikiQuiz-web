import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useQuizInfoStore } from "@/app/stores/store";
import { ANNOTATION, EXCUSE } from "@/constants/const";
import { useRouter } from "next/navigation";
import CustomButton from "../CustomButton";

type StandbyModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const StandbyModal = ({ isOpen, closeModal }: StandbyModalProps) => {
  const { category } = useQuizInfoStore();
  const router = useRouter();

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
              <Dialog.Panel className="fixed inset-0 bg-white mt-[61px] sm:mt-[73px] flex-center flex-col gap-4">
                <AiOutlineCloseCircle
                  color="#22A699"
                  onClick={closeModal}
                  className="text-4xl sm:text-6xl cursor-pointer absolute top-4 right-4"
                />
                <h1 className="text-xl sm:text-4xl pb-6 select-none">
                  {category} クイズ
                </h1>
                <div className="w-[90%] md:w-[80%] lg:w-[60%] border-2 border-[#22A699]">
                  <p className="p-4 text-sm md:text-base mx-auto">{EXCUSE}</p>
                </div>
                <p className="text-xs md:text-sm w-[90%] md:w-[80%] lg:w-[60%] text-center">
                  {ANNOTATION}
                </p>
                <CustomButton
                  title={"スタート"}
                  hasAnime={true}
                  containerStyles="text-4xl text-white bg-[#FF7000] rounded-2xl my-12 animate-pulse"
                />
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default StandbyModal;
