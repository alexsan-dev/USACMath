const toCamelCase = (text: string) => text.replace(text.charAt(0), text.charAt(0).toUpperCase())

// COLORES
interface IPColor {
	name: string
	value: string
}

// COLORES PRIMARIOS
const primaryColors: IPColor[] = [
	{ name: '--blue', value: '#1976d2' },
	{ name: '--grayLight', value: '#aaa' },
	{ name: '--gray', value: '#777' },
	{ name: '--blueGray', value: '#607d8b' },
	{ name: '--lightBlue', value: 'hsl(187, 79%, 40%)' },
	{ name: '--blueGrayDark', value: '#455a64' },
	{ name: '--black', value: 'rgba(0, 0, 0, 0.8)' },
	{ name: '--white', value: '#fff' },
	{ name: '--white', value: '#fff' },
]

// COLORES INMUTABLES
const baseColors: IColor[] = []

// PERMUTACIÓN DE COLORES
const colorPer: IColor[] = []

// RECORRER COLORES
primaryColors.forEach((pColor: IPColor) => {
	// RECORRER COLORES
	primaryColors.forEach((pSColor: IPColor) =>
		colorPer.push({
			name:
				pColor.name === pSColor.name
					? pColor.name
					: `${pColor.name}${toCamelCase(pSColor.name.substr(2))}`,
			value: pColor.value,
			darkValue: pSColor.value,
		})
	)
})

// COLORES FINALES
const colors: IColor[] = baseColors.concat(colorPer)

// DARKMODE
export const isDark: boolean =
	window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

// EXPORTACIONES
export { colors }