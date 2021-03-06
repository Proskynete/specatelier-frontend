import styled from 'styled-components';
import {
  MEDIA_QUERY_MEDIUM,
  MEDIA_QUERY_SMALL,
} from '../config/constants/styled-vars';

const HEADER_HEIGHT = '108px';

export const Container = styled.section`
  width: 100vw;
`;

export const Content = styled.section`
  width: 100%;
  padding: 16px 82px;
  ${MEDIA_QUERY_MEDIUM} {
    padding: 16px 42px;
  }
  ${MEDIA_QUERY_SMALL} {
    padding: 16px 16px;
  }
`;

export const ButtonSection = styled.section`
  margin: 16px 0 38px;
  display: flex;
  flex: 1;
  justify-content: ${({ justify }) => justify || 'flex-star'};
`;

export const ImgHeader = styled.section`
  background-image: url('${({ background }) => background}');
  height: ${HEADER_HEIGHT};
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;