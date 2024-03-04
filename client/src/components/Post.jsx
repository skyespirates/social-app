import { Card, Text, Badge, Group, Tooltip } from "@mantine/core";
import { formatDistance, subDays } from "date-fns";
import { ActionIcon } from "@mantine/core";
import { IconTrashFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import api from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

const Post = ({ post }) => {
  const userId = useSelector((state) => state._id);
  const date = formatDistance(subDays(post.createdAt, 0), new Date(), {
    addSuffix: true,
  });
  const navigate = useNavigate();

  const handleClick = () => {
    api(`/posts/${post._id}`, {
      method: "delete",
      data: {
        userId: post.created_by._id,
      },
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

  return (
    <Link to={`/posts/${post._id}`} replace={true}>
      <Card shadow="sm" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500} size="sm">
            by {post.created_by?.email}
          </Text>
          <Badge color="pink" tt="lowercase">
            {date}
          </Badge>
          {post.created_by?._id === userId && (
            <Tooltip label="delete post" position="top" color="black" h={30}>
              <ActionIcon color="red" variant="filled" onClick={handleClick}>
                <IconTrashFilled
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>

        <Text size="md" c="dimmed">
          {post.content}
        </Text>
      </Card>
    </Link>
  );
};

export default Post;
