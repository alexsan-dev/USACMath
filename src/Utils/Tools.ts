import colors from 'Env/Globals'

// CAMBIAR UN COLOR
const changeColor = (selectedColor: IColor, dark: boolean) => {
	// SELECCIONAR BODY
	const { body } = document

	// CAMBIAR PROPIEDAD
	body.style.setProperty(selectedColor.name, dark ? selectedColor.darkValue : selectedColor.value)
}

// CAMBIAR TODOS
export const toggleDarkMode = (): void => {
	// LEER VARIABLE GLOBAL
	const darkValue: boolean = window.localStorage.getItem('darkmode') === '1'

	// RECORRER CAMBIOS
	colors.forEach((color: IColor) => changeColor(color, darkValue))
}

// NORMALIZAR ENTRADAS

export const nfd = (str: string): string => {
	return str
		.toLowerCase()
		.trim()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}
