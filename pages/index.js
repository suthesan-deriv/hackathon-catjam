import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const DynamicComponents = dynamic(() => import("./routes"), {
  loading: () =>  <p>loading ...</p>
}) 

const Home = () => {
  return (
    <>
        <DynamicComponents />
    </>
  )
}

export default Home;