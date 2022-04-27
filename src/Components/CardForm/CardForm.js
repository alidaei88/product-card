import './CardForm.css';
import React, { useState } from "react";
import { Form, Input, Button, Slider } from 'antd';
import { CalcDiscount } from '../../Modules/Calculate';

const CardForm = ({
  nameValue,
  priceValue,
  sliderValue,
  amountValue,
  setNameValue,
  setPriceValue,
  setAmountValue,
  setSliderValue,
  finalCost,
  handleAmountOnchange,
  handleNameOnchange,
  handlePriceOnchange,
  handleSliderOnchange,
  onFinishHandle,
}) => {

  // const [nameValue, setNameValue] = useState();
  // const [priceValue, setPriceValue] = useState(0);
  // const [sliderValue, setSliderValue] = useState(0);
  // const [amountValue, setAmountValue] = useState(1);

  // const finalCost = CalcDiscount(priceValue, sliderValue, amountValue)

  return (
    <div className="form-container">
      <Form  onFinish={onFinishHandle}>
        <Form.Item className='input-label' label="Name">
          <Input className='input-box' name='nameValue' placeholder="Product Name" value={ nameValue } onChange={(e) => setNameValue(e.target.value)} />
        </Form.Item>
        <Form.Item className='input-label' label="Price" >
          <Input className='input-box' placeholder="Product Cost" value={ priceValue } onChange={(e) => setPriceValue(e.target.value)} type="number"/>
        </Form.Item>
        <Form.Item className='input-label' label="Count of Product" >
          <Input className='input-box' placeholder="Product amount" value={ amountValue } onChange={(e) => setAmountValue(e.target.value)} type="number"/>
        </Form.Item>
        <Form.Item className='slider-label' >
          <Slider className='slider' value={sliderValue} onChange={(value) => setSliderValue(value)} />
        </Form.Item>
        
        <Form.Item className='final-price ' >
        <span>Final Price:</span> <span>{finalCost} $ </span>
        </Form.Item>
        <Form.Item >
          <Button className='submit-button' type="primary" htmlType="submit" shape="round"> Add</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CardForm;