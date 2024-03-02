import { useEffect, useState } from "react";
import api from "../utils/api";
import { useSelector } from "react-redux";
import { Table, ActionIcon } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { IconTrashFilled } from "@tabler/icons-react";

const MyTicket = () => {
  const userId = useSelector((state) => state._id);
  const [body, setBody] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (ticketId) => {
    api(`/uploads/tickets/${ticketId}`, {
      method: "delete",
    })
      .then((res) => {
        if (res.status === 200) {
          navigate(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    api(`/uploads/tickets/user/${userId}`)
      .then((res) => {
        const temp = res.data.map((item) => (
          <Table.Tr key={item._id}>
            <Table.Td>
              <Link to={`/tickets/${item._id}`}>{item._id}</Link>
            </Table.Td>
            <Table.Td>{item.activities?.length}</Table.Td>
            <Table.Td>
              <ActionIcon color="red" onClick={() => handleDelete(item._id)}>
                <IconTrashFilled
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Table.Td>
          </Table.Tr>
        ));
        setBody(temp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Ticket Id</Table.Th>
          <Table.Th>Total Activities</Table.Th>
          <Table.Th>Action</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{body && body}</Table.Tbody>
    </Table>
  );
};

export default MyTicket;
