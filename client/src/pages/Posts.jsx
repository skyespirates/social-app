import { Box, Flex, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Modal from "../components/Modal";
import Post from "../components/Post";

import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const posts = useLoaderData();

  return (
    <Box>
      <Modal opened={opened} close={close} />
      <Button onClick={open}>Add Post</Button>
      <Flex my={16} direction="column" rowGap={8}>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </Flex>
    </Box>
  );
};

export default Posts;
