import React, { MouseEvent } from "react";
import "./Files.css";

// PROPIEDADES
interface Props extends Idata {
	index: number;
	shareAction: (event: MouseEvent<HTMLButtonElement>) => any;
	showPreview: (str: string) => void;
	showComments: (event: MouseEvent<HTMLButtonElement>) => any;
}

const File: React.FC<Props> = (props: Props) => {
	// ENVIAR LINK A LA FUNCION DE VISTA PREVIA
	const showPreview = (e: MouseEvent<HTMLButtonElement>) => {
		const el: HTMLButtonElement = e.target as HTMLButtonElement;
		const link: string | null = el?.getAttribute("data-link");
		if (link) props.showPreview(link);
	}

	return (
		<>
			<div key={props.index} className="file">
				<div className="fileHead">
					<h1>{props.title}</h1>
					<p>{props.text}</p>
				</div>

				<div className="fileMiddle">
					<ul>
						<li>
							<i>Subido:</i>
							<span>{props.upload}</span>
						</li>
						<li>
							<i>Curso:</i>
							<span>{props.course}</span>
						</li>
						<li>
							<i>Tipo:</i>
							<span>{props.type}</span>
						</li>
					</ul>
				</div>

				<div className="fileBody">
					<div className="actions">
						<button onClick={showPreview} data-link={props.link} className="waves waves-dark action showPrev">
							<i data-link={props.link} className="material-icons">visibility</i>
						</button>
						<button onClick={props.shareAction} data-link={props.link} className="waves waves-dark action">
							<i data-link={props.link} className="material-icons">share</i>
						</button>
						<button onClick={props.showComments} data-file={props.title} className="waves waves-dark action">
							<i data-file={props.title} className="material-icons">comment</i>
						</button>
					</div>

					<a className="waves waves-dark" href={props.link} title={props.title} download><i className="material-icons">arrow_downward</i> Descargar</a>
				</div>
			</div>
		</>
	)
}

export default File;