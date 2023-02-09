import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit:cover;
    ${mobile({ height: "30vh" })}
`
const Info = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
    &:hover {
        transform: scale(1.1);
        transition: transform .5s;
    }
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to='/productlist'>
            <Button>SHOP NOW</Button>
            </Link>
        </Info>
    </Container>
  )
}
