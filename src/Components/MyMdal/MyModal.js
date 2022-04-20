import React from 'react';
import { Modal, Form, Input, Slider } from 'antd';

const MyModal = ({ isModalVisible, setShowModal }) => {

    const handleOk = () => {

        setShowModal(false)
    }

    const handleCancel = () => {

        setShowModal(false)
    }

    return(

    <div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form.Item className='input-label' label="Name">
          <Input className='input-box' placeholder="Product Name" value={ "nameValue" } onChange={"handleNameOnchange"} />
        </Form.Item>
        <Form.Item className='input-label' label="Price" >
          <Input className='input-box' placeholder="Product Cost" value={ "priceValue" } onChange={"handlePriceOnchange"} type="number"/>
        </Form.Item>
        <Form.Item className='input-label' label="Count of Product" >
          <Input className='input-box' placeholder="Product amount" value={ "amountValue" } onChange={"handleAmountOnchange"} type="number"/>
        </Form.Item>
        <Form.Item className='slider-label' >
          <Slider className='slider' value={""} onChange={"handleSliderOnchange"} />
        </Form.Item>
      </Modal>
    </div>

    )
}


export default MyModal;