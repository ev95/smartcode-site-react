import { forwardRef } from 'react';
import './About.css'

const About = forwardRef((_, ref) => {
    return (
        <section ref={ref} className="about">
            <div className="container">
                <div className="section-title">
                    <h2>Մեր <span>մասին</span></h2>
                    <p>Ընկերության գործունեության մասին</p>
                </div>
                <div className="section-box">
                    <div className="section-info">
                        <p>SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 8 տարի է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ:</p>
                        <p>Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք մեր ուսանողների սերն ու վստահությունը:</p>
                        <p>Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում SmartCode-ի օգնությամբ:</p>
                    </div>
                    <img src="https://smartcode.am/public/image/per3.svg" className="section-image" alt='About' />
                </div>
            </div>
        </section>
    )
})

export default About;