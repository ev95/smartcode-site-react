import LessonsImg from '../../assets/images/lessons-img.svg';
import './Lessons.css';

function Lessons(props) {
    return (
        <section className="courses bg-silver">
            <div className="container">
                <div className="section-title left">
                    <h2>Ծրագրավորման <span>դասընթացներ</span></h2>
                    <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                </div>
                <div className="section-box">
                    <div className="section-info">
                        <div className="courses-box active">
                            {
                                props.lessons.map((lesson) => {
                                    return (
                                        <div className="course-item">
                                            <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer" title="WEB Front-End">
                                                <img src={lesson.image} alt={lesson.title} title={lesson.title} />
                                            </a>
                                            <h2>
                                                <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer">{lesson.title}</a>
                                            </h2>
                                            <h3>Դասընթաց</h3>
                                            <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer" className="btn-act">Դիտել</a>
                                            <p>
                                                <span>{lesson.duration}</span>
                                                <span>{lesson.price}</span>
                                            </p>
                                        </div>
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
}
export default Lessons;