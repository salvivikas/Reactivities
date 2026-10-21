import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, MenuList } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)' }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                        {/* Wrapper Added here to satisfy Context requirements */}
                        <MenuList sx={{ display: 'flex', padding: 0 }}>
                            <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize='large' />
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
                            </MenuItem>
                        </MenuList>

                        {/* Wrapper Added here to satisfy Context requirements */}
                        <MenuList sx={{ display: 'flex', padding: 0 }}>
                            <MenuItemLink to='/activities' >
                                Activities
                            </MenuItemLink>
                            <MenuItemLink to='/createActivity' >
                                Create Activity
                            </MenuItemLink>
                        </MenuList>
                        <MenuList>
                          <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}> Users</MenuItem>
                        </MenuList>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default NavBar
