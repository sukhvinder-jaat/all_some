import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import smily from "../assets/img/svg/smily.svg";
const Fulfilment = () => {
  return (
    <>
      <section className="bg_green_100 fulfilment_br_40">
        <Container>
          <Row className="py-5">
            <Col lg={8} className="py-5">
              <p className="ff_kanit fs_4xl fw_600 color_green">
                Let's take about sales
              </p>
              <h2 className="ff_kanit fs_9xl fw_600 text-black lh-1">
                Turn fulfillment <br /> into your
                <span className="color_green">#1 revenue</span> channel
              </h2>
              <p className=" ff_inter fs_lg fw_400 text-black mw_510">
                We helped thousands of merchants scale their business to new
                heights. AllSome customers achieve 340% growth overtime with
                auto run e-commerce post purchase operations.
              </p>
            </Col>
            <Col>
              <div className="bg-white p-3">
                <div className="pt-3 position-relative">
                  <img src={smily} alt="smily" className="position-absolute top-0 start-0 translate-middle"/>
                  <span className="ff_inter fs_3xl fw_500 text-white bg_rol">
                    ROI, CTR, OMGGGG!
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fulfilment;
