import React, { useEffect, useRef, ReactNode } from "react";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export default function Modal({ isOpenModal, setIsOpenModal, children }: ModalProps) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
        setIsOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setIsOpenModal]);

  useEffect(() => {
    if (isOpenModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <div className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[90%] max-w-lg" ref={modalRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}