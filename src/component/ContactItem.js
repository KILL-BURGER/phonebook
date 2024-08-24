import React from "react";
import {Col, Row} from "react-bootstrap";

const ContactItem = ({item}) => {
    console.log(item);
    return <div className='item'>
        <Row>
            <Col lg={1}>
                <img width={'50px'}
                     src={'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'}
                     alt={'이미지 사진'}/>
            </Col>
            <Col lg={11}>
                <div>{item.name.name}</div>
                <div>{item.phoneNumber}</div>
            </Col>
        </Row>
    </div>

};

export default ContactItem;