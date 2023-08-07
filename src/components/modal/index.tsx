import React from "react";

function Modal(props: any) {
  const { showModal, modalBody } = props;
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center bg-#00000073 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {modalBody}
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
