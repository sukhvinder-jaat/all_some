import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap/esm';
import { Container } from 'react-bootstrap';

const SellShoper = () => {
  return (
    <>
      <section className="py-5">
        <Container className="pt_37 pb_37">
          <Row>
            <Col lg={4}>
              <div className="sell_shoper_box_bg">
                <div className="sell_shoper_padding">
                  <p className="ff_kanit fw_600 fs_6xl  lh_normal mb-0">Sell to shoppers wherever they are</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SellShoper;