import Typography from "typography"

const typography = new Typography({
	baseFontSize: '16px',
	baseLineHeight: '1.33',
	headerFontFamily: ['Crimson Text', 'serif'],
	headerWeight: 600,
	bodyFontFamily: ['Lora'],
	bodyWeight: 300,
	scaleRatio: 2.5,
	googleFonts: [
		{
			name: "Crimson Text",
			styles: [
				'600', '700'
			]
		},
		{
			name: 'Lora',
			styles: [
				'300', '400'
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
