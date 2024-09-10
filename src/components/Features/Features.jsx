import featuresImg from '../../assets/images/features-img.svg';
import MainButton from '../MainButton/MainButton.jsx';
import { FaChevronDown, FaStar } from "react-icons/fa6";


import './Features.css';


function Features(props) {
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
                            {
                                props.features.map((feature) => {
                                    return (

                                        <li className="dropbox">
                                            <div className="dropbox-head">
                                                <div>
                                                    <FaStar />
                                                    <p>{feature.title}</p>
                                                </div>
                                                <FaChevronDown />
                                            </div>
                                            <div className="dropbox-collapse">
                                                <p>{feature.description}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }


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