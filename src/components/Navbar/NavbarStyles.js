import styled from "styled-components";

export const NavWrapper = styled.div`
   position: absolute;
   width: 100%;
   background: #fff;
   display: flex;
   justify-content: space-between;
   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.33);
   padding: 1rem 3rem;
   z-index: 500;

   img {
      height: 22px;
   }

   button {
      background: #3d55df;
      color: white;
      padding: 5px 15px;
      box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.1);
      border: 1px solid #324cdd;
      border-radius: 4px;
      cursor: pointer;

      :hover{
         background: #324d88;
      }
    

      img {
         height: 12px;
         padding-right: 10px;
      }
   }
`;
export const NavLinks = styled.div`
   width: 30%;
   display: flex;
   justify-content: space-between;
   min-width: 250px;
   max-width: 320px;

   a{
     text-decoration: none;
     color: gray;
   }
   a:focus {
        color: #462686;
        border-bottom: 3px dashed #462686;
        padding-bottom:6px;
    }
`;
