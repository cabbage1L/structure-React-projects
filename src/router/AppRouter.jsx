import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/Mainlayout'

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRouter