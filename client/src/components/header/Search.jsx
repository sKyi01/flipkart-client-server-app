import {InputBase, Box, styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const Search=()=>{

    const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left:10px;

    
    `
    const InputSearch = styled(InputBase)`
    width:100%;
    padding-left: 20px;
    font-size:unset;    
    `
    const SearchIconWrapper = styled(Box)`
    color: blue;
    padding:5px;
    display:flex;
    
    `


    return(
        <SearchContainer style={{display:"flex"}}>
        <InputSearch  placeholder="Search for products, brands & more" />
        <SearchIconWrapper><SearchIcon/></SearchIconWrapper>
        
        
        
        
        </SearchContainer>


    )
}

export default Search;