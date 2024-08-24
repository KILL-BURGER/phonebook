import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const SearchBox = () => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();
    const search = (event) => {
        event.preventDefault();
        dispatch({type: 'SEARCH_CONTACT', payload: {word}});
    };

    return <Form onSubmit={search}>
        <Row>
            <Col lg={10}>
                <Form.Control
                    type="text"
                    placeholder="이름을 입력해주세요."
                    onChange={(event) => setWord(event.target.value)}
                />
            </Col>
            <Col lg={2}>
                <Button variant="primary" type="submit">찾기</Button>
            </Col>
        </Row>
    </Form>;
}

export default SearchBox;