import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const Button = styled.button<Pick<ButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    background: ${theme.colorsThemes[color]};
    border: none;
    color: ${theme.colorsThemes.white};
    font-size: ${theme.font.sizes.normal};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    cursor: pointer;
    border-radius: ${theme.spacings.tiny};
    transition: ${theme.transitions.fast};
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      outline: none;
      box-shadow: 0 0 ${theme.spacings.tiny} ${theme.colorsThemes[color]};
      filter: brightness(110%);
    }

    &:hover {
      filter: brightness(90%);
    }

    &:disabled {
      background: ${theme.colorsThemes.gray4};
      color: ${theme.colorsThemes.gray1};
      cursor: not-allowed;

      &:hover {
        filter: none;
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
      margin-left: 1rem;
    }
  `}
`;
