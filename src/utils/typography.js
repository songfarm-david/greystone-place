import Typography from "typography"

const typography = new Typography({
	baseFontSize: '16px',
	baseLineHeight: '1.5',
	headerFontFamily: ['Crimson Text', 'serif'],
	headerWeight: 600,
	bodyFontFamily: ['Source Sans Pro'],
	bodyWeight: 400,
	scaleRatio: 2.5,
	googleFonts: [
		{
			name: "Crimson Text",
			styles: [
				'600', '700'
			]
		},
		{
			name: 'Source Sans Pro',
			styles: [
				'400'
			]
		}
	]
})

export const { scale, rhythm, options } = typography
export default typography

// fonts:
// questria
// libre baskerville
// Crimson Text (600)
