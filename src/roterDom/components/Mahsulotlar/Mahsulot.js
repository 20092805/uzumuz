import React from "react";
import './style.css'
import Data from "../Data"
import { Link } from "react-router-dom";
import { AiOutlineHeart } from 'react-icons/ai';
import { TbShoppingCartPlus } from 'react-icons/tb';
const Banner = () => {
    return (
        <div className="Mahsulot">
            <div className="BoxCart">
                {Data?.map((value, inx) => {
                    return (
                        <div className="Cards">
                            <img src={value.img} alt="" />
                            <b><AiOutlineHeart /></b>
                            <div className="icon">
                                <b><TbShoppingCartPlus /></b>
                            </div>
                            <Link to={`mahsulot/${value.id}`}>
                                <h4>{value.name}</h4>
                            </Link>
                            <p>{value.price}</p>
                            <i><del>1 357 000 cyм</del></i>
                            <h3>814 000 cyм</h3>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default Banner
