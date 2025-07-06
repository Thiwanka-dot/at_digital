import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import style from './home.module.css';
import { useState } from 'react';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className={style.heroContainer}>
                <img src="./src/assets/HeroImage.png" alt="hero" />
                <div className={style.heroDetails}>
                    <h1>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
                    <button className={style.btn}>GET FREE CONSULTATION</button>
                </div>
            </div>
            <div className={style.section}>
                <div className={style.sectionItem}>
                    <img src="./src/assets/image_2.png" alt="web&mobile" />
                    <div className={style.sectionItemInfo}>
                        <h2>Web & Mobile App Development</h2>
                        <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <button className={style.btn}>LEARN MORE</button>
                    </div>
                </div>
                <div className={style.sectionItem}>                    
                    <div className={style.sectionItemInfo}>
                        <h2>Digital Strategy Consulting</h2>
                        <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <button className={style.btn}>LEARN MORE</button>
                    </div>
                    <img src="./src/assets/image_1.png" alt="web&mobile" />
                </div>
                <div className={style.FAQs}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={`accordion ${style.accordionCustom}`} id="accordionExample">
                        <div className={style.accordionItem}>
                            <h2 className={`accordion-header ${activeIndex === 1 ? style.activeHeader : ''}`}>
                                <button
                                    className={`${style.accordionButton} ${activeIndex === 1 ? style.activeButton : ''}`}
                                    type="button"
                                    onClick={() => toggleAccordion(1)}
                                    aria-expanded={activeIndex === 1}
                                    aria-controls="faq1"
                                >
                                    Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                                    <span className={`${style.icon} ${activeIndex === 1 ? style.activeIcon : ''}`}>{activeIndex === 1 ? '−' : '+'}</span>
                                </button>
                            </h2>
                            <div id="faq1" className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className={style.accordionBody}>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </div>
                            </div>
                        </div>
                        <div className={style.accordionItem}>
                            <h2 className={`accordion-header ${activeIndex === 2 ? style.activeHeader : ''}`}>
                                <button
                                    className={`${style.accordionButton} ${activeIndex === 2 ? style.activeButton : ''}`}
                                    type="button"
                                    onClick={() => toggleAccordion(2)}
                                    aria-expanded={activeIndex === 2}
                                    aria-controls="faq2"
                                >
                                    Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                                    <span className={`${style.icon} ${activeIndex === 2 ? style.activeIcon : ''}`}>{activeIndex === 2 ? '−' : '+'}</span>
                                </button>
                            </h2>
                            <div id="faq2" className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className={style.accordionBody}>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </div>
                            </div>
                        </div>
                        <div className={style.accordionItem}>
                            <h2 className={`accordion-header ${activeIndex === 3 ? style.activeHeader : ''}`}>
                                <button
                                    className={`${style.accordionButton} ${activeIndex === 3 ? style.activeButton : ''}`}
                                    type="button"
                                    onClick={() => toggleAccordion(3)}
                                    aria-expanded={activeIndex === 3}
                                    aria-controls="faq3"
                                >
                                    Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                                    <span className={`${style.icon} ${activeIndex === 3 ? style.activeIcon : ''}`}>{activeIndex === 3 ? '−' : '+'}</span>
                                </button>
                            </h2>
                            <div id="faq3" className={`accordion-collapse collapse ${activeIndex === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
                                <div className={style.accordionBody}>
                                    Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
