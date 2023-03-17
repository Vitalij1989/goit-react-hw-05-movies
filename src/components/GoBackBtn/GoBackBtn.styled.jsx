import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  color: #07345a;
  cursor: pointer;
  padding: 10px;
  margin: 10px 0;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #07345a;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;

  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    background-color: #ffff01;
    border: 2px solid rgba(0, 0, 0, 0);
    color: #ff0101;
  }
`;
