import React from "react";

//Reactstrap components
import { Container } from "reactstrap";

//Main components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import IndexHeader from "../components/Headers/IndexHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";

//Sections for this page
import Images from "./index-sections/Images.js";
import Carousel from "./index-sections/Carousel.js";
import Tabs from "./index-sections/Tabs.js";
import SignUp from "./index-sections/SignUp.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="section">
          <Images />
          <Container>
            <h3 className="title">Acerca de mi</h3>
            <h5 className="description text-dark font-weight-normal">
              Estudiante de Ing. en Sistemas en la Universidad Autonoma de
              Honduras y desarrollador de los proyectos de software del futuro
              con las mejores practicas y usando tecnologias de desarrollo
              hibridas que mejoran la eficiencia de su negocio para estar a la
              vanguardia sobre la competencia, ¿Desea llegar a mas clientes y
              maximizar su alcance a la vez que mejora la gestion y eficiencia
              de su negocio? Trabajemos juntos!
            </h5>
            <Carousel />
            <Tabs />
          </Container>
        </div>
        <SignUp />
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
