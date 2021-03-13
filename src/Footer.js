import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
         <h3>Questions? Contact us .</h3>
         <div className='all__rows'><div className='row__one'>
             <ul>
             <li>FAQ</li>
             <li>Investor Relations</li>
             <li>Privacy</li>
             <li>Speed Test</li>
             </ul>
            </div>
            <div className='row__one'>
            <ul>
             <li>Help Center</li>
             <li>Jobs</li>
             <li>Cookie Preferences</li>
             <li>Legal Preferences</li>
             </ul></div>
            <div className='row__one'>
            <ul>
             <li>Account</li>
             <li>Ways to Watch</li>
             <li>Corporate Information</li>
             <li>Netflix Originals</li>
             </ul></div>
            <div className='row__one'>
            <ul>
             <li>Media Center</li>
             <li>Terms of Use</li>
             <li>Contact Us</li>
             
             </ul></div></div>
            
        </div>
    )
}

export default Footer
