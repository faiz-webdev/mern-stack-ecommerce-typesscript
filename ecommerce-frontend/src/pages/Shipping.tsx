import React, { ChangeEvent, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Shipping() {
    const navigate = useNavigate()


    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    })

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='shipping'>
            <button className='back-btn' onClick={() => navigate('/cart')}><BiArrowBack /></button>


            <form >
                <h1>
                    Shipping Address
                </h1>

                <input type="text" placeholder='address' name='address'
                    required
                    value={shippingInfo.address} onChange={changeHandler} />

                <input type="text" placeholder='city' name='city'
                    required
                    value={shippingInfo.city} onChange={changeHandler} />


                <input type="text" placeholder='state' name='state'
                    required
                    value={shippingInfo.state} onChange={changeHandler} />

                <select name="country" required value={shippingInfo.country}
                    onChange={changeHandler}>
                    <option value="">Select country</option>
                    <option value="india">India</option>
                    <option value="america">America</option>
                </select>


                <input type="number" placeholder='Pin Code' name='pinCode'
                    required
                    value={shippingInfo.pinCode} onChange={changeHandler} />

                <button type='submit'>Pay Now</button>
            </form>
        </div>
    )
}

export default Shipping