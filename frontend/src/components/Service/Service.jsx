import React from 'react'
import "./Service.css";

const Service=()=>{
    return(
        <div className='service'>
        <div className="card-container">
        
        <h1 className='card-title'>Individual Tax Planning</h1>
        <p className='card-description'>
        The strategic arrangement of finances to minimise tax liabilities while 
        complying with tax laws.</p>
        <a href='card page' className='card-btn'>Learn More</a>
        </div>
        <div className="card-container">
        
        <h1 className='card-title'>Business Tax Advisory</h1>
        <p className='card-description'>
        Supports clients managing their compliance and looking 
        ahead to plan for their continued business success and growth</p>
        <a href='card page' className='card-btn'>Learn More</a>
        </div>

        <div className="card-container">
        
        <h1 className='card-title'>Estate and Trust Planning</h1>
        <p className='card-description'>
        Determining how an individual's assets will be preserved, managed, and 
        distributed after death</p>
        <a href='card page' className='card-btn'>Learn More</a>
        </div>

        <div className="card-container">
        
        <h1 className='card-title'>International Tax Consulting</h1>
        <p className='card-description'>
        Our dedicated international tax professionals support 
        you with the tax aspects and complexities of cross-border situations.</p>
        <a href='card page' className='card-btn'>Learn More</a>
        </div>

        <div className="card-container">
        
        <h1 className='card-title'>Tax Compliance and Filing</h1>
        <p className='card-description'>
        adhering to tax laws and regulations by correctly reporting income, expenses, and other financial details to the relevant tax authorities.</p>
        <a href='card page' className='card-btn'>Learn More</a>
        </div>

        </div>
        
    )

}
export default Service;