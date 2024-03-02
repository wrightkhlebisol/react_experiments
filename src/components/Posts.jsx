import React, {useState} from 'react'
import { PageHeader } from '@ant-design/pro-components';


function Posts(props) {
	const [file, setFile] = useState('')

	function handleFileUpload(e) {
		e.preventDefault()
		console.log(e)
	}

	return (
		<div className="posts_container">
			<div className="page_header_container">
				<PageHeader title="Posts" content="Some post contengts" style={{border: '1px solid rgb(235, 237, 240)'}}/>
			</div>
			<div className="articles_container">
				<div className="article_container">
					<input 
						type="file" 
						value={file} 
						onChange={(e) => handleFileUpload(e)}
					/>	
				</div>
			</div>
		</div>
	)
}

export default Posts
