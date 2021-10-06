import React from "react";
import graduate from "../../assets/graduate.png";
import { ModalData } from "./ModalData";
import { ModalWrapper, ModalText } from './ModalStyles';

const Modal = () => {
   return (
      <ModalWrapper>
         <h1>What are you looking for?</h1>
         <wrapper>
            <div>
               {ModalData.map((item, index) => {
                  return (
                     <ModalText key={index}>
                        <img src={graduate} alt="graduate" />
                        <div>
                           <h4>{item.header}</h4>
                           <p>{item.text}</p>
                        </div>
                     </ModalText>
                  );
               })}
            </div>
         </wrapper>
      </ModalWrapper>
   );
};

export default Modal;
