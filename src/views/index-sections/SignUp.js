import React from "react";
import { Link } from "react-router-dom";
//Reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";

//Core components

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/bg11.jpg").default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="red">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Contactame
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="https://facebook.com/laharyslobo"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="success"
                      href="https://api.whatsapp.com/send?phone=50432707612"
                      size="lg"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="primary"
                      href="https://www.linkedin.com/in/laharys-lobo-31762b1a9"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Button>
                  </div>
                </CardHeader>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="primary"
                    href="mailto:laharis_lobo@hotmail.com"
                    size="lg"
                  >
                    Enviame un correo!
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
