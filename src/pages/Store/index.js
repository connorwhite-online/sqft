import './index.css';
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../../components/Model';
import { gsap } from 'gsap';
import Client from 'shopify-buy';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Store() {

    const storeRef = useRef();
    const [product, setProduct] = useState(null);

    const client = Client.buildClient({
        domain: 'sq-ft-2544.myshopify.com',
        storefrontAccessToken: '227f073ed07ba7ab78417cda998543b1'
    });
    
    // Fetch a single product by Handle
    const handle = 'issue-01';
    
    client.product.fetchByHandle(handle).then((product) => {
      // Do something with the product
        setProduct(product);
    });

    const handleAddToBag = () => {
        client.checkout.create().then((checkout) => {
            // Do something with the checkout
            console.log(checkout);
        });
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            let tl = gsap.timeline({});
                tl.from('.webgl', {
                    duration: 1,
                    scale: 0,
                    opacity: 0,
                    ease: 'power3.inOut',
                }, 1);
                tl.from('.productName', {
                    duration: 1,
                    opacity: 0,
                    x: -100,
                    ease: 'power3.inOut',
                }, 1);
                tl.from('.productPrice', {
                    duration: 1,
                    opacity: 0,
                    x: -100,
                    ease: 'power3.inOut',
                }, 1.5);
                tl.from('.productDescription', {
                    duration: 1,
                    opacity: 0,
                    ease: 'power3.inOut',
                }, 2);
                tl.from('.productButton', {
                    duration: 1,
                    opacity: 0,
                    ease: 'power3.inOut',
                }, 2.5);
        }, storeRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div className='store' ref={storeRef}>
            <div className='webgl'>
                <Canvas >
                    <ambientLight />
                    <pointLight position={[10, 10, -3]} intensity={.5}/>
                    <pointLight position={[5, -5, 3]} intensity={.5} />
                    {/* <mesh rotation-y={45}>
                        <boxBufferGeometry attach='geometry' args={[2, 3, .25]}/>
                        <meshStandardMaterial attach='material' color='turquoise' />
                    </mesh> */}
                    <Model />
                </Canvas>
            </div>
            {product && (
                <div className='product' >
                    <div className='productName'>
                        {product.title}
                    </div>
                    <div className='productPrice'>
                         ${product.variants[0].price.amount}
                    </div>
                    <div className='productDescription'>
                        {product.description}
                    </div>
                    <div className='productButton'>
                        <button onClick={handleAddToBag}>Add to Bag</button>
                    </div>
                </div>
            )}
        </div>
    )
}