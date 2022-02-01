import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';
function Detail() {

    const scrollToTop = () => window.scrollTo({ top: '100px', behavior: "smooth"})
    

    return (
        <Container>
            <Wrap>
                
                <Left>
                   <Slide left>
                    <div>
                    <img src="/Images/detail.png"/>
                    </div>
                    </Slide>
                </Left>
             

                
                <Right>
                <Slide right>
                    <div>
                    <h1>🍀The Fighting Irish club🍀</h1>
                    <p>is a collection of 1000 unique nfts that live on the ethereum blockchain. The Irish are famous for their cultural symbols recognised and celebrated across the world. But apart from their proverbial luck, the colour green and St. Patrick’s Day, it’s a zest for life that truly defines the Irish.</p>
                    <p>While the history of Ireland made its people tenacious, they’ve also embraced the light-hearted side of life. This combination of courage and a sense of humour can be observed in everything they do. “It’ll be grand, sure!”, is an Irish saying that captures this spirit – take a shot, give it a go, whatever happens, life will be great.</p>
                    <p>The Irish have a knack for sharing and creating stories; and it is said that Irish stories are always long and never dull.<br></br>So buckle up and prepare yourself for the adventure with these beautifully designed nfts that come with numerous IRL benefits such as our very Irish mystery box that will be generated after every 20th sale and its value keep increasing each time and also revenue sharing with its members.</p>
                    <p>Go on get your lucky Fighting Irish club member and join the fun! 🍀 The more you own the more you will profit! Look out for the pot of gold at the end of the 🌈</p>                    
                    </div>
                    
                    </Slide>
                </Right>
                
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 120vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        height: 240vh;
    }



`

const Wrap = styled.div`
    width: 90%;
    display: flex;
    margin-top: 50px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 70px;
    }
`

const Left = styled.div`
    width: 45%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    div{
        width: 100%;

        img{
            width: 100%;
            border-radius: 15px;
        }
    }

`

const Right = styled.div`
    width: 55%;
    text-align: left;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    div{
        width: 85%;
        text-align: center;


        h1{
            color: white;
            font-size: 36px;
            letter-spacing: 1.05px;
            text-transform: uppercase;
            margin-bottom: 50px;

            
            @media only screen and (max-width: 768px) {
                font-size: 21px;
                margin-top: 30px;
            }
        }

        p{
            color: white;
            line-height: 1.5rem;
            letter-spacing: 1.2px;
            margin-top: 20px;

            @media only screen and (max-width: 768px) {
                font-size: 14px;
            }
        }

        button{
            padding: 10px 22px;
            border-radius: 5px;
            outline: none;
            border: none;
            background-color: #FFC800;
            margin-top: 30px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            &:hover{
                transform: scale(1.02);
                color: white;
            }

        }
    }
`
export default Detail
