import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create a Payment Intent
export const createPaymentIntent = async (amount, currency = 'usd') => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card'],  // Change as necessary for your application
        });

        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment processing error: ${error.message}`);
    }
};

// Confirm Payment Intent
export const confirmPayment = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment confirmation error: ${error.message}`);
    }
};

// Retrieve Payment Intent
export const retrievePaymentIntent = async (paymentIntentId) => {
    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        return paymentIntent;
    } catch (error) {
        throw new Error(`Payment retrieval error: ${error.message}`);
    }
};
