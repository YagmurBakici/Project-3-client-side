import React from "react";
import SearchBox from "./../partials/SearchBox";
import Boxes from "./../partials/Boxes";
import InitalForm from "./../InitalForm";

export default function Home() {
  return (
    <div>
      <p className="intro">
        XPT is designed to provide you with all the resources you need to ease
        you into life in a new city. Our aim is to make things easier for you as
        you plan your move and settle into your new life in.XPT is there to make
        you feel quickly at home wherever you are in the world.
        <br /> Easier, faster, cheaper.
      </p>
      <InitalForm />
      <p className="steps">
        <strong>Step 1:</strong> Type your futur address
        <br /> <strong>Step 2:</strong> Choose the services that you need
        <br /> <strong>Step 3: </strong> Sign Up
        <br /> <strong>Step 4: </strong> Drag Drop your files
        <br /> <strong>Step 5: </strong> Now you can go and relax, XPT will
        handle all your formalities
      </p>

      {/* <SearchBox /> */}
      <Boxes />
    </div>
  );
}
