import { forwardRef } from 'react';
import LessonsImg from '../../assets/images/lessons-img.svg';
import { Lesson } from '../Lesson/Lesson';
import './Lessons.css';

const Lessons = forwardRef(({ lessons }, ref) => {
    return (
        <section ref={ref} className="courses bg-silver">
            <div className="container">
                <div className="section-title left">
                    <h2>Ծրագրավորման <span>դասընթացներ</span></h2>
                    <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                </div>
                <div className="section-box">
                    <div className="section-info">
                        <div className="courses-box active">
                            {
                                lessons.map((lesson, index) => {
                                    return (
                                        <Lesson key={index} lesson={lesson} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <img src={LessonsImg} alt="lessons" className="section-image" />
                </div>
            </div>
        </section>
    )
})

export default Lessons;