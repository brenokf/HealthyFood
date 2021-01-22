import styled from 'styled-components';
import px2vw from '../../utils/px2vw';
export const Container = styled.div`
:root {
      font-size: ${px2vw(24)} ;

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }


display: flex;
width: 1600px;
height:743.3px;
h1{
position: absolute;
width: 226px;
height: 43px;
margin-left: 260px;
margin-top: 28px;

font-weight: bold;
font-size: 32px;
line-height: 39px;

color: #BADC58;
}
img{

  margin-left: 728px;
  width:872px;
  height:743.3px;
  margin-top:0;

  svg {
    border:1px solid;
}
}
`;
export const Container_search = styled.div`
position: absolute;
width: 412px;
height: 284px;
left: 133px;
top: 293px;

h1{
width: 328px;
height: 200px;
margin-left: 133px;
font-weight: bold;
font-size: 48px;
line-height: 59px;

color: #000000;

}

input{
margin-left: 135px;
margin-top: 250px;
width: 343px;
height: 52px;
text-align: left;
border: 1px solid #2D3561;
box-sizing: border-box;
border-radius: 5px;
border-color:#2D3561;
input{
width: 300px;
height: 50px;
}
}

button{
  position: absolute;
  width: 52px;
  height: 52px;
  left: 493px;
  top: 250px;
  background: #BADC58;
  border-radius: 5px;
  border-style: none;
  transition: color 0.2s;

  &:hover{
    background-color: #B5D657;
  }
}
`;
export const Input = styled.div`
margin-left: 135px;
margin-top: 250px;
width: 344px;
height: 52px;
border: 1px solid #707070;
box-sizing: border-box;
border-radius: 5px;

input{
margin-left: 6px;
margin-top: 10px;
width: 330px;
height: 30px;
border-style: none;
color: #9E9BAF;
}
`;

export const Container_menu = styled.div`
display:flex;
width: 1366px;
height: 103px;
left: -4px;
top: 0px;

.item1{
width: 170px;
height: 21px;
margin-left: -590px;
margin-top: 40px;

font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: #fff;

}

.item2{
width: 170px;
height: 21px;
margin-left: -400px;
margin-top: 40px;

font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: #fff;

}

.item3{
width: 170px;
height: 21px;
margin-left: -320px;
margin-top: 40px;

font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;

color: #fff;



}
button{
width: 130px;
height: 52px;
margin-left: -250px;
margin-top:25px;
border-style:none;
background: #FFFFFF;
border-radius: 5px;
color:#BADC58;

transition-duration: 0.2s;

&:hover{
  background-color: #B5D657;
  color:#fff;
}

}
`;

