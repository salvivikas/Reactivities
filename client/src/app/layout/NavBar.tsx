import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, MenuList, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

function NavBar() {
  const { UIStore } = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)", position: "relative" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Wrapper Added here to satisfy Context requirements */}
            <MenuList sx={{ display: "flex", padding: 0 }}>
              <MenuItem component={NavLink} to="/" sx={{ display: "flex", gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Reactivities
                </Typography>
              </MenuItem>
            </MenuList>

            {/* Wrapper Added here to satisfy Context requirements */}
            <MenuList sx={{ display: "flex", padding: 0 }}>
              <MenuItemLink to="/activities">Activities</MenuItemLink>
              <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
              <MenuItemLink to="/counter">Counter</MenuItemLink>
            </MenuList>
            <MenuList>
              <MenuItem sx={{ fontSize: "1.2rem", textTransform: "uppercase", fontWeight: "bold" }}> Users</MenuItem>
            </MenuList>
          </Toolbar>
        </Container>
        <Observer>
          {() =>
            UIStore.isLoading ? (
              <LinearProgress
                color="secondary"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                }}
              ></LinearProgress>
            ) : null
          }
        </Observer>
      </AppBar>
    </Box>
  );
}

export default NavBar;
