import React from "react";
import Checkbox from "react-simple-checkbox";

export default function Profil() {
  return (
    <div>
      <h1>PROFIL</h1>
      <Checkbox> Passport (copy of all pages)</Checkbox> <br />
      <Checkbox> ID </Checkbox> <br />
      <Checkbox>5 Photos </Checkbox> <br />
      <Checkbox> Last tax declaration </Checkbox> <br />
      <Checkbox>
        Signed employment contract or offer letter from your future employer{" "}
      </Checkbox>
      <br />
      <Checkbox>
        Proof of old address: an electricity, gas, water or landline bill, or a
        declaration that you are being housed free of charge signed by the
        person providing you with accommodation, together with a copy of one of
        their bills and their photo ID.
      </Checkbox>{" "}
      <br />
      <Checkbox> Three most recent bank statements </Checkbox> <br />
      <Checkbox> Foreign tax identification number </Checkbox> <br />
      <Checkbox> Certificate of Eligibility </Checkbox> <br />
      <Checkbox>Three most recent bank statements </Checkbox> <br />
    </div>
  );
}
