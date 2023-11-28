import React from 'react'
import classes from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={classes.footer}>
        <div className={classes.container}>   
            <ul>    
                <li>
                <img
                  className={classes.footerIcon}
                  src="/icons/header_icon.png"
                  alt="Logo"
                />
                </li>

                <li className={classes.footerContact}>    
                    <span> Liên hệ với chúng tôi </span>
                    <a href='https://www.facebook.com/tantien.hmtt'> dev1 </a>
                    <a> dev2</a>
                    <a> dev3</a>
                    <a> dev4</a>
                </li>

                <li>
                    <span> Thông tin về page</span>
                    <a>Github</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
