import { Box, Flex, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Modal from "../components/Modal";
import Post from "../components/Post";

import api from "../utils/api";
import { useEffect, useState } from "react";

const Posts = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api("/posts", { method: "get" })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
