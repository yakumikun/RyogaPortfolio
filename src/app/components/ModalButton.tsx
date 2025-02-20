"use client";

import React, { ReactNode, useState } from "react";
import Modal from "./Modal";

type Props = {
  content: string;
};

export default function ModalButton({ content }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>
        <div className="relative flex items-center justify-center mt-2 border-2 border-black border-solid w-[150px] h-[50px] font-bold hover:scale-95">
          VIEW MORE
        </div>
      </button>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <p className="p-4">{content}</p>
      </Modal>
    </div>
  );
}