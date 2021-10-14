/* eslint-disable */
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51JjmStGu8SmZgoVOfwt9VI0WshWe3Uycnz1YL8a6vur1HaTil2f4arGMOjOjTxzQWSH3n9SxmOMpikcCxdqoMzBz00KSMxZ9Ih'
    );

    // 1) get checkout session from api
    const res = await fetch(`/api/v1/bookings/checkout-session/${tourId}`, {
      mode: 'no-cors',
    });
    const session = await res.json();
    console.log(session);
    // 2) create checkout form + chanre credit card
    await stripe.redirectToCheckout({ sessionId: session.session.id });
  } catch (err) {
    showAlert('error', err);
  }
};
