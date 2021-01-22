import React from 'react';
import {Container, Input, Container_join} from './styles';
import bloco_final_image from '../../assets/bloco_final_image.svg';

const Join: React.FC = () =>{
  return(
      <Container>
        <h1>Healthy Food</h1>
          <img src={bloco_final_image} alt=""/>
          <Container_join>
            <h1> The best services ready To serve you</h1>
                <p className="p1">© Copyrights 2019 Stack. All Rights Reserved.</p>
                <p className="p2">Privacy Policy</p>
                <p className="p3">Terms and Conditions</p>
                <Input>
                <input type="text" placeholder=" Enter your email address "  />
                </Input>
            <button>Join</button>
          </Container_join>
      </Container>
  );
}
export default Join;
