import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_DARKESTGREY,
  COLOR_TERTIARY,
  COLOR_GREY,
} from '../../config/constants/styled-vars';

import ICON_FACEBOOK from '../../assets/images/icons/socialmedia/facebook.svg';
import ICON_TWITTER from '../../assets/images/icons/socialmedia/twitter.svg';
import ICON_LOCATION from '../../assets/images/icons/location.svg';
import ICON_CELLPHONE from '../../assets/images/icons/cellphone.svg';

const mapVariantsToColors = {
  default: COLOR_BLACK,
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  tertiary: COLOR_TERTIARY,
  disabled: COLOR_DARKESTGREY,
};

const mapTypeToIcon = {
  web: 'ICON_WEB',
  address: ICON_LOCATION,
  phone: ICON_CELLPHONE,
  facebook: ICON_FACEBOOK,
  twitter: ICON_TWITTER,
};

export const ButtonContainer = styled.section`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  color: ${({ variant }) => mapVariantsToColors[variant]};
  outilne: none;
  align-items: center;
`;

export const ButtonIcon = styled.div`
  height: 18px;
  width: 18px;
  margin: 2px 4px 2px 2px;
  background: url(${({ type }) => type ? mapTypeToIcon[type] : ''});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    color: ${({ disabled }) => disabled ? mapVariantsToColors.disabled :  mapVariantsToColors['primary']};
  }
`;

export const ButtonText = styled.span`
  align-items: center;
  display: flex;
  text-decoration: none;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: ${COLOR_GREY};
  :hover {
    color: ${({ disabled }) => disabled ?  mapVariantsToColors[disabled] :  mapVariantsToColors['primary']};
  }
  margin-right: 2px;
  height: ${({ show }) => show ? '12px' : '0'};
  opacity: ${({ show }) => show ? 1 : 0};
  transition: all 0.2s ${({ show }) => show ? 'ease-in' : 'ease-out'};
  pointer-events: ${({ show }) => show ? 'initial': 'none'};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

