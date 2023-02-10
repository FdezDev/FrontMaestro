import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card.jsx";
import '../asset/style/containerCard.css'


function Upimg() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/product/view')
            .then(res => {
                setData(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="container-card-Upimg">
           {
            data.map((data) => (
                    <Card
                    name={data.name}
                    nameProduc={data.nameProduc}
                    description={data.description}
                    price={data.price}
                    amount={data.amount}
                    />
            ))
           }

           
        </div>
        
    )



}

export default Upimg;