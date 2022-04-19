import './CardForm.css';
import React from "react";
import { Form, Input, Button, Slider } from 'antd';

const CardForm = ({
  nameValue,
  priceValue,
  sliderValue,
  handleNameOnchange,
  handlePriceOnchange,
  handleSliderOnchange,
  onFinishHandle,
  finalCost
}) => {

  return (
    <div className="form-container">
      <Form  onFinish={onFinishHandle}>
        <Form.Item className='input-label' label="Name">
          <Input className='input-box' placeholder="Product Name" value={ nameValue } onChange={handleNameOnchange} />
        </Form.Item>
        <Form.Item className='input-label' label="Price" >
          <Input className='input-box' placeholder="Product Cost" value={ priceValue } onChange={handlePriceOnchange} type="number"/>
        </Form.Item>
        <Form.Item className='slider-label' >
          <Slider className='slider' value={sliderValue} onChange={handleSliderOnchange} />
        </Form.Item>
        <h3>Final Price:</h3>
        <Form.Item className='final-price ' >
          <h2>{finalCost} $ </h2>
        </Form.Item>
        <Form.Item >
          <Button className='submit-button' type="primary" htmlType="submit" shape="round"> Add</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CardForm;