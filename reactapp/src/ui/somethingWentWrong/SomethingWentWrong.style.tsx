import styled from "styled-components";
import { device } from "../device";

export const StyledSomethingWentWrong = styled.section`
  height: 100vh;
  .something-went-wrong {
    height: 100%;
    background-color: #00377b;
    .container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transform: translate(0, 175%);
      @media ${device.tablet} {
        flex-direction: column;
        transform: translate(0, 100%);
      }
      @media ${device.mobileL} {
        flex-direction: column;
        transform: translate(0, 50%);
      }
    }
    .headingScope {
      margin: 14px;
      font-size: 100px;
      font-weight: 300;
      color: white;
      transform: translate(0, 14%);
    }
    .contentHeading {
      font-size: 25px;
      font-weight: 300;
      height: 27.2px;
      line-height: 27.5px;
      color: white;
      text-align: center;
    }
    .contentScope {
      text-align: center;
      margin-left: 20px;
      margin-right: 20px;
    }
    .contents {
      display: inline;
      margin-right: 3px;
      font-size: 14px;
      font-weight: 400;
      color: white;
    }
    .links {
      font-size: 14px;
      font-weight: 400;
      color: #00c8ff;
      display: inline;
    }
    .links:link {
      color: #00c8ff;
      background-color: transparent;
      text-decoration: none;
    }
    .links:visited {
      color: #00c8ff;
      background-color: transparent;
      text-decoration: none;
    }

    .links:hover {
      color: white;
      background-color: transparent;
      text-decoration: underline;
    }

    .links:active {
      color: white;
      background-color: transparent;
      text-decoration: underline;
    }
  }
`;

