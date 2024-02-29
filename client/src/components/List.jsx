import styled from "styled-components";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { removeTodo } from "../slices/todoSlice";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;
const List = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <StyledList>
      {items.map((item) => (
        <ListItem key={item.id} onClick={() => dispatch(removeTodo(item.id))}>
          {item.title}
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
