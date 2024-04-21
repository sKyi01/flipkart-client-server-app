import react from "react";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import flipkartLogo from "../../images/flipkartLogo.png";
import flipkarPlus from "../../images/flipkartPlus.png";
import Search from "./Search"
import CustomButton from "./CustomButton";

const Header = () => {
  const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
  `;
  const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
  `;
  const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
  `;

  const PlusImage = styled('img')({
    width:10,
    height: 10,
    marginLeft:4,

  })

  const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
  `

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{minHeight:"55px"}}>
          <Component>
            <img src={flipkartLogo} alt="logo" style={{ width: 75 }} />
            <Box style={{display:"flex"}}>
              <SubHeading>Explore &nbsp;
              <Box component="span" style={{color: "#FFE500"}}>plus</Box>
              </SubHeading>
              <PlusImage src={flipkarPlus}  />
            </Box>
          </Component>
          

          <Search/>
          <CustomButtonWrapper>
          <CustomButton/>
          
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
     
    </div>
  );
};

export default Header;
