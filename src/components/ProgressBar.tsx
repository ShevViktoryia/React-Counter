import styled from "styled-components";

type ProgressBarProps = {
  count: number;
  maxCount: number;
};

export const ProgressBar = ({ count, maxCount }: ProgressBarProps) => {
  return (
    <ProgressBarStyled>
      <ProgressInnerStyled $count={count} $maxCount={maxCount} />
    </ProgressBarStyled>
  );
};

const ProgressBarStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  background: #e0e0e0;
`;

const ProgressInnerStyled = styled.div<{ $count: number; $maxCount: number }>`
  background: #1babdb;
  height: 20px;
  border-radius: 10px;
  width: ${(props) => (props.$count / props.$maxCount) * 100}%;
`;
