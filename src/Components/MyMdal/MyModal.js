import "./MyModal.css"
import React from 'react';
import { CalcDiscount } from "../../Modules/Calculate";
import { Modal, Form, Input, Slider, Button } from 'antd';


const MyModal = ({ isModalVisible, setShowModal, modalData  }) => {

  const handleCancel = () => {

    setShowModal(false)
  }
  const finalCost = CalcDiscount(modalData?.price, modalData?.disc, modalData?.amount)

  return (
      <Modal  className='modal-container' title="Edite Product" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form initialValues={ modalData }>
          <Form.Item className='input-label' name={'name'} label="Name">
            <Input className='input-box'  placeholder="Product Name" />
          </Form.Item>
          <Form.Item className='input-label' name='price' label="Price" >
            <Input className='input-box'  placeholder="Product Cost" type="number" />
          </Form.Item>
          <Form.Item className='input-label' name='amount' label="Count of Product" >
            <Input className='input-box'  placeholder="Product amount" type="number" />
          </Form.Item>
          <Form.Item className='slider-label' name='disc' >
            <Slider className='slider' />
        </Form.Item>
        <Form.Item className='final-price' name="finalPrice" >
        <span>Final Price:</span> <span>{finalCost} $ </span>
        </Form.Item>
          <Form.Item className="button-container">
          <Button className='submit-button' type="primary" htmlType="submit" shape="round"> Save</Button>
        </Form.Item>
        </Form>
      </Modal>

  )
}


export default MyModal;