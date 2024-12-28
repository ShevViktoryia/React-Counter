import styled from "styled-components";

type CounterProps = {
  count: number;
};

export const CounterField = (props: CounterProps) => {
  return (
    <CounterFieldStyled
      style={{ backgroundColor: props.count === 5 ? "red" : "#1babdb" }}
    >
      {props.count}
    </CounterFieldStyled>
  );
};

const CounterFieldStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
