import React from "react";
import './CardList.css';
import { List } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import FormItem from "antd/lib/form/FormItem";

const CardList = ({ data, setData, setShowModal }) => {

    const deleteHandler = (id) => {
     const updatedData = data.filter(item => item.id!==id)   
            setData(updatedData)
    }

    const modalHandler = (id) => {
        setShowModal(id)
    }

    

    return (

        <div className="list-container">
            <List
                header={<div className="list-header-container">
                    <span className="list-header-cols"> Name</span>
                    <span className="list-header-cols">Price</span>
                    <span className="list-header-cols">Amount</span>
                    <span className="list-header-cols">Discount</span>
                    <span className="list-header-cols">Action</span>

                </div>}
                bordered
                dataSource={data}
                rowKey={key => React.Key}

                renderItem={item =>
                (
                    <List.Item className="list-item-container">
                        <span className="list-item-cols">{item.name}</span>
                        <span className="list-item-cols">{item.price}</span>
                        <span className="list-item-cols">{item.amount}</span>
                        <span className="list-item-cols disc-span">{item.disc}%</span>
                        <span className="list-item-cols list-header-icon"> 
                            <span className="delete-icon"><DeleteOutlined onClick={ () => deleteHandler(item.id) }/></span>
                            <span className="edit-icon"><EditOutlined onClick={()=> modalHandler(item.id) }/></span>
                        </span>
                    </List.Item>
                )}
            />

        </div>

    )
}

export default CardList;