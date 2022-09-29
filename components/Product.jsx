import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({product:{image,slug,price,name} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
            <img 
            src={urlFor(image && image[0])}
            width={210}
            height={210}
            className="product-image"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product