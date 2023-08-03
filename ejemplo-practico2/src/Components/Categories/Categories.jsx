import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import categories from '../../mocks/categories.json';
import useFirebaseData from "../../Hooks/useFirebaseData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Categories = () => {
    const { data, loading, error } = useFirebaseData('categories')
    /*  const [loading, setLoading] = useState(true)
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


    if (loading) return (<div className="spinner-container"><CircularProgress sx={{ color: "#FF627E" }} /></div>)
    if (error) return (<div className="error-container"><Typography variant="h6" sx={{ color: "#8F8C8C" }}>{error}</Typography></div>)


    return (<div className="container">
        <Typography variant="h2" style={{
            color: "#8F8C8C"
        }}>Categorías</Typography>
        <div className="card-container">
            {data.map((category) => {
                return (
                    <Card key={category.id} sx={{ width: "317px", height: "299px", margin: "60px" }} component={Link} to={`/categories/${category.id}`}>
                        <CardContent>
                            <img className="image-card" src={category.image} />
                            <Typography variant="h6" color="textSecondary">{category.category}</Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>



    </div>);
}

export default Categories;