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
   box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11);


   h2,
   h5 {
      font-weight: 400;
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

   input:focus,
   select:focus {
      border-bottom: solid 3px #fa4a84;
      outline: none;
   }

   select,
   option {
      padding: 15px 5px;
      margin-top: 15px;
      border: none;
      background: #f4f8fb;
      box-shadow: 0px 1px 3px 0px grey;
   }
   .phone-number {
      width: 78%;
   }
   .phone {
      display: flex;
      justify-content: space-between;
   }
`;


export const MainWrapper = styled.div`
  padding: 1rem;
  grid-column:3/12;
  height: 100vh;
  position: relative;
`