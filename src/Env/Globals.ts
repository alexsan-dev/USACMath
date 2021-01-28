const toCamelCase = (text: string) => text.replace(text.charAt(0), text.charAt(0).toUpperCase())

// COLORES
interface IPColor {
	name: string
	value: string
}

// COLORES PRIMARIOS
const primaryColors: IPColor[] = [
	{ name: '--purple', value: '#511F73' },
	{ name: '--lightblue', value: '#1AA5BB' },
	{ name: '--blue', value: '#346898' },
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
