import styled from "styled-components";
import { device } from "../device";

export const StyledStyleLogin = styled.div`
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      grid-template-rows: autofill;
    }

    .left {
      background-color: #3f51b5;
      @media ${device.tablet} {
        display: none;
      }
      .container {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        gap: 20px;
        h1 {
          font-size: 40px;
        }
        p {
          font-size: 20px;
        }
      }
    }

    .right {
      background-color: white;
      .container {
        color: #3f51b5;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
  }
`;
