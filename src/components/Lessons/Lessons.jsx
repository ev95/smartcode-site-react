import './Lessons.css'
import LessonsImg from '../../assets/images/lessons-img.svg'
function Lessons(props) {
    return (
        <section class="courses bg-silver">
            <div class="container">
                <div class="section-title left">
                    <h2>Ծրագրավորման <span>դասընթացներ</span></h2>
                    <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                </div>
                <div class="section-box">
                    <div class="section-info">
                        <div class="courses-box active">
                            {
                                props.lessons.map((lesson) => {
                                    return (
                                        <div class="course-item">
                                            <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer" title="WEB Front-End">
                                                <img src={lesson.image} alt={lesson.title} title={lesson.title} />
                                            </a>
                                            <h2>
                                                <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer">{lesson.title}</a>
                                            </h2>
                                            <h3>Դասընթաց</h3>
                                            <a href="https://smartcode.am/hy" target='_blank' rel="noreferrer" class="btn-act">Դիտել</a>
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
                    <img src={LessonsImg} alt="lessons" class="section-image" />
                </div>
            </div>
        </section>
    )
}
export default Lessons;