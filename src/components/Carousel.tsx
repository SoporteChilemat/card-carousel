import { useState } from 'react';
import styles from '../styles/Carousel.module.css';

interface Card {
    id: number;
    title: string;
    content: string;
}

interface CarouselProps {
    cards: Card[];
}

function Carousel({ cards }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    console.log('cards', cards);

    const prevSlide = () => {
        if (index > 0 && !transitioning) {
            setTransitioning(true); // Evitar que se pueda hacer otro cambio antes de que termine la animación
            setTimeout(() => {
                setIndex((prev) => prev - 1);
                setTransitioning(false);
            }, 500); // Duración de la animación en CSS
        }
    };

    const nextSlide = () => {
        if (index < cards.length - 1 && !transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setIndex((prev) => prev + 1);
                setTransitioning(false);
            }, 500);
        }
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.cardsWrapper}>
                {cards.map((card, i) => {
                    let positionClass = "";
                    if (i === index) positionClass = styles.cardCenter;
                    else if (i === index - 1) positionClass = styles.cardLeft;
                    else if (i === index + 1) positionClass = styles.cardRight;
                    else if (i < index) positionClass = styles.moveLeft;
                    else if (i > index) positionClass = styles.moveRight;

                    return (
                        <div key={card.id} className={`${styles.card} ${positionClass}`}>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                        </div>
                    );
                })}
            </div>

            <div className={styles.carouselButtons}>
                <button className={styles.button} onClick={prevSlide} disabled={index === 0 || transitioning}>
                    ◀
                </button>
                <button className={styles.button} onClick={nextSlide} disabled={index === cards.length - 1 || transitioning}>
                    ▶
                </button>
            </div>
        </div>
    );
}

export default Carousel;
