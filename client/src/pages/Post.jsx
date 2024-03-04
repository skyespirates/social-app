import { useLoaderData, Form, useParams } from "react-router-dom";
import { Box, Text, Card, Textarea, Button } from "@mantine/core";
import { format } from "date-fns";

const Post = () => {
  const { postId } = useParams();
  const post = useLoaderData();
  return (
    <Box>
      <Card mb={10}>
        <Text>Created by {post.created_by.email}</Text>
        <Text>Content: {post.content}</Text>
        <Text>Created at:{format(post.createdAt, "dd/MM/yyyy")} </Text>
      </Card>
      <Card>
        <Form method="post" action={`/posts/${postId}`}>
          <Textarea name="comment" placeholder="add comment" minRows={4} />
          <Button
            size="xs"
            type="submit"
            style={{ float: "right" }}
            mt={-32}
            mr={3}
          >
            add
          </Button>
        </Form>
      </Card>
    </Box>
  );
};

export default Post;
