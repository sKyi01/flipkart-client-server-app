import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box,styled } from "@mui/material";

const Home = () => {


  const Container = styled(Box)`
  padding :  10px;
  background: #F2F2F2;
  `



  return (
    <>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;
