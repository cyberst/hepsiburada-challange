import React from "react";
import Pagination from "../Components/Pagination";
import OrderSelection from "../Components/OrderSelection";
import SubmitLink from "../Components/SubmitLink";
import RemoveLinkModal from "../Components/RemoveLinkModal";
import ExpiringToast from "../Components/ExpiringToast";
import ListView from "../Components/ListView";

function MainPage(props) {
  return (
    <div>
      <ExpiringToast />
      <RemoveLinkModal />
      <SubmitLink />
      <hr />
      <OrderSelection />
      <ListView />
      <Pagination />
    </div>
  );
}

export default MainPage;
