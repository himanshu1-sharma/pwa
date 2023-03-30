import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import ScrollToTop from '../ScrollToTop'

const Routers = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default Routers