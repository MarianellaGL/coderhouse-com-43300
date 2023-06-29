import { Container } from "@mui/material";
import Navbar from "./Navbar";

const ContainerComponent = () => {
    const menuItems = [
        {
            text: 'Products',
            link: '/products',
            subMenuItems: [
                { text: 'Product 1', link: '/products/1' },
                { text: 'Product 2', link: '/products/2' },
                { text: 'Product 3', link: '/products/3' },
            ],
        },
        {
            text: 'Elements',
            link: '/elements',
            subMenuItems: [
                { text: 'Element 1', link: '/elements/1' },
                { text: 'Element 2', link: '/elements/2' },
                { text: 'Element 3', link: '/elements/3' },
            ],
        },
        {
            text: 'Purchase',
            link: '/purchase',
            subMenuItems: [
                { text: 'Wishlist', link: '/purchase/1' },
            ],
        },
    ];
    return (<>
        <Container>
            <Navbar menuItems={menuItems} />
        </Container>
    </>);
}

export default ContainerComponent;
