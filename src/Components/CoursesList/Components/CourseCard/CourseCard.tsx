// REACT
import React from 'react'

// ESTILOS
import Style from './CourseCard.module.scss'

// HOOKS
import { useStrings } from 'Hooks/Context'

// PROPIEDADES
interface CourseCardProps {
	course: CourseFile
}

const CourseCard = ({ course }: CourseCardProps) => {
	// STRINGS
	const lang = useStrings()

	return (
		<>
			<div className={Style.file}>
				<div className={Style.fileHead}>
					<h1>{course.title}</h1>
					<p>{course.text}</p>
				</div>

				<div className={Style.fileMiddle}>
					<ul>
						<li>
							<i>{lang.course.labels[0]}:</i>
							<span>{course.upload}</span>
						</li>
						<li>
							<i>{lang.course.labels[1]}:</i>
							<span>{course.course}</span>
						</li>
						<li>
							<i>{lang.course.labels[2]}:</i>
							<span>{course.type}</span>
						</li>
					</ul>
				</div>

				<div className={Style.fileBody}>
					<div className={Style.actions}>
						<button data-link={course.link} className={Style.action}>
							<i data-link={course.link} className='material-icons'>
								visibility
							</i>
						</button>
						<button data-link={course.link} className={Style.action}>
							<i data-link={course.link} className='material-icons'>
								share
							</i>
						</button>
						<button data-file={course.title} className={Style.action}>
							<i data-file={course.title} className='material-icons'>
								comment
							</i>
						</button>
					</div>

					<a href={course.link} title={course.title} download>
						<i className='material-icons'>arrow_downward</i> {lang.course.download}
					</a>
				</div>
			</div>
		</>
	)
}

export default CourseCard
