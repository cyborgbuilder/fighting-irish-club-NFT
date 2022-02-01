import React from 'react'
import styled from 'styled-components'
function Announcement() {
    return (
        <Container>
            <Wrap>
                <Cards>
                <Card>
                    <h1>Notice</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 

                </Card>


                <Card>
                    <h1>Notice</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 

                </Card>


                <Card>
                    <h1>Notice</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p> 

                </Card>
                </Cards>    
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;

    @media only screen and (max-width: 768px) {
        height: 270vh;
    }
`

const Wrap = styled.div`
    width: 90%;
`

const Cards = styled.div`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

`

const Card = styled.div`
    width: 30%;
    background: linear-gradient(to bottom right, rgb(34, 156, 34), rgb(250, 250, 37));
    margin: 20px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 0;
        margin-top: 25px;
    }
    &:hover{
        transform: scale(1.01);
        cursor: pointer;
    }

    h1{
        border-bottom: 1px solid black;
        padding-bottom: 10px;
        color: white;
        letter-spacing: 1.2px;
        font-size: 60px;
        padding-left: 10px;
        font-family: 'American Captain', sans-serif;

        @media only screen and (max-width: 768px) {
            font-size: 40px;
            padding-bottom: 5px;
        }
    }

    p{
        color: black;
        line-height: 1.8rem;
        letter-spacing: 1.1px;
        text-align: left;
        padding: 0 10px;
        margin-top: 20px;

        @media only screen and (max-width: 768px) {
            font-size: 15px;
            line-height: 1.6rem;
        }
    }
`
export default Announcement
