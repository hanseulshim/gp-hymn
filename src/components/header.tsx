import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { Input, PageHeader } from 'antd'
import { SearchOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { HymnInterface } from 'components/App'

const Container = styled(PageHeader)`
	display: flex;
	flex-direction: column;
	align-items: center;

	.ant-page-header-heading {
		justify-content: center;
		display: flex;
	}
`

const Header = ({
	searchString,
	setSearchString,
	selectHymn,
	hymn
}: {
	searchString: string
	setSearchString: Dispatch<SetStateAction<string>>
	selectHymn: Dispatch<SetStateAction<HymnInterface | null>>
	hymn: HymnInterface | null
}) => {
	return (
		<PageHeader
			title={hymn ? hymn.title : 'GP Hymn App'}
			onBack={() => selectHymn(null)}
			backIcon={hymn && <ArrowLeftOutlined />}
		>
			{!hymn && (
				<Input
					allowClear
					style={{ maxWidth: 400 }}
					size="large"
					placeholder="Search for a hymn"
					value={searchString}
					onChange={e => setSearchString(e.target.value)}
					prefix={<SearchOutlined />}
				/>
			)}
		</PageHeader>
	)
}

export default Header
