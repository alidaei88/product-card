import React from "react"
import { Card, Col, Row } from 'antd';


const TotalCard = ({ data }) => {

    const totalPrice = data.reduce((total, item) => (+item.price*item.amount) + total, 0);
    const totalPayment = data.reduce((total, item)=> (+item.finalPrice)+total, 0)
    const totalDiscount = totalPrice ? Math.floor( ((totalPayment * 100) / totalPrice)) : 0 ;
    

    return (
        <div className="total-container">

    <Row  gutter={24} style={{ marginTop: 20 }}>
      <Col span={8} style={{ width: 300 }}>
        <Card title="Total price" bordered={true} className="price-card" headStyle={{ backgroundColor: '#f5f5f5'  }}	> 
          { totalPrice } $
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Total Discount" bordered={true}  className="discount-card" headStyle={{ backgroundColor: '#f5f5f5'  }}>
          { totalDiscount } %
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Total Payment" bordered={true} className="payment-card" headStyle={{ backgroundColor: '#f5f5f5', color: 'blue'  }}>
          {totalPayment} $
        </Card>
      </Col>
    </Row>
        </div>
    )
}

export default TotalCard;