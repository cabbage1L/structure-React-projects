import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />   {/* แสดง children routes */}
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default MainLayout