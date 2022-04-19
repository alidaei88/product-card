import React, { useState } from "react";
import './Main.css';
import CardList from "../CardList/CardList";
import CardForm from "../CardForm/CardForm";
import TotalCard from "../TotalCard/TotalCard";



const Main = () => {

    const [nameValue, setNameValue] = useState();
    const [priceValue, setPriceValue] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [data, setData] = useState([])

    const finalCost = priceValue - ((priceValue * sliderValue) / 100)

    const onFinishHandle = () => {
        if (nameValue) {
            if (priceValue) {
                const newObj = 
                    {
                        name: nameValue,
                        finalPrice: finalCost,
                        price: priceValue,
                        disc: sliderValue
                    }
                
                const updatedData = [...data, newObj]
                setData(updatedData)
                setNameValue();
                setPriceValue(0);
                setSliderValue(0);
            } else alert("please insert Product's Price")

        } else alert("please insert Product")


    }




    return (
        <div className="main-container">
            <CardForm
                nameValue={nameValue}
                priceValue={priceValue}
                sliderValue={sliderValue}
                handleNameOnchange={(e) => setNameValue(e.target.value)}
                handlePriceOnchange={(e) => setPriceValue(e.target.value)}
                handleSliderOnchange={(value) => setSliderValue(value)}
                onFinishHandle={onFinishHandle}
                finalCost={finalCost}
            />
            <CardList data={data} />
            <TotalCard data= { data } />
        </div>
    )
}

export default Main