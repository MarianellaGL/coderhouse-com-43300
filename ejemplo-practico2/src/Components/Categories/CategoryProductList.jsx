import { useParams } from "react-router-dom";
import useFirebaseData from "../../Hooks/useFirebaseData";
import { CircularProgress, Grid, Typography } from "@mui/material";
import ProductDetail from "../Products/ProductDetail";
import AddToCartButton from "../Common/AddToCartButton";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const CateogyrProductList = () => {
    const { categoryId } = useParams();
    const { data, loading, error } = useFirebaseData('categories');
    /*     const [loading, setLoading] = useState(true)
        const [error, setError] = useState(false)
        const [data, setData] = useState([])
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const db = getFirestore();
                    const querySnapshot = await getDocs(collection(db, 'categories'));
                    const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                    setData(newData);
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setLoading(false);
                }
            };
    
            fetchData();
        }, []); */

    console.log(categoryId)

    if (loading) return (<div className="spinner-container"><CircularProgress sx={{ color: "#FF627E" }} /></div>)
    if (error) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}>{error}</Typography></div>)
    console.log(data)
    const category = data.filter(category => category.id === parseInt(categoryId))
    console.log(data)

    if (!category) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}> Category not found </Typography></div>)




    return (<>
        <div className="container">
            <Grid container spacing={3}>
                {category.map((category) => {
                    return category.products.map((product) => {
                        return <ProductDetail key={product.id} product={product} >
                            <AddToCartButton product={product} />
                        </ProductDetail>
                    })
                })}
            </Grid>
        </div>
    </>
    );
}

export default CateogyrProductList;