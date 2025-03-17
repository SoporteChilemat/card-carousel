import React from 'react';
import Carousel from '../components/Carousel';

export default function Home() {
  // Agrega o quita tarjetas en este array
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Contenido 1' },
    { id: 2, title: 'Card 2', content: 'Contenido 2' },
    { id: 3, title: 'Card 3', content: 'Contenido 3' },
    { id: 4, title: 'Card 4', content: 'Contenido 4' },
    { id: 5, title: 'Card 5', content: 'Contenido 5' },
  ];

  return (
    <div>
      <Carousel cards={cardsData} />
    </div>
  );
}
