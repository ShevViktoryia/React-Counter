import styled from "styled-components";
import { Button } from "./Button";

type ButtonProps = {
  count: number;
  maxCount: number;
  minCount: number;
  updateCount?: () => void;
  resetCount?: () => void;
};

export const ControlButtons = (props: ButtonProps) => {
  return (
    <ControlButtonsStyled>
      <Button
        title="increase"
        updateCount={props.updateCount}
        isDisable={props.count === props.maxCount}
      />
      <Button
        title="reset"
        isDisable={props.count === props.minCount}
        resetCount={props.resetCount}
      />
    </ControlButtonsStyled>
  );
};

const ControlButtonsStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
`;
