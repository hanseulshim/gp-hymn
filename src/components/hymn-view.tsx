import React from 'react'
import styled from 'styled-components'
import { HymnInterface } from 'components/App'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Verse = styled.div`
	white-space: pre-line;
	text-align: center;
`

const Chorus = styled(Verse)`
	font-weight: bold;
`

const HymnView = ({ hymn }: { hymn: HymnInterface }) => {
	const verses: string[] = []
	let chorus: string = ''
	let chorus2: string = ''
	for (const [key, value] of Object.entries(hymn)) {
		console.log(key)
		if (key.includes('v')) {
			verses.push(value)
		} else if (key === 'chorus') {
			chorus = value
		} else if (key === 'chorus2') {
			chorus2 = value
		}
	}
	return (
		<Container>
			{verses.map((verse, i) => (
				<>
					<Verse>{verse}</Verse>
					{i === 0 && chorus && <Chorus>{chorus}</Chorus>}
				</>
			))}
			{chorus2 && <Chorus>{chorus2}</Chorus>}
		</Container>
	)
}

export default HymnView
