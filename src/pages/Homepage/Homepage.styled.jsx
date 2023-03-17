import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
`;

export const MovieItem = styled.li`
  display: flex;
  border-radius: 5px;
  transition-property: scale, box-shadow, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-radius: 5px;
    outline: 3px solid #07345a;
    scale: 1.03;
    box-shadow: 0 0 15px 5px #7f7676;
  }
`;

export const MovieTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
`;

export const MovieImage = styled.img`
  background: #fff;
  border-radius: 5px;

  margin-bottom: 8px;
`;

export const MovieText = styled.p`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  color: black;
  text-align: center;
`;

export const MovieLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
`;
