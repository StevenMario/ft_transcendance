import logo from "../../assets/logo.svg";
import SearchBar from "./SearchBar.tsx";
import { Button } from '@mui/material'
import LoginButton from './LoginButton.tsx'
import SingInButton from "./SingInButton.tsx";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

export default function NavBar() {

    const [open, setOpen] = useState<boolean>(false);
    const drawerContent = (
        <div className="w-64">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Why us ?" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Explore" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                </ListItem>

                <ListItem className="flex flex-col gap-2 mt-4">
                    <SingInButton />
                    <LoginButton />
                </ListItem>
            </List>
        </div>
    );

    const toggleDrawer = (check: boolean) => {
        setOpen(check);
    }


    return (
        <>
            {/* Responsive lg */}
            <nav className=" hidden max-w-7xl mx-auto px-4 py-4 lg:flex items-center justify-between">
                <img className="w-20 sm:w-25 md:w-30" src={logo} alt="Logo" />
                <SearchBar classValue="relative w-75"></SearchBar>
                <Button color="inherit">
                    Why us ?
                </Button>
                <Button color="inherit">
                    Explore
                </Button>
                <Button color="inherit">
                    Services
                </Button>
                <SingInButton />
                <LoginButton />
            </nav>
            {/* Responsive md */}
            <nav className="max-w-7xl mx-auto px-4 py-4 flex lg:hidden items-center justify-between">
                <img className="w-20" src={logo} alt="Logo" />

                <IconButton onClick={() => toggleDrawer(true)}>
                    <MenuIcon fontSize="large"/>
                </IconButton>

                <Drawer
                    className="lg:hidden"
                    anchor="right"
                    open={open}
                    onClose={() => toggleDrawer(false)}
                >
                    <div className="flex justify-end p-4">
                        <IconButton onClick={() => setOpen(false)}>
                            <CloseIcon fontSize="large"/>
                        </IconButton>
                    </div>
                    {drawerContent}
                </Drawer>
            </nav>
        </>
    );
}