import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container=styled.div`

:root {
      font-size: ${px2vw(24)} ;

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

  height: 100vh;
  display: flex;
  align-items: stretch;
  width: 1440px;
  height: 780px;

h1{
width: 340px;
height: 39px;
margin-left: 950px;
margin-top: 25px;
color: #000;
font-weight: bold;
font-size: 32px;
line-height: 39px;
}

p{
width: 510px;
height: 55px;
margin-left: 845px;
margin-top: 10px;

font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 30px;

text-align: center;

color: #9E9BAF;

}

`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;
export const Card1=styled.div`
display: flex;
width: 348px;
height: 450px;
margin-left: -240px;
margin-top: 80px;
background: #FFFFFF;
box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
border-radius: 5px;

h1{
    width: 323px;
    height: 66px;
    margin-left: -1290px;
    margin-top: 290px;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000;
  }

img {
    margin-right: 969px;
    margin-top: -205px;
  svg{
    border:1px solid;
  }
}


`;
export const Card2=styled.div`
display: flex;
width: 348px;
height: 450px;
margin-left: 520px;
margin-top: -450px;
background: #FFFFFF;
box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
border-radius: 5px;

h1{
    width: 323px;
    height: 66px;
    margin-left: -1290px;
    margin-top: 290px;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000;
  }

img {
    margin-right: 969px;
    margin-top: -205px;
  svg{
    border:1px solid;
  }
}


`;
export const Card3=styled.div`
display: flex;
width: 348px;
height: 450px;
margin-left: 1280px;
margin-top: -450px;
background: #FFFFFF;
box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
border-radius: 5px;

h1{
    width: 323px;
    height: 66px;
    margin-left: -1290px;
    margin-top: 290px;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000;
  }

img {
    margin-right: 969px;
    margin-top: -205px;
  svg{
    border:1px solid;
  }
}

`;
export const Card4=styled.div`
display: flex;
width: 348px;
height: 450px;
margin-left: 2045px;
margin-top: -450px;
background: #FFFFFF;
box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
border-radius: 5px;

h1{
    width: 323px;
    height: 66px;
    margin-left: -1290px;
    margin-top: 290px;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #000;
  }

img {
    margin-right: 969px;
    margin-top: -205px;
  svg{
    border:1px solid;
  }
}


`;

export const Profile1=styled.div`
  width: 50px;
  height: 50px;
img {

  width: 50px;
  height: 50px;
  border-radius:50%;
  margin-left: -270px;
  margin-top:370px

}
p{
  width: 99px;
  height: 20px;
  margin-left: -200px;
  margin-top: -40px;

  font-size: 16px;
  line-height: 20px;
  color: #9E9BAF;
}

`;
export const Profile2 = styled.div`
 width: 50px;
  height: 50px;
img {

  width: 50px;
  height: 50px;
  border-radius:50%;
  margin-left: -270px;
  margin-top:370px

}
p{
  width: 200px;
  height: 20px;
  margin-left: -230px;
  margin-top: -40px;

  font-size: 16px;
  line-height: 20px;
  color: #9E9BAF;
}
`;
export const Profile3 = styled.div`
 width: 50px;
  height: 50px;
img {

  width: 50px;
  height: 50px;
  border-radius:50%;
  margin-left: -270px;
  margin-top:370px

}
p{
  width: 200px;
  height: 20px;
  margin-left: -250px;
  margin-top: -40px;

  font-size: 16px;
  line-height: 20px;
  color: #9E9BAF;
}


`;
export const Profile4 = styled.div`
width: 50px;
  height: 50px;
img {

  width: 50px;
  height: 50px;
  border-radius:50%;
  margin-left: -270px;
  margin-top:370px

}
p{
  width: 200px;
  height: 20px;
  margin-left: -250px;
  margin-top: -40px;

  font-size: 16px;
  line-height: 20px;
  color: #9E9BAF;
}
`;
