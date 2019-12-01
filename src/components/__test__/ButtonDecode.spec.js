import React from 'react';
import {shallow} from 'enzyme'
import ButtonDecode from '../ButtonDecode';


describe('Debería renderizar el componente ButtonDecode', () => {
    it('Debería renderizar el componente ButtonDecode ', () => {
       shallow(<ButtonDecode />);
     });        
  });