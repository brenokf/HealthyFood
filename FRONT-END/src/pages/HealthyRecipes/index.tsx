import React from 'react';
import {Container,Container_card, Card1, Card2, Card3 , Card4} from './styles';
import comida_1 from '../../assets/comida_1.svg';
import comida_2 from '../../assets/comida_2.svg';
import comida_3 from '../../assets/comida_3.svg';
import comida_4 from '../../assets/comida_4.svg';
const HealthyRecipes: React.FC = () =>{
  return(

    <Container>

       <h1>Our Best Recipes</h1>
        <h2>Far far away , behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts</h2>
        <Container_card>
          <Card1>
            <img src={comida_1} alt=""/>
            <h1>Broccoli Salad With Bacon</h1>
            <button>See Recipe</button>
          </Card1>

          <Card2>
            <img src={comida_2} alt=""/>
            <h1>Classic Beff Burgers</h1>
            <button>See Recipe</button>
          </Card2>

          <Card3>
            <img src={comida_3} alt=""/>
            <h1>Classic Potato Salad</h1>
            <button>See Recipe</button>
          </Card3>

          <Card4>
            <img src={comida_4} alt=""/>
            <h1>Classic Potato Salad</h1>
            <button>See Recipe</button>
          </Card4>

        </Container_card>
        </Container>
  );
}


export default HealthyRecipes;
