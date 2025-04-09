import React, {useEffect, useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = 'https://my-json-server.typicode.com/jihyun1029/hnm-practice/db'
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data.products);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) =>
                        <Col lg={3} key={item?.id}>
                            <ProductCard item={item} />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;