import React from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/css';

const main = css({
	position: 'relative'
})

const DynamicComponents = dynamic(() => import("../components/Tabcomponent"), {
	loading: () => <p>loading</p>
})

const Home = () => {
	return (
		<div className={main}>
			{/* <button onClick={() => handleGetQr(data)}>Get QR</button>
        {qr_url && <Image alt="QR Code" src={qr_url} />} */}
			<DynamicComponents />
		</div>
	)
}
export default Home;