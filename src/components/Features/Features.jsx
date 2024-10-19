import featuresImg from '../../assets/images/features-img.svg';
import MainButton from '../MainButton/MainButton.jsx';

import './Features.css';
import { Feature } from '../Feature/Feature.jsx';


function Features({ features }) {
    return (
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <h2>Ինչո՞ւ սովորել <span>մեզ մոտ</span></h2>
                    <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
                </div>
                <div className="section-box">
                    <img src={featuresImg} alt="features" className="section-image" />

                    <div className="section-info">
                        <ul>
                            {features.map((feature, index) => {
                                return (
                                    <Feature key={index} feature={feature} />
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="section-foot">
                    <MainButton />
                </div>
            </div>
        </section>
    )

}
export default Features;