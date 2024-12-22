import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';

const Home = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    // Charger les produits populaires et nouveautés
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products/featured');
      const data = await response.json();
      setPopularProducts(data.popular);
      setNewReleases(data.new);
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error);
    }
  };

  return (
    <HomeContainer>
      <Hero />
      <Section>
        <h2>Produits Populaires</h2>
        <ProductGrid>
          {popularProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductGrid>
      </Section>
      <Section>
        <h2>Nouveautés</h2>
        <ProductGrid>
          {newReleases.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ProductGrid>
      </Section>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export default Home; 