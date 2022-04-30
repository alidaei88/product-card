import "./MyModal.css"
import React, { useState } from 'react';
import { CalcDiscount } from "../../Modules/Calculate";
import { Modal, Form, Input, Slider, Button } from 'antd';


const MyModal = ({ isModalVisible, setShowModal, modalData, onEditFinishHandler }) => {

  const [name, setName] = useState(modalData?.name);
  const [price, setPrice] = useState(modalData?.price);
  const [amount, setAmount] = useState(modalData?.amount);
  const [disc, setDisc] = useState(modalData?.disc);


  const handleCancel = () => setShowModal(false)

console.log("modalData:", modalData)

  return (
    <Modal className='modal-container' title="Edit Product" visible={isModalVisible} onCancel={handleCancel} footer={null}>
      <Form initialValues={ modalData } onFinish={ onEditFinishHandler } preserve={false}>
        <Form.Item label="name" name={`name`} labelAlign={"left"} labelCol={{ span: 24 }} className='input-label'>
          <Input className='input-box' placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item className='input-label' name='price' label="Price" >
          <Input className='input-box' placeholder="Product Cost" type="number" onChange={(e) => setPrice(e.target.value)} />
        </Form.Item>
        <Form.Item className='input-label' name='amount' label="Count of Product" >
          <Input className='input-box' placeholder="Product amount" type="number" onChange={(e) => setAmount(e.target.value)} />
        </Form.Item>
        <Form.Item className='slider-label' name='disc' >
          <Slider className='slider' value={ disc } onChange={ value => setDisc(value)} />
        </Form.Item>
        <Form.Item className='final-price' label="Final Price:" name="finalPrice" >
          <span > { +price * +amount * (100 - +disc) } $ </span>
        </Form.Item>
        <Form.Item className="button-container">
          <Button className='submit-button' type="primary" htmlType="submit" shape="round"> Save</Button>
        </Form.Item>
      </Form>
    </Modal>

  )
}


export default MyModal;