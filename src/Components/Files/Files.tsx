import React from "react";

// ESTILOS
import "./Files.css";

// PROPIEDADES
interface Props extends Idata {
	index: number;
	showToast: Function;
	shareAction: (event: any) => void;
	showPreview: (event: any) => void
}

const File: React.FC<Props> = (props: Props) => {

	const showPreview = (e: any) => {
		const el = e.target as HTMLButtonElement;
		const link = el?.getAttribute("data-link");
		props.showPreview(link);
	}

	return (
		<>
			<div key={props.index} className="file">
				<div className="fileHead">
					<h1>{props.title}</h1>
					<p>{props.text[0]?.toUpperCase() + props.text.substr(1)}</p>
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
					</div>

					<a className="waves waves-dark" href={props.link} title={props.title} download><i className="material-icons">arrow_downward</i> Descargar</a>
				</div>
			</div>
		</>
	)
}

export default File;