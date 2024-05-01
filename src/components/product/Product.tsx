import React, {FC} from 'react';
import styles from './Product.module.css';
export interface IProductProps{
    id: number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[]
}

export type IProductPropsWithChildren = IProductProps & {children?: React.ReactNode};
const Product:FC<IProductPropsWithChildren> = ({
                                                   id,
                                                   title,
                                                   description,
                                                   price,
                                                   discountPercentage,
                                                   rating,
                                                   stock,
                                                   brand,
                                                   category,
                                                   thumbnail,
                                                   images
                                               }) => {
    return (
        <div className={[styles.flex, styles.box].join(' ')}>
            <h1>{id} - {title} </h1>
            <p>{brand}</p>
            <div className={[styles.flexRow, styles.flex].join(' ')}> {
                images.map((image, index) => <div className={[styles.img, styles.wight, styles.flex].join(' ')}><img className={styles.wightImg} key={index} src={image} alt={image}/></div>)
            }</div>
            <p>{description}</p>
            <h3>Price - {price} usd</h3>
            <p>Discount percentage: {discountPercentage}, rating: {rating}, stock: {stock},</p>
            <p>Category - {category}, thumbnail - {thumbnail},</p>
        </div>
    );
};

export default Product;