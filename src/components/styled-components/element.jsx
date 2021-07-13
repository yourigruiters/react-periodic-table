import Styled from "styled-components";
import { colors, fonts } from "./constants";

export const StyledElementDiv = Styled.div`
    grid-column-start: ${(props) => props.column};
    grid-row-start: ${(props) => props.row};
    width: 100%;
    height: auto;
    background-color:${(props) => {
      switch (props.block) {
        case "d":
          return colors.d;
        case "f":
          return colors.f;
        case "p":
          return colors.p;
        case "s":
          return colors.s;
        default:
          return colors.n;
      }
    }};
    border-width: 1px;
    border-style: solid;
    border-color: #00000029;
    cursor: pointer;
    text-align: center;
    color: white;
    font-family: ${fonts.primary};

    &:hover {
        color: black;
        border-color: black;
    }
`;

export const StyledElementAtomicNumber = Styled.p`
    color: black;
    font-size: 12px;
    font-weight: bold;
`;

export const StyledElementSymbol = Styled.p`
    font-size: 22px;
    font-weight: bold;
    font-family: ${fonts.secondary};
    text-transform: uppercase;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 18px;
    }

`;

export const StyledElementName = Styled.p`
    font-size: 10px;
    color: black;

    @media screen and (max-width: 1200px) {
        font-size: 8px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 6px;
    }
`;
