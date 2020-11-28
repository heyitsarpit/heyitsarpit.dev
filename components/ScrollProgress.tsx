import styled from '@emotion/styled';

import { useScroll } from './ScrollProvider';

const Bar = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 350% 350%;

  height: 6px;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;

type Props = { control: 'width' | 'height' };

const ScrollProgress: React.FC<Props> = ({ control }) => {
  const { length } = useScroll();

  return <Bar style={{ [control]: `${length}%` }} />;
};

export default ScrollProgress;
