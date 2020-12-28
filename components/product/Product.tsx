import React from 'react'
import Slider from "react-slick"
import { productsMock } from './productsMOCK'
import styles from './Products.module.scss'


function Product() {

    const carouselSettings = {
        dots: true,
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay: false,
        autoplaySpeed:3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...carouselSettings} className={styles.container}>
            {
                productsMock.map(product =>
                    <>
                        <img className={styles.image} key={product.id} src={product.image} />
                        <ul>
                            <li className={styles.name}>{product.name}</li>
                            <li className={styles.description}>{product.description}</li>
                            <li className={styles.price}>{product.price},00€</li>
                            {product.tags.map(tag => <span className={styles.tag}>{` ${tag}`}</span>)}
                        </ul>
                        <div>
                            <button>Buy</button> <button>More details</button>
                        </div>
                    </>
                )
            }
        </Slider>
    )
}

export default Product
