import styled from "styled-components";
import Socials from '../assets/socials.svg';

interface Props {
  id: string;
}

const Icons = ({ id }: Props) => {
  return (
    <>
      <svg>
        <use xlinkHref={`${Socials}#${id}`}></use>
      </svg>
    </>
  );
};

export default Icons;
