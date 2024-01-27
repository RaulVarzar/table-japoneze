import { forwardRef, useRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ data }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function closeModal() {
    dialog.current.close();
  }

  return createPortal(
    <dialog ref={dialog} className="text-center modal">
      <div className="relative max-w-2xl max-h-screen p-0 mx-1 my-3 rounded-lg shadow-md cursor-pointer bg-primary-content modal-box">
        <div className="relative p-4 overflow-x-hidden rounded-2xl">
          <img
            className="object-cover rounded-2xl"
            alt={data.image}
            src={data.image}
          />
          <span className="absolute cursor-pointer right-4 top-4">
            <i className="text-2xl fa-regular text-stone-200 fa-heart"></i>
          </span>
        </div>
        <div className="flex justify-between pl-2 mt-4 mb-2 ">
          <div>
            <p className="mb-0 text-lg font-semibold text-gray-300">
              {data.title}
            </p>
            <p className="mt-0 text-gray-200 text-md">{data.year}</p>
          </div>
          <div className="flex flex-col-reverse mb-1 mr-4 cursor-pointer group"></div>
        </div>
        <button
          className="rounded-none btn btn-ghost btn-block"
          onClick={closeModal}
        >
          CLOSE
        </button>
      </div>

      <form method="dialog" className="h-screen modal-backdrop">
        <button></button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
