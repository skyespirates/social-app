import { useLoaderData } from "react-router-dom";
import { Table } from "@mantine/core";
import { format } from "date-fns";

const Ticket = () => {
  const data = useLoaderData();
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
      <Table.Tbody>
        {data &&
          data.activities.map((item) => (
            <Table.Tr key={item._id}>
              <Table.Td>{item._id}</Table.Td>
              <Table.Td>{format(item.date, "dd/MM/yyyy")}</Table.Td>
              <Table.Td>{item.total_claim}</Table.Td>
              <Table.Td>{item.status}</Table.Td>
            </Table.Tr>
          ))}
      </Table.Tbody>
    </Table>
  );
};

export default Ticket;
