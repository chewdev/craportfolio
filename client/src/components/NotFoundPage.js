import React, { Fragment } from "react";
import Top from "./Top/Top";
import PaperBoxLayout from "./Top/PaperBoxLayout";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Fragment>
    <Top>
      <PaperBoxLayout>
        <div className="notfound">
          404 - Page Not Found <br />
          <Link to="/">Go home</Link>
        </div>
      </PaperBoxLayout>
    </Top>
    <Footer />
  </Fragment>
);

export default NotFoundPage;
