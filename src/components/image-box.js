import React from 'react'

import imageBoxStyles from './image-box.module.scss'

const ImageBox = ({ children }) => (
	<article className={
		"image-box " + imageBoxStyles.imageBox
	}>
		{children}
		</article>
)

export default ImageBox
