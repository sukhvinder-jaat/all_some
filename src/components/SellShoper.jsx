import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { Container } from "react-bootstrap";
import growreach from "../assets/img/png/grow-reach4.png";
import makesale from "../assets/img/png/make-more-sale.png"
const SellShoper = () => {
  return (
    <>
      <section className="py-5">
        <Container className="pt_37 pb_37">
          <Row className="justify-content-between align-items-center">
            <Col lg={4}>
              <div className="sell_shoper_box_bg br_16">
                <div className="sell_shoper_padding ">
                  <p className="ff_kanit fw_600 fs_6xl color_black lh_normal mb-0">
                    Sell to shoppers wherever they are
                  </p>
                  <p className="ff_inter fw_400 fs_lg color_black pt-3 mb-0">
                    AllSome helps you to build your e-commerce operations across
                    all sales channels.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col lg={5}>
                  <div className="d-flex align-items-center">
                    <img src={growreach} alt="grow reach icon" />
                    <div className="pl_14">
                      <p className="ff_kanit fw_500 fs_2xl color_black mb-0">
                        Grow your reach
                      </p>
                      <p className="ff_inter fw_400 fs_lg color_black opacity_08 mb-0">
                        List your stores and appear on the maps
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="d-flex align-items-center">
                    <img src={makesale} alt="make more sale icon" />
                    <div className="pl_23">
                      <p className="ff_kanit fw_500 fs_2xl color_black mb-0">
                        Make more sales
                      </p>
                      <p className="ff_inter fw_400 fs_lg color_black opacity_08 mb-0">
                        Join e-commerce malls and convert shoppers into
                        purchasers
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SellShoper;
