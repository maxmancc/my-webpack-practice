import React from 'react'

class Publisher extends React.Component {
	constructor(...args) {
		console.log(1)
		super(...args)
	}

	render() {
		return (
			<div className="publisher">
				<div className="title">
					<div>
						<a href="#">网友曝光两女孩蹲着等地铁,称没教养,你怎么看(投票)</a>
					</div>
					<div className="tips">
						<span>还可以输入</span>
						<strong>140</strong>字
					</div>
				</div>
				<img src="../images/cheap.png" alt="" />
				<div className="textElDiv">
					<textarea />
				</div>
				<div className="btnWrap">
					<a className="publishBtn" href="javascript:void(0)">
						发布
					</a>
				</div>
			</div>
		)
	}
}

export default Publisher
