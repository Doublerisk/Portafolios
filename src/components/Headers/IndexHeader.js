/*eslint-disable*/
import React from "react";

//Reactstrap components
import { Container } from "reactstrap";
//Core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="primary">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/header.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="index-profile-image rounded-circle img-raised"
              src={require("../../assets/img/lobo.jpg").default}
            ></img>
            <h1 className="h1-seo">Laharys Lobo</h1>
            <h3>Desarrollador de Software</h3>
          </div>
          <h6 className="category category-absolute">
            Diseñado en{" "}
            <a href="http://invisionapp.com/" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={
                  require("../../assets/img/invision-white-slim.png").default
                }
              ></img>
            </a>
            Codificado por Laharis Lobo
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
