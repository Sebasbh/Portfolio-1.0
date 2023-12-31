import React, { useState, useEffect } from "react";
import { Navbar, Container, Button, Nav, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import CurriculumsMenu from "./Curriculums";

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const orangeColor = "#FB5B21";
  const white = "#FFFFFF";

  const developerTextStyle = {
    color: orangeColor,
    textTransform: "uppercase",
    marginLeft: "23px",
  };

  const buttonStyle = {
    backgroundColor: orangeColor,
    color: "white",
    float: "right",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  };

  const headerStyle = {
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  };
  const greyColor = "#BDBDBF";
  const imageStyle = {
    objectFit: "cover",
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`container-fluid ${isScrolled ? "bg-light" : "bg-dark"} px-0`}
      style={headerStyle}
    >
      <div className="row gx-0">
        {/* Logo and Developer Name */}
        <div className="col-lg-3 bg-dark d-none d-lg-block">
          <a
            href="/"
            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
          >
            {/* Logo */}
            <Image
              src={isScrolled ? "/assets/Image.jpg" : "/assets/Logo.png"}
              alt={isScrolled ? "Image" : "Logo"}
              width={70}
              height={70}
              className={`mr-3 rounded-circle square-image ${
                isScrolled ? "flip" : ""
              }`}
              style={{
                ...imageStyle,
                transformStyle: "preserve-3d",
                transition:
                  "transform 5s ease-in-out, box-shadow 5s ease-in-out",
              }}
            />

            {/* Developer Name */}
            <h2 className="display-5" style={developerTextStyle}>
              {t("developerName")}
            </h2>
          </a>
        </div>
        <div className="col-lg-9">
          {/* Contact Info and Social Icons */}
          <div
            className="row gx-0  d-none d-lg-flex"
            style={{ backgroundColor: greyColor }}
          >
            <div className="col-lg-7 px-5 text-start">
              <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: orangeColor }}
                  className="me-2"
                />
                <h6 className="mb-0">sebasheins@gmail.com</h6>
              </div>
              <div className="h-100 d-inline-flex align-items-center py-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: orangeColor }}
                  className="me-2"
                />
                <h6 className="mb-0">+34 609 151049</h6>
              </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
              <div className="d-inline-flex align-items-center py-2">
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebastian-benavides-heins/"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: orangeColor }}
                  />
                </a>
                <a
                  className="btn btn-light btn-square rounded-circle me-2"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Sebasbh"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: orangeColor }}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Navigation Menu and Home Button */}
          <Navbar
            expand="lg"
            bg="dark"
            variant="dark"
            className="p-3 p-lg-0 px-lg-5"
          >
            <Container>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
                <Nav className="mr-auto py-0">
                  <Nav.Link onClick={() => scrollToSection("about")}>
                    {t("about")}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("stack")}>
                    {t("stack")}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("projects")}>
                    {t("projects")}
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection("contact")}>
                    {t("contact")}
                  </Nav.Link>
                </Nav>
                <CurriculumsMenu />
              </Navbar.Collapse>
            </Container>
            <LanguageSwitcher />
            <Button
              href="/login"
              className="btn py-md-2 px-md-5"
              style={{
                ...buttonStyle,
              }}
              variant="outline-secondary"
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ marginRight: "10px" }}
              />
              {t("login")}
            </Button>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default Header;
