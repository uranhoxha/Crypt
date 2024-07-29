import styled, {css}  from "styled-components";

const sizes = {
  small: css`
    font-size: 16px;
    font-family: "Quicksand", sans-serif;
    padding: 0.7rem 1.2rem;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: #fff;
    background-color: #427CFF;

    &:hover {
      background-color: #3d6ddd;
    }
  `,
  secondary: css`
    color: #1A232C;
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};


const Button = styled.button`
  border:none;
  border-radius:20px;
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
}

export default Button;