import Head from "next/head";
import Navbar from "./Navbar";
// import styles from "./Layout.module.css";

// Local Import
// import "./style.css";

function Layout(props) {
    return (
    <div className="layout">
        <customHead/>

        {/* Navbar */}
        <Navbar/>


        {/* App content */}
    <div className="app-content">{props.children}</div>

        {/* STYLING with styled-jsx */}
        <style jsx>{`
            .Layout{
                width: 100%;
                height:100vh;
                color:#ffffff;
                
            }  
`}</style>
</div>)
}
export default Layout;

// setting page head

function customHead(){
    return (<Head>
        <title>Covid Anchor</title> 
        <link rel="stylesheet" href="/css/global.css"/>
        </Head>
        );
}

