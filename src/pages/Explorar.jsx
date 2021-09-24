import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Explorar = () => (
  <div>
    <Header />
    <Link to="/explorar/comidas">
      <button data-testid="explore-food" type="button"> Explorar Comidas</button>
    </Link>
    <Link to="/explorar/bebidas">
      <button data-testid="explore-drinks" type="button"> Explorar Bebidas </button>
    </Link>
    <Footer />
  </div>
);

export default Explorar;
