import styled from "styled-components";

export const BackgroundTopWrapper = styled.div`
   width: 100%;
   height: 85vh;
   background: linear-gradient(119.77deg, #ea0022 1.67%, #754de8 116.47%);

   .slope {
      position: absolute;
      border-bottom: 15vh solid white;
      border-left: 100vw solid transparent;
      bottom: 15vh;
   }
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   height: 90%;
   margin: 4%;
   position: absolute;

   img {
      height: 100%;
      z-index: 1;
   }
`;

export const Rectangle = styled.div`
   position: absolute;
   right: 4%;
   top: 10%;
   background: white;
   width: 250px;
   padding: 1rem;
   box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.5);
   border-radius: 4px;
   color: #525f7f;

   &::after {
      position: absolute;
      top: 97px;
      right: 233px;
      content: "";
      border-left: 17px solid white;
      border-bottom: 20px solid transparent;
   }
`;

export const RectangleTwo = styled.div`
   position: absolute;
   right: 7%;
   top: 33%;
   background: white;
   width: 170px;
   padding: 1rem;
   box-shadow: 0px 15px 35px rgba(50, 50, 93, 0.5);
   border-radius: 4px;
   color: #525f7f;

   &::after {
      position: absolute;
      top: -15px;
      right: 153px;
      content: "";
      border-left: 17px solid white;
      border-top: 20px solid transparent;
   }
`;

export const Circle = styled.div`
   width: 9vw;
   height: 9vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   top: 11vh;
   left: 5vw;
`;
export const Circle1 = styled.div`
   width: 4vw;
   height: 4vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   top: 70vh;
   left: 2vw;
`;
export const Circle2 = styled.div`
   width: 11vw;
   height: 11vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   left: 9vw;
   top: 33vh;
`;
export const Circle3 = styled.div`
   width: 7vw;
   height: 7vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   left: 17vw;
   top: 49vh;
`;
export const Circle4 = styled.div`
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   width: 8vw;
   height: 8vw;
   left: 90vw;
   top: 55vh;
`;
export const Circle5 = styled.div`
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   width: 11vw;
   height: 11vw;
   left: 87vw;
   top: 12vh;
`;
export const Circle6 = styled.div`
   width: 11vw;
   height: 11vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   left: 79vw;
   top: 33vh;
`;
export const Circle7 = styled.div`
   width: 6vw;
   height: 6vw;
   border-radius: 50%;
   position: absolute;
   background: #ffffff;
   opacity: 0.16;
   top: 50vh;
   left: 73vw;
`;
