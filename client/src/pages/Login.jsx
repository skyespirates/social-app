import { Input, Button, Box, Flex, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { login } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // make login page unaccessible when there is a log in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .get("http://localhost:3000/users/1")
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
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
        <Text mb={24}>Login Page</Text>
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
            <Button type="submit">Login</Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
