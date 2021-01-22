import React from 'react';
import {FiSearch} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import Blog from '../Blog';
import {Container, Container_search,Input,AnimationContainer,Content,Container_menu} from './styles';
import illustration from '../../assets/Illustration.svg';

const Home: React.FC = () =>{
  return(
      <Container>
        <Content>
        <AnimationContainer>
        <h1>Healthy Food</h1>
          <img src={illustration} alt=""/>
          <Container_search>
            <h1> Ready for Trying a new recipe </h1>
            <Input>
            <input type="text" placeholder="Search healthy recipes"/>
            </Input>
            <button><FiSearch color="#fff"/></button>
          </Container_search>
          <Container_menu>

            <Link to="/healthy">
            <h1 className="item1" >HEALTHY RECIPES</h1>
            </Link>

            <Link to="/blog">
            <h1 className="item2">BLOG</h1>
            </Link>

            <Link to="/join">
            <h1 className="item3">JOIN</h1>
            </Link>

            <button>REGISTER</button>
          </Container_menu>
          </AnimationContainer>
        </Content>
      </Container>
  );
}
export default Home;
