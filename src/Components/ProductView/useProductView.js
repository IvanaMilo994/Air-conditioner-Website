import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProductView = () => {
    const { id: productId } = useParams();
    const [ product, SetProduct] = useState({});
    const [ selectedColor, setSelectedColor] = useState("");
    const [ selectedSize, setSelectedSize] = useState("");
    const [ selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = ({ target: {value} }) => {
        setSelectedQuantity(value);
    };

    
};