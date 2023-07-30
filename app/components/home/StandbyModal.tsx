import { type } from "os";
import React from "react";

type StandbyModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const StandbyModal = ({ isOpen, closeModal }: StandbyModalProps) => {
  return <div>StandbyModal</div>;
};

export default StandbyModal;
