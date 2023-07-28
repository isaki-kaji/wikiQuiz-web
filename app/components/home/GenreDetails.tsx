import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GenreProps } from "@/app/types";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CategoryCard from "./CategoryCard";

type GenreDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  genre: GenreProps;
};

const GenreDetails = ({ isOpen, closeModal, genre }: GenreDetailsProps) => {
  const { title, Icon, categoryList } = genre;
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex flex-col h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg h-[80%] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <div className="sticky top-1 z-20 flex flex-between">
                    <div className="bg-[#22A699] rounded-xl">
                      <h3 className="text-2xl text-white p-2">{title}</h3>
                    </div>
                    <AiOutlineCloseCircle
                      color="#22A699"
                      size={"60px"}
                      onClick={closeModal}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="h-full">
                    {categoryList.map((category) => (
                      <CategoryCard key={category} category={category} />
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GenreDetails;