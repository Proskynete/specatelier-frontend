import styled from 'styled-components';
import { COLOR_WHITE, SHADOW_GREY, COLOR_MINE_SHAFT, COLOR_LIGHTGREY } from '../../config/constants/styled-vars';


export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  max-height: ${({ maxHeight }) => maxHeight || '100%'};
  margin-top: 8px;
  position: absolute;
  border: 1px solid #CCC;
  background-color: ${COLOR_WHITE};
  min-width: 160px;
  min-height 30px;
  width: ${({ width }) => width || '100%'};
  padding: 4px 4px;
  z-index: 1;
  overflow-y: auto;
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
  ${({ isOpen }) => isOpen ? `box-shadow: ${SHADOW_GREY}` : ''}
`;

export const Section = styled.div`
  width: 100%;
  cursor: pointer;
  margin: auto 0;
  display: flex;
  align-items: center;
`;

export const Option = styled.section`
  box-sizing: border-box;
  color: ${COLOR_MINE_SHAFT};
  cursor: pointer;
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  width: 100%;

  &:hover {
    background-color: #EEE;
  }

  &:first-child {
    margin: 6px 0 0;
  }

  &:last-child {
    margin: 0 0 6px;
  }
`;

export const NoOptions = styled.div`
  font-family: Lato;
  font-size: 12px;
  letter-spacing: 0.86px;
  padding: 10px 23px;
  color: ${COLOR_LIGHTGREY};
`