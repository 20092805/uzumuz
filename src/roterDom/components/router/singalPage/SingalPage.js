import React from "react";
import './Singal.css'
import { useParams } from "react-router-dom";
import data from "../../Data";

const SingalPage = () => {
    const { id } = useParams()
    const result = data.filter(i => i.id == id)
    return (
        <div className="">
            {
                result?.map((Value, inx) => {
                    return (
                        <div key={inx} className="Cards1">
                            <img src={Value.img} alt="" />
                            <h3>{Value.name}</h3>
                            <b>Model:{Value.model}</b>
                            <p>Price {Value.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SingalPage