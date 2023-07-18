import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import api from "../assets/img/png/api.png";
const Api = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <Container>
          <Row className="align-items-center my-xl-5">
            <Col md={6}>
              <h3 className="ff_kanit fs_8xl fw_600 text-black lh-1">
                API & <br />
                <span className="clr_green intergrations_lines position-relative">
                  Integrations
                </span>
              </h3>
              <p className="ff_inter fw_400 fs_lg text-black pt-3 mt-1">
                Connect AllSome to your e-commerce stores, delivery
                <span className="d-lg-block">partners, service providers and more.</span>
              </p>
              <button className="ff_inter fw_600 fs_lg border-0 bg-black px-4 py-2 rounded-pill text-white">
                View integration guide
              </button>
            </Col>
            <Col md={6}>
              <div className="position_lg_absolute end-0 top-0 max_width_741 my-4">
                <img src={api} alt="API" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Api;
