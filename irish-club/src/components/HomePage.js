import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'

function HomePage() {


    return (
        <Container>




            <Wrapper>
                <Wrap>
                <Left>
                    <div>
                    <p><span></span></p>
                    <h1>THE FIGHTING IRISH CLUB </h1>
                    <p>The Fighting Irish Club is a collection of 1000 unique nfts straight from Ireland.
This collection aims to capture the true spirit of Irish, always happy and give back to their community.
Start earning with your nft by simple just owning them as The Fighting Irish Club will share its revenues with their members. The more you own the more you will profit.</p>
                    <button>Show Full Collection</button>
                    </div>
                </Left>

                <Right>
                    <div>
                        <img src="/images/front1.png" />
                    </div>
                </Right>
                </Wrap>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #0000004A 0%, #000000 100%), url('/Images/homeb.jpg');
    position: absolute;
    top: 0;

    @media only screen and (max-width: 768px) {
        height: 165vh;
    }



   

`

const Btn = styled.div`
border: none;
outline: none;
border-radius: 5px;
background-color: #FFC800;
margin-right: 10px;
padding: 6px 14px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

&:hover{
    transform: scale(1.02);
    color: white;
}


@media only screen and (max-width: 768px) {

    margin-top: 6px;
    
}

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrap = styled.div`
    width: 92%;
    display: flex;
    

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`
const Left = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
    }

    div{

        margin-top: 30px;
        @media only screen and (max-width: 768px) {
            margin-top: 10px;
        }

        span{
            color: #BCE320;

            
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
            
        }


        
        h1{
            color: white;
            font-size: 70px;
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            padding: 30px;
            border-radius: 15px;
            font-family: 'Rubik', sans-serif;
            color: rgb(209, 209, 209);
            text-shadow: 4px 4px black;

            @media only screen and (max-width: 768px) {
                font-size: 30px;
                margin-top: 20px;
                padding: 15px;
            }
        }

        p{
            color: white;
            margin-top: 35px;
            line-height: 1.8rem;
            letter-spacing: 1.1px;

            @media only screen and (max-width: 768px) {
                margin: 0;
                margin-top: 40px;
                font-size: 14px;
            }
        }

        button{
            background-color: rgb(81, 228, 81);
            border: none;
            outline: none;
            padding: 12px 25px;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover{
                transform: scale(1.02);
                color: white;
            }

            @media only screen and (max-width: 768px) {
                margin-top: 30px;
            }
        }

    }
`

const Right = styled.div`
width: 50%;


@media only screen and (max-width: 768px) {
    width: 100%;
}


div{
    width: 100%;

    img{
        width: 100%;
        margin-top: 2px;

        @media only screen and (max-width: 768px) {
            margin-top: 56px;
            width: 89.7%;
            margin-left: 27px;
        }
    }
}

`
export default HomePage
