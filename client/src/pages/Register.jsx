import { Input, Button, Box, Flex, Text } from "@mantine/core";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import api from "../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      api("/users/register", {
        method: "post",
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          dispatch(login(res.data));
          navigate("/", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Flex justify="center">
      <Box w={320} my={200}>
        <Text mb={24}>Register Page</Text>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" rowGap="md">
            <Input
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Register</Button>
            <Link to="/login">login</Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
