import React from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.css'
const MainlLayout = () => {
    return (
        <>
            <div className='lay'>
                <div className='out'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainlLayout
