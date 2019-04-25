import React from 'react'

import styles from './address.module.scss'

const Address = () => (
	<article id={styles.address}>
		<span className={styles.name}>Greystone Place</span>
		<span>512 Mohawk Road East</span>
		<span>Hamilton, L8V 2J2</span>
	</article>
)

export default Address
