import { Modal, Typography } from "@mui/material";

const ProductInfo = ({ open, setOpen, children }) => {

    const handleClose = () => {
        setOpen(prev => !prev)
    }


    return (<>
        <Modal open={open} onClose={handleClose}>
            <div>
                <Typography>Modal</Typography>
                {children}
            </div>
        </Modal>
    </>);
}

export default ProductInfo;