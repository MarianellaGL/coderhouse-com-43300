import { Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
    return (
        <Card>
            <CardContent>
                {/**de acá saco mi param de category deacuerdo a la categoria seleccionada */}
                <Button component={Link} to={`/categories/${category}`}>
                    {category}
                </Button>
            </CardContent>
        </Card>
    );
}

export default CategoryCard;