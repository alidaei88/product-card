import React, { useState } from "react";
import './Main.css';
import { v4 as uuid } from 'uuid';
import CardList from "../CardList/CardList";
import CardForm from "../CardForm/CardForm";
import TotalCard from "../TotalCard/TotalCard";
import MyModal from "../MyMdal/MyModal";
import { CalcDiscount } from '../../Modules/Calculate'
 


const Main = () => {

    const [nameValue, setNameValue] = useState();
    const [priceValue, setPriceValue] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [amountValue, setAmountValue] = useState(1)
    const [showModal, setShowModal] = useState()
    const [data, setData] = useState([])
    const [modalData, setModalData] = useState()

    // const finalCost = priceValue - ((priceValue * sliderValue) / 100)
    const finalCost = CalcDiscount(priceValue, sliderValue, amountValue)

    const onFinishHandle = () => {
        if (nameValue) {
            if (priceValue) {
                const newObj = 
                    {
                        name: nameValue,
                        finalPrice: finalCost,
                        price: priceValue,
                        amount: amountValue,
                        disc: sliderValue,
                        id: uuid()
                    }
                
                const updatedData = [...data, newObj]
                setData(updatedData)
                setNameValue();
                setPriceValue(0);
                setAmountValue(1);
                setSliderValue(0);
            } else alert("please insert Product's Price")

        } else alert("please insert Product")
    }

    return (
        <div className="main-container">
            <CardForm
                nameValue={nameValue}
                priceValue={priceValue}
                amountValue={amountValue}
                sliderValue={sliderValue}
                setNameValue = { setNameValue }
                setPriceValue = { setPriceValue }
                setAmountValue={ setAmountValue }
                setSliderValue={ setSliderValue }
                onFinishHandle={onFinishHandle}
                finalCost={finalCost}
            />
            <MyModal isModalVisible={ showModal } setShowModal={setShowModal} modalData={ modalData } />
            <CardList data={data} setData={ setData } setShowModal={setShowModal} setModalData={ setModalData } />
            <TotalCard data= { data } />
        </div>
    )
}

export default Main