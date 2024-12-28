import styled from "styled-components";

type ButtonProps = {
  title: string;
  updateCount?: () => void;
  resetCount?: () => void;
  isDisable?: boolean;
};

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={
        props.title === "increase" ? props.updateCount : props.resetCount
      }
      disabled={props.isDisable}
    >
      {props.title}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 2px solid #1babdb;
  color: azure;
  padding: 15px 20px;
  border-radius: 10px;
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
