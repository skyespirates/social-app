import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { Table } from "@mantine/core";
import { format } from "date-fns";

const Ticket = () => {
  const { ticketId } = useParams();
  const [body, setBody] = useState(null);
  useEffect(() => {
    api(`/uploads/tickets/${ticketId}`)
      .then((res) => {
        const temp = res.data.activities.map((item) => (
          <Table.Tr key={item._id}>
            <Table.Td>{item._id}</Table.Td>
            <Table.Td>{format(item.date, "dd/MM/yyyy")}</Table.Td>
            <Table.Td>{item.total_claim}</Table.Td>
            <Table.Td>{item.status}</Table.Td>
          </Table.Tr>
        ));
        setBody(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Activity Id</Table.Th>
          <Table.Th>Activity date</Table.Th>
          <Table.Th>Total claim</Table.Th>
          <Table.Th>Status</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{body && body}</Table.Tbody>
    </Table>
  );
};

export default Ticket;
