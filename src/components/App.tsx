import React, { useState, useEffect } from 'react'
import Header from './header'
import HymnList from './hymn-list'
import HymnView from './hymn-view'
export interface HymnInterface {
	id: number
	title: string
	v1: string
	v2?: string
	v3?: string
	v4?: string
	v5?: string
	chorus?: string
	chorus2?: string
}

const App = () => {
	const [hymn, selectHymn] = useState<HymnInterface | null>(null)
	const [searchString, setSearchString] = useState<string>('')
	return (
		<>
			<Header
				searchString={searchString}
				setSearchString={setSearchString}
				selectHymn={selectHymn}
				hymn={hymn}
			/>
			{hymn ? (
				<HymnView hymn={hymn} />
			) : (
				<HymnList selectHymn={selectHymn} searchString={searchString} />
			)}
		</>
	)
}

export default App
