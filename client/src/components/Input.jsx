import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 4px;
  outline-style: none;
`;

const Input = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default Input;
