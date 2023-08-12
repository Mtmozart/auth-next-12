import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 8rem auto;
    background: ${theme.colorsThemes.white};
    padding: ${theme.spacings.xlarge};
  `}
`;
