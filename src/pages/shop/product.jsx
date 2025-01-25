import React from 'react'


export const Product = (props) =>{
    const {id, name, price, image} = props.data;
    return (
        <div>
            <img src= {image}/>

            <div className="ProductDescription">
                <p>
                    <b>
                        {name}
                    </b>
                </p>
            <p>${price}</p>
            </div>
        </div>
    ) ;
};