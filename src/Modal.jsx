import React from 'react';

const Modal = ({ isOpen, closeModal, item }) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed inset-0 bg-black backdrop-blur-lg bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[80%] h-[80%] relative">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-500"
          onClick={closeModal}
        >
          &times;
        </button>
        
        {/* เพิ่ม iframe ที่นี่ */}
        <iframe
          src={item.url} // ใช้ URL จาก item หรือ URL ของไฟล์ที่ต้องการแสดง
          title={item.title}
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Modal;
