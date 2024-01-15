import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
    const addToCartHandler = () => { }

    return (
        <div className='home'>
            <section></section>


            <h1>Latest Product

                <Link to="/search" className='findmore'>More</Link>
            </h1>

            <main>
                <ProductCard productId='3323' name='watch'
                    photo='https://m.media-amazon.com/images/I/81F9S6OzE8L._SX569_.jpg' price={100} stock={10}
                    handler={addToCartHandler} />
            </main>
        </div>
    )
}

export default Home