import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { List } from 'antd'
import data from './data'
import { HymnInterface } from 'components/App'

const Item = styled(List.Item)`
	&:hover {
		background: #f5f5f5;
		cursor: pointer;
	}
`

const HymnList = ({
	selectHymn,
	searchString
}: {
	selectHymn: Dispatch<SetStateAction<HymnInterface | null>>
	searchString: string
}) => {
	const hymnList = data.filter(hymn =>
		Object.values(hymn)
			.join(' ')
			.toLowerCase()
			.includes(searchString)
	)
	return (
		<List
			size="large"
			bordered
			dataSource={hymnList}
			renderItem={hymn => (
				<Item
					onClick={() => selectHymn(hymn)}
				>{`${hymn.id}. ${hymn.title}`}</Item>
			)}
		/>
	)
}

export default HymnList
