import React from 'react'
import classes from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';

export default function Footer() {
  const copyEmailToClipboard = (email) => {
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      // Hiển thị toast khi sao chép thành công
      toast.success('Đã sao chép địa chỉ email vào clipboard!');
    } catch (err) {
      console.error('Không thể sao chép vào clipboard:', err);
      // Hiển thị toast khi có lỗi
      toast.error('Có lỗi xảy ra khi sao chép địa chỉ email.');
    } finally {
      document.body.removeChild(textarea);
    }
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.container}> 
      <ul> 
        <li className={classes.NamePage}>
        <img
            className={classes.footerIcon}
            src="/icons/icon.png"
            alt="Logo"
          />
        </li>

        <li className={classes.Address}>
          <b className={classes.address}> Địa chỉ</b>
          <p> Phường Linh Trung, Thủ Đức, Tp Hồ Chí Minh</p>
        </li>

        <li className={classes.Contacts}>
          <b className={classes.contact}> Liên hệ với chúng tôi</b>
          <p> <a onClick={() => copyEmailToClipboard('huynhminhtantien@example.com')}>@huynhminhtantien</a></p>
            <p> <a onClick={() => copyEmailToClipboard('buihoangtrucanh@example.com')}>@buihoangtrucanh</a></p>
            <p> <a onClick={() => copyEmailToClipboard('lehoangoanh@example.com')}>@lehoangoanh</a></p>
            <p> <a onClick={() => copyEmailToClipboard('nguyenngoctramy@example.com')}>@nguyenngoctramy</a></p>
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
