import React from "react";
import { Container } from "react-bootstrap";

export const MyNav = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className=" d-flex justify-content-between align-items-center py-3">
          <p className="ff_inter text-white fs_xsm fw_500 mb-0">
            AllSome is your e-commerce operation team to auto-send your sold
            orders.
          </p>
          <select>
            <option value="1">ENG</option>
            <option value="2">HIN</option>
          </select>
        </div>
      </Container>
    </div>
  );
};
