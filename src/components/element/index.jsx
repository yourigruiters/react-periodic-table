import React from "react";
import {
  StyledElementDiv,
  StyledElementAtomicNumber,
  StyledElementSymbol,
  StyledElementName
} from "../styled-components/element";

const Element = ({
  element: { block, row, column, atomicNumber, symbol, name },
  active,
  setActive
}) => {
  let blockValue;
  if (active !== "") {
    blockValue = block === active ? block : "n";
  } else {
    blockValue = block;
  }

  return (
    <StyledElementDiv
      block={blockValue}
      row={row}
      column={column}
      onClick={() => setActive(block)}
    >
      <StyledElementAtomicNumber>{atomicNumber}</StyledElementAtomicNumber>
      <StyledElementSymbol>{symbol}</StyledElementSymbol>
      <StyledElementName>{name}</StyledElementName>
    </StyledElementDiv>
  );
};

export default Element;
