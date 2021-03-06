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

const mapVariantsToColors = {
  default: COLOR_BLACK,
  primary: COLOR_PRIMARY,
  secondary: COLOR_SECONDARY,
  tertiary: COLOR_TERTIARY,
  disabled: COLOR_DARKESTGREY,
};

const mapTypeToIcon = {
  facebook: ICON_FACEBOOK,
  twitter: ICON_TWITTER,
};

export const ButtonContainer = styled.a`
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
  margin: 2px 8px;
  background: url(${({ type }) => type ? mapTypeToIcon[type] : ''});
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    color: ${({ disabled }) => disabled ? mapVariantsToColors.disabled :  mapVariantsToColors['primary']};
  }
`;