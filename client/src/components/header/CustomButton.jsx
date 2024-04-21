 
import {Box, Button,Typography, styled} from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"

const CustomButton=()=>{

    const LoginButton=styled(Button)`
    color: #28740f;
    background: #FFFFFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius:2px;
    box-shadow: none;
    font-weight: 600;
    height:32px;
    
    `

    return(
        <Box style={{display:"flex", gap:"40px",  justifyContent:"center",alignItems:"center" }}>
        <LoginButton  variant="contained">Log in</LoginButton>
        <Typography>Become a Seller</Typography>
        <Typography>More</Typography>
        <Box style={{display:"flex"}}>

        <ShoppingCart/>
        <Typography>Cart</Typography>
        
        
        </Box>
        
        </Box>
    )
}

export default CustomButton;