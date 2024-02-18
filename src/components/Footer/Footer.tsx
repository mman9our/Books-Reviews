import { Box, Container, Grid } from "@mui/material";
import {
  NAVIGATION_SECTION,
  SOCCIAL_SECTION,
  CATEGORIES_SECTION,
} from "../../data/footerData";
import { FooterData, Link } from "../../types/Footer.types";
import { useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

  const renderLinks = (section: FooterData) => {
    const { links } = section;
    const shouldApplyGridStyle = links.length > 8;

    return (
      <Grid item component="section" key={section.title}>
        <div className="footer__section">
          <h2 className="footer__title">{section.title}</h2>
          <ul className="footer__links">
            {shouldApplyGridStyle ? (
              <div className="gridContainer">
                {links.map((link: Link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className={
                        location.pathname === link.path ? "active" : ""
                      }>
                      {link.name}
                    </a>
                  </li>
                ))}
              </div>
            ) : (
              links.map((link: Link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className={location.pathname === link.path ? "active" : ""}>
                    {link.name}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </Grid>
    );
  };

  return (
    <footer className="footer" role="contentinfo">
      <Container component="footer" maxWidth="xl">
        <Box
          component="div"
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          gap={7}
          className="footer__wrapper">
          <Grid container spacing={2} className="footer__content">
            {renderLinks(NAVIGATION_SECTION)}
            {renderLinks(CATEGORIES_SECTION)}
            {renderLinks(SOCCIAL_SECTION)}
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
