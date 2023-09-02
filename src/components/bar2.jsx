import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from '/dealsorb/src/assets/logo.png'
import CustomizedInputBase from './searcBar1'
import ImageBanner from './banner'
import { Link } from "react-router-dom";

const pages = ["Home", "All Stores", "Deals & Coupons"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const tabToRoute = {
  "Home": "",
  "All Stores": "coupon-store",
  "Deals & Coupons": "coupon-deals",
};


function ResponsiveAppBar({ activePage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
   
    <Box sx={{right:'0',left:'0',width: '100%',}}>
    <Box sx={{position:"static",backgroundColor:'black',height:{ xs: 0,md:35,lg:48},display: { xs: "none",md:"flex",lg:"flex"},alignItems:"center",justifyContent:"center"}}> 
    <Typography textAlign="center" sx={{color:"white",fontSize:{xs: 0,md:10,lg:15}}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
    <Typography  textAlign="center" sx={{color:"white",fontSize:{xs: 0,md:10,lg:15}}}>Shop Now</Typography>
    </Box>
     <AppBar position="sticky" color="">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width={100} alt=""/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} width={100} alt=""/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Box sx={{
                borderBottom: activePage === page ? '2px Solid primary.main' : '2px Solid white',
                transition: 'background-color 0.1s', // Add a transition for background-color
                '&:hover': {
                  borderBottom: '2px Solid black', // Change the background color on hover
                },
              }}>
                  <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link} // Use the Link component for routing
                  to={`/${tabToRoute[page]}`} // Use the mapped route name
                  sx={{
                    my: { md: 0 },
                    fontSize: { md: 12, lg: 14 },
                    color: activePage === page ? "primary.main" : "black",
                    
                    display: "block",
                    fontWeight:'bold'
                  }}
                >
                  {page}
                </Button>
              </Box>
            ))}
          </Box>

          <Box sx={{ mr: 2 ,display: { xs: "none", md: "flex" },}}> <CustomizedInputBase  /></Box>
          <Box sx={{ mr: 2 ,display: { xs: "none", md: "flex" },}}><Button href="#text-buttons">Login</Button></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <LocalMallIcon/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </Box>
   
  );
}
export default ResponsiveAppBar;