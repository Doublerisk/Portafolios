/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
    return (
        <footer className="footer" data-background-color="black">
            <Container>
                <nav>
                    <ul>
                        <li>
                            <a href="mailto:laharis_lobo@hotmail.com">
                                Contactame
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    © {new Date().getFullYear()}, Diseñado en{" "}
                    <a
                        href="https://www.invisionapp.com?ref=nukr-dark-footer"
                        target="_blank"
                    >
                        Invision
                    </a>
                    . Codificado por Laharys Lobo.
                </div>
            </Container>
        </footer>
    );
}

export default DarkFooter;
