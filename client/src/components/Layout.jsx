import { AppShell, Burger, Group, Button, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/userSlice";

import { Suspense } from "react";
import Loading from "./Loading";

import links from "../utils/links";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.email);
  const handleClick = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Kiwkiw
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {links.map((link) => (
          <Link key={link.title} to={link.to}>
            {link.title}
          </Link>
        ))}
        <Text my={24}>{user}</Text>
        <Button onClick={handleClick} color="red">
          Logout
        </Button>
      </AppShell.Navbar>
      <AppShell.Main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
