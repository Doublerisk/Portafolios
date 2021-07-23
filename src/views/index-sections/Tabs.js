import React from "react";

//Reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

//Core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="11">
              <h2 className="category">Caracteristicas</h2>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_bullet-list-67"></i>
                        Tecnologias y Lenguajes
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons clothes_tie-bow"></i>
                        Experiencia Laboral
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Perfil
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        <ul align="left">
                          <li type="circle">HTML + CSS + JS + Bootstrap</li>
                          <li type="circle">
                            ReactJS y React Native (Aplicaciones iOS & Android)
                          </li>
                          <li type="circle">
                            Laravel y PHP + Base de datos SQL
                          </li>
                          <li type="circle">
                            Desarrollo de PWA (Aplicaciones Web Progresivas)
                          </li>
                          <li type="circle">
                            Desarrollo fundamental en C# con certificacion MTA
                            (Microsoft Technology Associated)
                          </li>
                          <li type="circle">
                            Desarrollo basico en JAVA JSP, Swing y Spring
                            Framework
                          </li>
                          <li type="circle">Desarrollo en C++</li>
                          <li type="circle">Experiencia en Wordpress</li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        <ul align="left">
                          <li type="circle">
                            <h5>Desarrollador de Software [2019 - 2021]</h5>
                            En division AuthCode de{" "}
                            <h5>Devio - Agencia Digital</h5>
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        <ul align="left">
                          <li type="circle">
                            <h4>Nombre Completo:</h4>
                            Laharys Jomeyki Lobo Gamez
                          </li>
                          <li type="circle">
                            <h4>Edad:</h4>
                            {new Date().getFullYear() - 1996}
                          </li>
                          <li type="circle">
                            <h4>Pais:</h4>
                            Honduras
                          </li>
                        </ul>
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
