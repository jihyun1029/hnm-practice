import React, {useEffect, useState} from 'react';
import ProductCard from "../component/ProductCard";
import {Col, Container, Row} from "react-bootstrap";

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = 'http://localhost:4000/products'
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) =>
                        item ? (
                            <Col lg={3} key={item?.id}>
                                <ProductCard item={item} />
                            </Col>
                        ) : null
                    )}
                </Row>
            </Container>
            <ProductCard/>
        </div>
    );
};

export default ProductAll;