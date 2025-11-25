import React from 'react';

interface ModalProps{
    isOpen : boolean;
    onClose : () => void;
    children : React.ReactNode;
}

export default function Modal({isOpen, onClose, children}:ModalProps){

    if(!isOpen) return null;
    return(
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose} // 배경 클릭하면 닫힘
        >
            <div
                className="bg-white rounded-lg p-6 w-[300px]"
                onClick={(e) => e.stopPropagation()} // 모달 안 클릭은 닫히지 않도록
            >
                {children}
            </div>
        </div>
    );
}