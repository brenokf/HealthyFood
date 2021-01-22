import React from 'react';
import { Left } from 'react-bootstrap/lib/Media';
import Carousel from 'react-elastic-carousel';

import {Avatar} from '@material-ui/core';

import blog_image_1 from '../../assets/blog_image_1.svg';
import bloco_image_2 from '../../assets/bloco_image_2.svg';
import bloco_image_3 from '../../assets/bloco_image_3.svg';
import bloco_image_4 from '../../assets/bloco_image_4.svg';

import perfil1 from '../../assets/perfil1.jpg';
import perfil2 from '../../assets/perfil2.jpg';
import perfil3 from '../../assets/perfil3.jpg';
import perfil4 from '../../assets/perfil4.jpg';
import {Container ,Content,Card1,Profile1,Profile2,Profile3,Profile4, Card2,Card3,Card4 } from './styles';


const Blog: React.FC = () =>{
const breakPoints = [
  { width:1, intemsToShow:1},
  { width:500, intemsToShow:2},
  { width:768, intemsToShow:3},
  { width:1200, intemsToShow:4},
];

  return(
    <Container>
      <Content>
        <h1>Read Our Blog</h1>
        <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <Card1>
                <img src={blog_image_1} alt=""/>
                <h1>Quick-star guide to nuts and seeds</h1>
            <Profile1>
                  <img src={perfil1} alt="logo" />
                  <p>Lorena swich</p>

            </Profile1>
              </Card1>

              <Card2>
                <img src={bloco_image_2} alt=""/>
                <h1>Nutrition: Tips for Improving Your Health</h1>
            <Profile2>
                  <img src={perfil2} alt="logo" />
                  <p>Kristofer Manchestr</p>

            </Profile2>
              </Card2>

              <Card3>
                <img src={bloco_image_3} alt=""/>
                <h1>Quick-star guide to nuts and seeds</h1>
            <Profile3>
                  <img src={perfil3} alt="logo" />
                  <p>Kritin Muller</p>

            </Profile3>
              </Card3>


              <Card4>
                <img src={bloco_image_4} alt=""/>
                <h1>What Make a Healthy Diet?</h1>
            <Profile4>
                  <img src={perfil4} alt="logo" />
                  <p>Kerian Grovoesk</p>

            </Profile4>
              </Card4>
      </Content>
    </Container>

  );
}
export default Blog;
