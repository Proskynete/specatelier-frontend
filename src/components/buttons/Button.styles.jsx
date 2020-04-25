import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseButton = styled.button`
  align-items: center;
  color: #FFF;
  cursor: pointer;
  border-radius: 18px;
  display: inline-flex;
  font-family: Lato;
  height: 34px;
  justify-content: center;
  min-width: 107px;
  padding: 0 19px;
  width: ${({ width = 'initial' }) => width};

  &:active {
    outline: 0;
    transform: scale(.98);
  }

  &:focus {
    outline: 0;
  }

  &:disabled, &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
    user-select: none;
  }
`;

BaseButton.propTypes = {
  width: PropTypes.string.isRequired,
};

export const PrimaryButton = styled(BaseButton)`
  background-color: #31CBB6;
  border: 1px solid #31CBB6;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: #FF7E45;
  border: 1px solid #FF7E45;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;

export const DefaultButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid rgba(33, 33, 33, 0.23);
  color: rgba(33, 33, 33, 0.45);
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 1px;
`;

export const GrayButton = styled(BaseButton)`
  background-color: rgba(33, 33, 33, 0.25);
  border: 1px solid rgba(33, 33, 33, 0.25);
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.71;
  letter-spacing: 1px;
`;

export const CancelButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid transparent;
  color: #31CBB6;
  font-size: 16px;
  font-weight: bold;
  line-height: 1;
`;