import { CardElement } from "@stripe/react-stripe-js";
import { FormControl } from "@material-ui/core";

const Payment = () => {
  return (
    <div>
      <h1>Card</h1>
      <form>
        <CardElement />
      </form>
    </div>
  );
};

export default Payment;
