import React from 'react'
import Lists from './Lists'
import './Menubar.css';

function Menubar({ updateWidth, fetchData, data }) {
    const { width, initialNavBarWidth, expandedNavBarWidth, navData } = data;
    return (
        <div className="left-menubar" style={{ width: `${width}%` }}>
            <div className="burger" onClick={() => updateWidth(width === expandedNavBarWidth ? initialNavBarWidth : expandedNavBarWidth)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="navbar-scroll">
                <Lists
                    showTitle={width === initialNavBarWidth ? false : true}
                    data={navData} fetchData={fetchData}
                />
            </div>
        </div>
    )
}
export default Menubar
