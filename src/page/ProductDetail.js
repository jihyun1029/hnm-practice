import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url=`https://my-json-server.typicode.com/jihyun1029/hnm-practice/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail();
    }, [])
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} />
                </Col>
                <Col>
                    <div className="product-info">{product?.title}</div>
                    <div className="product-info">₩{product?.price}</div>
                    <div className="choice">{product?.choice ? "Conscious choice" : ""}</div>
                    <div className="drop-down">
                        <Form.Select aria-label="Default select example">
                            <option>사이즈 선택</option>
                            {product?.size?.map((s, index) => (
                                <option key={index} value={s}>{s}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <button type="button" className="add-button btn btn-dark">추가</button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;