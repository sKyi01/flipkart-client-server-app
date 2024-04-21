import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";
const Navbar=()=>{


    const Component= styled(Box)`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin: 55px 130px 0 130px;
    
    
    
    
    `

    const Container =styled(Box)`
    padding: 12px 8px;
    text-align:center;
    
    
    
    `

    const Text = styled(Typography)`
    
    font-size:14px;
    font-weight:600;
    font-family:inherit;
    `
    return(

        <Component >

        {
            navData && navData.map((data,index)=>(

                <Container >

                <img src={data.url} alt="nav" style={{width: 64}} />
                <Text>{data.text}</Text>
                
                
                
                </Container>
            ))
        }
        
        
        </Component>
    )
}

export default Navbar;