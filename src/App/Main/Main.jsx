

import React from 'react';
import styled from 'styled-components';


import MiddleBottom from './components/MiddleBottom';
function Main() {
  return (
    <>
    <IndexContainer>
        <LabelWrapper>
      <LabelText><b>ALEXANDRE MACHADO</b> </LabelText>
    </LabelWrapper>
    <IndexTextWrapper>
      <IndexText>
{/* <p>I was born in Uberlândia Minas Gerais - Brazil and at 17, I entered Information Sistems at Universidade Federal de Uberlândia.
At 20 I started to work with technology, looking, through work, to expand my skills in the area of database, support and web development (preference to front end). Young, hungry for knowledge looking for a big dream.
Since I was a child, I saw a world of inequality, to change this I started to develop websites and application to desenvolve myself.
My strongest skills are in lead and communication, my mom and dad are seller's so I have this desenvolture Since I was a child.
With technology I'm craving my legacy and trying to change the world. 
 </p> */}
    
          I was born in Brazi and at 17, I entered Mechanical Engineering at Universidade Federal de Uberlândia. At 19, I founded the initiative Homero.tech, looking, through work, to expand my skills in the area of web development. Young, hungry for knowledge looking for a big dream.

          Since I was a child, I saw a world behind the movies. To change this inequality I started to develop websites and application to small enterprises, almost of them was for free. 

          My strongest skills are in React and React Native, which I learned alone. I had experience with JS, so I decided to study more new frameworks and libs, I had the best fit with React. Since then I worked on amazing projects around the world, most of them with React and React Native.

          I'm looking for a new challenge, also, I'm looking for a frontend or mobile engineer position. I am also open to full stack positions with a frontend focus.

          I am craving new challenges that will solidify my expertise and impact society through my work.
        </IndexText>
    </IndexTextWrapper>

    
    </IndexContainer>
    
</>
  );
}

const LabelText = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-wheight: bold;

`
const IndexText = styled.p`
  margin-top: 5vw;
  margin-right: 20px;
  margin-bottom: 5vw;
  font-family: 'Roboto Slab', serif;

`

const IndexTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: flex-start;
  flex:1;
`

const LabelWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: start;
align-items: center;
justify-content: center;
flex:1;
`;

const IndexContainer = styled.div`
display: flex;
flex:2;
flex-direction: row; 

`




export default Main;
