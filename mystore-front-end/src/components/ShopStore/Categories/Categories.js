import React from 'react';
import './style.css';

const Categories = prosp => {
    return (
        <React.Fragment>
            <span>Categories</span>
            <ul class="CategoryList">
                <li>
                    <span>
                        <a href="http://localhost:3001/products/phones/APPLE-iPhone-11-(Black,-64-GB)-1620982041054">phones</a>
                    </span>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </li>
                <li>
                    <span>
                        <a href="#">Shirt & Tops</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="#"></a>
                    </span>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Categories;

