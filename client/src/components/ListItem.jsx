import styled from "styled-components";

const StyledDiv = styled.li`
  border: 1px solid black;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: #fff;
  }
`;

const ListItem = ({ children, onClick }) => {
  return <StyledDiv onClick={onClick}>{children}</StyledDiv>;
};

export default ListItem;
