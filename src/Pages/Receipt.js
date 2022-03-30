import { Fragment } from "react";
import { useViewport } from "../Utils/ViewportContext";
import { Navbar, ReceiptDesktop, ReceiptMobile } from "../Components";

const Receipt = () => {
  const item = JSON.parse(localStorage.getItem("item"));
  const { width } = useViewport();
  const breakpoint = 1000;

  return (
    <Fragment>
      <Navbar title="Review and confirmation" />
      {width < breakpoint ? (
        <ReceiptMobile item={item} />
      ) : (
        <ReceiptDesktop item={item} />
      )}
    </Fragment>
  );
};

export default Receipt;
