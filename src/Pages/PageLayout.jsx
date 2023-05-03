import React from 'react';
import Header from '../Components/Header';
import { Outlet } from "react-router-dom";
import "../index.css";

const PageLayout = ({ toggleMode, isDark }) => {
    return (
        <>
            <Header toggleMode={toggleMode} isDark={isDark} />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default PageLayout
