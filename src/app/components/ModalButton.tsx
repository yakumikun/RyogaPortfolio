"use client";

import React, { useState } from "react";
import Modal from "./Modal";

type Props = {
  content: string;
  domain: string;
};

export default function ModalButton({ content, domain }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>
        <div className="relative flex items-center justify-center my-2 px-2 py-1 border-2 border-black border-solid font-bold hover:scale-95">
          VIEW MORE
        </div>
      </button>

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <div className="flex flex-col items-center justify-center">
          <p className="p-4">{content}</p>
          <a
            href={domain}
            className="p-2 border-solid border-2 border-black font-bold"
          >
            CHECK OUT
          </a>
        </div>
      </Modal>
    </div>
  );
}
