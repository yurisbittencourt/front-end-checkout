import { Fragment, /* useEffect,*/ useState } from "react";
import { useViewport } from "../Utils/ViewportContext";
import { useHistory } from "react-router";
import { Navbar, CheckoutCartDesktop, CheckoutCartMobile } from "../Components";
//import uuid from "react-uuid";

const Checkout = () => {
  const item = JSON.parse(localStorage.getItem("item"));
  const [option, setOption] = useState("online");
  const { width } = useViewport();
  const history = useHistory();
  //const uid = uuid();
  const breakpoint = 1200;

  const handleClick = () => {
    /* Handle online payment 
    if (option === "online") {
      OnlinePaymentMethod({
        accessId: "D61EC9BAF0BB369B9438",
        merchantId: "1004314986",
        metadata: { demo: "enabled" },
        currency: "USD",
        paymentType: "Deferred",
        amount: item.price,
        description: "user@gmail.com",
        merchantReference: uid,
        returnUrl: "#success",
        cancelUrl: "#cancel",
      });
    }
   */
    history.push("/receipt");
  };

  /* Listen for payment success and redirect to next page
  useEffect(() => {
    onlinePayment.addPanelListener(function (command, event) {
      if (command === "event" && event.type === "new_location") {
        if (event.data.indexOf("#success") === 0) {
          history.push("/receipt");
        }
        return false;
      }
    });
    
  }, []);
*/

  return (
    <Fragment>
      <Navbar title="Checkout" />
      {width < breakpoint ? (
        <CheckoutCartMobile
          item={item}
          handleClick={handleClick}
          setOption={setOption}
        />
      ) : (
        <CheckoutCartDesktop
          item={item}
          handleClick={handleClick}
          setOption={setOption}
        />
      )}
    </Fragment>
  );
};

export default Checkout;
