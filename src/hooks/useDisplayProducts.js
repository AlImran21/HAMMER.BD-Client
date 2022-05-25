import { useEffect, useState } from "react";

const useDisplayProducts = () => {
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('https://hidden-crag-33232.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setDisplayProducts(data))
    }, []);

    return [displayProducts, setDisplayProducts];
}

export default useDisplayProducts;