import './Lesson.css'
export function Lesson({ lesson }) {
    return (
        <div className="course-item">
            <a href="#" target='_blank' rel="noreferrer" title="WEB Front-End">
                <img src={lesson.image} alt={lesson.title} title={lesson.title} />
            </a>
            <h2>
                <a href="#" target='_blank' rel="noreferrer">{lesson.title}</a>
            </h2>
            <h3>Դասընթաց</h3>
            <a href="#" target='_blank' rel="noreferrer" className="btn-act">Դիտել</a>
            <p>
                <span>{lesson.duration}</span>
                <span>{lesson.price}</span>
            </p>
        </div>
    )
}