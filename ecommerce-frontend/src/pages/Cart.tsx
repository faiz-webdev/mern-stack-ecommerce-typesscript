import React, { useEffect, useState } from 'react'
import { VscError } from 'react-icons/vsc';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';


const cartItems = [
    {
        productId: "2121",
        photo: "https://m.media-amazon.com/images/I/81F9S6OzE8L._SX569_.jpg",
        name: "PPP",
        price: 32,
        quantity: 2,
        stock: 2,
    }
];



const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;
function Cart() {
    const [couponCode, setCouponCode] = useState<string>("")
    const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (Math.random() > 0.5) setIsValidCouponCode(true);
            else setIsValidCouponCode(false);
        }, 1000)

        return () => {
            clearTimeout(timeOutId);
            setIsValidCouponCode(false);
        }

    }, [couponCode])

    return (
        <div className='cart'>

            <main>
                {cartItems.length > 0 ? (cartItems.map((i, idx) => (
                    <CartItem key={idx} cartItem={i} />
                ))) : (<h1>No Items Added</h1>)}
            </main>


            <aside>
                <p>Sub total: ₹{subTotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>tax: ₹{tax}</p>
                <p>
                    Discount: <em className='red'> - ₹{discount}</em>
                </p>
                <p><b>Total: ₹{total}</b></p>

                <input type="text"
                    placeholder='Coupon Code'
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />

                {couponCode && (
                    isValidCouponCode ? (
                        <span className='green'>₹{discount} off using the
                            <code></code>{couponCode}
                        </span>
                    ) : <span className='red'>Invalid Coupon <VscError /></span>
                )}

                {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
            </aside>

        </div>
    )
}

export default Cart