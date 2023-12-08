import styled from "styled-components";
import Sprite from '../assets/sprite.svg';

const Icon = styled.svg`
  width: 27px;
  height: 27px;

  fill: var(--color-secondary);
  transition: all 0.4s ease;

  &:hover {
    fill: var(--color-accent);
    transform: translateY(-4px);
  }
`;
interface Props {
  id: string;
}

const Icons = ({ id }: Props) => {
  return (
    <>
      <Icon>
        <use xlinkHref={`${Sprite}#${id}`}></use>
      </Icon>
    </>
  );
};

export default Icons;
