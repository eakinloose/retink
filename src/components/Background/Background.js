import React from "react";
import {
   BackgroundTopWrapper,
   Circle,
   Circle1,
   Circle2,
   Circle3,
   Circle4,
   Circle5,
   Circle6,
   Circle7,
   Rectangle,
   RectangleTwo,
   Content,
} from "./BackgroundStyles";
import ikbal from "../../assets/ikba.png";
import Modal from "../Modal/Modal";
const Background = () => {
   return (
      <>
         <Circle />
         <Circle1 />
         <Circle2 />
         <Circle3 />
         <Circle4 />
         <Circle5 />
         <Circle6 />
         <Circle7 />
         <Rectangle>
            Hi there! Need help in creating a Marketing plan for your business?
            I can help you to create one using Retink AI engine.
         </Rectangle>
         <RectangleTwo>Click on the options to get started</RectangleTwo>
         <BackgroundTopWrapper>
            <Content>
               <Modal />
               <img src={ikbal} alt="ikbal" />
            </Content>
            <div className="slope"></div>
         </BackgroundTopWrapper>
      </>
   );
};

export default Background;
