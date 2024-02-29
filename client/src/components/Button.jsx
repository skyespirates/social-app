import styled from "styled-components";

const StyledButton = styled.button`
  border-style: none;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${(props) => (props.primary ? "crimson" : "violet")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  cursor: pointer;
  &:hover {
    background-color: purple;
  }
`;

const Button = ({ primary, children, onClick }) => (
  <StyledButton onClick={onClick} primary={primary}>
    {children}
  </StyledButton>
);

export default Button;
