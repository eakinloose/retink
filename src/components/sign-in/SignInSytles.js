import styled from "styled-components";

export const FormWrapper = styled.div`
   padding: 3rem;
   width: 36%;
   left: 32%;
   position: absolute;
   top: 50%;
   min-width: 329px;
   transform: translateY(-50%);
   height: auto;
   box-shadow: 0px 0.3px 4px 0.4px rgba(50, 50, 93, 0.1);

   h2,
   h5 {
      font-weight: 00;
      margin-bottom: 0.5rem;
   }

   h5 {
      color: grey;
      padding: 5px;
   }

   input {
      width: 100%;
      margin-top: 15px;
      background: #f4f8fb;
      border: none;
      padding: 12px;
      box-shadow: 0px 1px 3px 0px grey;
   }

   input:focus {
      border-bottom: solid 3px #fa4a84;
      outline: none;
   }
`;

export const MainWrapper = styled.div`
   padding: 1rem;
   grid-column: 3/12;
   height: 100vh;
   position: relative;

   button {
      background: #3d55df;
      color: white;
      margin: 1rem auto;
      padding: 10px 20px;
      box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.1);
      border: 1px solid #324cdd;
      border-radius: 4px;
      cursor: pointer;

      :hover {
         background: #324d88;
      }
   }
`;
