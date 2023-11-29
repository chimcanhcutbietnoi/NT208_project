import React from 'react'
import classes from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}> 
      <ul> 
        <li className={classes.NamePage}>
          <b className={classes.Name}> YUMMY</b>
        </li>

        <li className={classes.Address}>
          <b className={classes.address}> Địa chỉ</b>
          <p> Phường Linh Trung, Thủ Đức, Tp Hồ Chí Minh</p>
        </li>

        <li className={classes.Contacts}>
          <b className={classes.contact}> Liên hệ với chúng tôi</b>
          <p> <a href=''>@huynhminhtantien</a></p>
          <p> <a href=''>@buihoangtrucanh</a></p>
          <p> <a href=''>@lehoangoanh</a></p>
          <p> <a href=''>@nguyenngoctramy</a></p>
        </li>
        
          <li className={classes.infor}>
            <b> Thông tin về page</b>
            <p> <a href=''>github</a></p>
          </li>
          </ul>
      </div>
    </footer>
  )
}
