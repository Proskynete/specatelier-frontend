import styled from 'styled-components';
import { COLOR_BLACK, COLOR_DARKGREY, MEDIA_QUERY_SMALL, MEDIA_QUERY_MEDIUM } from '../../../config/constants/styled-vars';

export const SubHeader = styled.section`
  width: 100%;
  min-height: 62px;
  border-radius: 9px;
  background-color: ${COLOR_DARKGREY};
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
  display: flex;
  align-items: center;
  padding-left: 104px;
  margin: 16px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${MEDIA_QUERY_MEDIUM} {
    padding-left: 64px;
    grid-template-columns: repeat(1, 1fr);
  }
  ${MEDIA_QUERY_SMALL} {
    padding-left: 16px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 24px 0;
`;

export const Label = styled.section`
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  margin-right: 8px;
  color: ${COLOR_BLACK};
  text-transform: capitalize;
`;

export const Text = styled.section`
  text-transform: capitalize;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_BLACK};
`;