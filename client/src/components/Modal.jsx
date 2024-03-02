import { Modal, Button, Textarea, Flex } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../utils/api";

const Modals = ({ opened, close }) => {
  const userId = useSelector((state) => state._id);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = content.trim();
    if (text) {
      api("/posts", {
        method: "post",
        data: {
          content: text,
          created_by: userId,
        },
      })
        .then((res) => {
          console.log(res.status);
          setContent("");
          navigate(0);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Post">
        <form onSubmit={handleSubmit}>
          <Flex direction="column" rowGap={16}>
            <Textarea
              placeholder="Create a post"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button type="submit">Post</Button>
          </Flex>
        </form>
      </Modal>
    </>
  );
};

export default Modals;
