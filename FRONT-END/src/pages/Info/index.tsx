import React from 'react';
import {Container, Container_info} from './styles';
import bloco_services from '../../assets/bloco_services.svg';

const Info: React.FC = () =>{
  return(
      <Container>
        <h1>Healthy Food</h1>
          <img src={bloco_services} alt=""/>
          <Container_info>
            <h1> The best services ready To serve you</h1>
                <p className="p1">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="p2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className="p3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <button>Know More</button>
          </Container_info>
      </Container>
  );
}
export default Info;
