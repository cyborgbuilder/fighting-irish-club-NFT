import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare, FaReddit, FaTelegram, FaTwitter, FaInstagramSquare } from "react-icons/fa";
function Footer() {
    return (
        <Container>
            <Wrap>
                
                <Social>
                    <a href='#'><FaFacebookSquare style={{fontSize: '50px'}} /></a>
                    <a href="#"><FaReddit style={{fontSize: '50px'}}/></a>
                    <a href='#'><FaTelegram style={{fontSize: '50px'}} /></a>
                    <a href='#'><FaTwitter style={{fontSize: '50px' }} /></a>
                    <a href='#'><FaInstagramSquare style={{fontSize: '50px'}} /></a>

                </Social>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: black;

`

const Wrap = styled.div`
    border-top: 2px solid green;
    width: 100%;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Logo = styled.div`
    height: 60px;
    border: 2px solid green;
    width: 60px;
    border-radius: 50%;
    background: green;
    margin-left: 20px;

    img{
        height: 100%;
    }

`

const Social = styled.div`
a{
    color: green;
    margin: 0 20px;

    @media only screen and (max-width: 768px) {
        margin: 0 10px;
    }
}

`
export default Footer
