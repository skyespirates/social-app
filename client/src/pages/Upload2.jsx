import { FileInput, Box, Button, Text } from "@mantine/core";
import { Form } from "react-router-dom";

const Upload2 = () => {
  return (
    <Box>
      <Text size="lg">Upload 2</Text>
      <Form method="post" action="/upload2" encType="multipart/form-data">
        <FileInput name="file" placeholder="Create Ticket" />
        <Button type="submit">Upload</Button>
      </Form>
    </Box>
  );
};

export default Upload2;
