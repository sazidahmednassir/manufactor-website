import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({order}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(" ");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(" ");
  const [clientSecret, setClientSecret] = useState(" ");

  const {tool, price, totalprice, quantity, userName, address, user, _id  } = order;
//   console.log(order)

  useEffect(()=>{
           
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ totalprice })
    })
    .then(res=>res.json())
    .then(data=>{
        if (data?.clientSecret) {
            console.log(data?.clientSecret)
            setClientSecret(data.clientSecret);
        }
    })

}, [totalprice])

  const handleSubmit = async (event) => {
      const status='Pending';
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    setCardError(error?.message || '')
    setSuccess('');
    setProcessing(true);

    const {paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
      
        {
          payment_method: {
            card: card,
            billing_details: {
                name: userName,
                email: user
            },
          },
        },
      );

      if (intentError) {
        setCardError(intentError?.message);
        setProcessing(false);
      
    } else{
        setCardError(' ');
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent);
        setSuccess('Congrats! Your payment is completed.')
        const payment = {
            tool: tool,            
            price: price,
            totalprice: totalprice,
            quantity: quantity,
            user: user,
            order: _id,
            transactionId: paymentIntent.id
        }
        fetch(`http://localhost:5000/payment/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({payment, status})
        }).then(res=>res.json())
        .then(data => {
            setProcessing(false);
            console.log(data);
        })
    }



  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success} </p>
          <p>
            Your transaction Id:{" "}
            <span className="text-orange-500 font-bold">{transactionId}</span>{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
