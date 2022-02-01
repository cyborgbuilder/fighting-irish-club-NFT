import React from 'react'
import styled from 'styled-components'
function AnnouncementsHead() {
    return (
        <Container>
           <Wrap>
           <Frame>
                <img src="/images/frame.png" />
            </Frame>
            <Head>
            <img src="/images/frameHead.png" />
            <h1>ANNOUNCEMENTS</h1>
            <p>🍀</p>
            </Head>
           </Wrap>
           <Header>
               
           </Header>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    background: black;
    height: 90vh;

    @media only screen and (max-width: 768px) {
        height: 50vh;
    }



`
const Wrap = styled.div`
    width: 100%;
    position: relative;
`
const Frame = styled.div`
    width: 100%;
    padding-top: 300px;

    @media only screen and (max-width: 768px) {
        display: none;
    }


    img{
        width: 100%;
    }
`

const Head = styled.div`
width: 50%;   
position: absolute; 
left: 24%;
top: 270px;

img{
    width: 100%;
}

h1{
    position: absolute;
    top: 37px;
    left: 180px;
    font-family: 'American Captain', sans-serif;
    color: white;
    font-size: 60px;

    @media only screen and (max-width: 768px) {
        font-size: 35px;
        left: 110px;
        top: 23px;
    }
}

p{
    font-size: 50px;
    position: absolute;
    left: 310px;
    top: 100px;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
        left: 180px;
        top: 58px;
    }

}

@media only screen and (max-width: 768px) {
    width: 100%;
    left: 0%;
    top: 150px;
}

`

const Header = styled.div`
font-family: 'American Captain', sans-serif;
color: white;
position: static;
left: 25%;
top: 200px;




`
export default AnnouncementsHead
