import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom'

function Mint() {
    return (
        <Container>
            
            <Wrap>
            <Zoom>
                <div>
                    <h1>MINT IN IRISH FIGHTING CLUB</h1>
                    <p>Minting will open on launch day - ..........</p>
                    <h5>Pre - Sale is Active!</h5>
                    <button>Mint Now</button>
                </div>
                </Zoom>    
            </Wrap>
           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;


`
const Wrap = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    margin-top: 300px;

    @media only screen and (max-width: 768px) {
        margin-top: 160px;
    }

    div{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1{
            margin-top: 70px;
            font-size: 39px;

            @media only screen and (max-width: 768px) {
                font-size: 24px;
            }
        

        }

        p{
            margin-top: 30px;
            font-size: 16px;

            @media only screen and (max-width: 768px) {
                font-size: 11px;
                margin-top: 20px;
            }
        }

        h5{
            margin-top: 20px;

            @media only screen and (max-width: 768px) {
                font-size: 14px;
            }
        }
        button{
            margin-top: 35px;
            margin-bottom: 80px;
            border: none;
            outline: none;
            border-radius: 5px;
            padding: 10px 30px;
            background-color: rgb(81, 228, 81); 
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover{
                transform: scale(1.02);
                color: white;
            }
        }
        
    }
    
`
export default Mint
