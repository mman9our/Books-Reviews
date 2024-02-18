import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Container,
  IconButton,
  Hidden,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "../../assets/icons/menu.svg";
import HomeIcon from "../../assets/icons/home.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import NewsIcon from "../../assets/icons/news.svg";
import ReviewIcon from "../../assets/icons/review.svg";
import BookIcon from "../../assets/icons/books.svg";
import SearchIcon from "../../assets/icons/search.svg";
import "./header.css";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(true);
  };
  const handleListItemClick = () => {
    setDrawerOpen(false);
  };

  return (
    <header id="header" className="header">
      <Container maxWidth="xl">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          height="80px">
          <NavLink to="/" className="header__nav-item">
            <h1 className="header__title">
              <b>Books</b>Reviews
            </h1>
          </NavLink>
          <Hidden mdDown>
            <nav>
              <ul className="header__nav">
                <li>
                  <NavLink
                    to="/"
                    className={`header__nav-item ${
                      window.location.pathname === "/" && "active"
                    }`}>
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    className={`header__nav-item ${
                      window.location.pathname === "/books" && "active"
                    }`}>
                    BOOKS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/reviews"
                    className={`header__nav-item ${
                      window.location.pathname === "/reviews" && "active"
                    }`}>
                    REVIEWS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    className={`header__nav-item ${
                      window.location.pathname === "/news" && "active"
                    }`}>
                    NEWS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={`header__nav-item ${
                      window.location.pathname === "/contact" && "active"
                    }`}>
                    CONTACTS
                  </NavLink>
                </li>
                <NavLink to="/search" className="header__nav-item">
                  <img
                    src={SearchIcon}
                    width={20}
                    height={20}
                    alt="Search"
                    className="header__search-icon"
                  />
                </NavLink>
              </ul>
            </nav>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="menu"
              className="header__menu-toggle"
              onClick={toggleDrawer}>
              <img
                src={MenuIcon}
                width={24}
                height={24}
                alt="Menu"
                className="header__search-icon"
              />
            </IconButton>
          </Hidden>

          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer}
              PaperProps={{
                style: {
                  backgroundColor: "#f6f6f6",
                  width: "50%",
                  height: "100%",
                  zIndex: 99,
                  minHeight: "100%",
                  overflow: "hidden",
                },
              }}>
              <>
                <Toolbar />
                <Divider />
                <List>
                  {[
                    { text: "Home", link: "/", icon: HomeIcon },
                    { text: "Books", link: "/books", icon: BookIcon },
                    { text: "Reviews", link: "/reviews", icon: ReviewIcon },
                    { text: "News", link: "/news", icon: NewsIcon },
                    { text: "Contact", link: "/contact", icon: ContactIcon },
                  ].map((item) => (
                    <ListItem
                      key={item.text}
                      disablePadding
                      onClick={handleListItemClick}>
                      <ListItemButton
                        component={NavLink}
                        to={item.link}
                        className={`header__drawer-item ${
                          window.location.pathname === item.link
                            ? "active-drawer"
                            : ""
                        }`}>
                        <ListItemIcon>
                          <img
                            src={item.icon}
                            width={24}
                            height={24}
                            alt={item.text}
                            className="header__search-icon"
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </>
            </Drawer>
          </Hidden>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
