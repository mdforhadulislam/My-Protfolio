import Link from "next/link";
import React from "react";
import StyleSheet from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={StyleSheet.main__navbar}>
      <div className={StyleSheet.main__navbar__container}>
        <ul>
          <li>
            <Link href="/home" passHref>
              <a>
                <span>HOME</span>
                <i className="fas fa-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>
                <span>ABOUT</span>
                <i className="fas fa-user"></i>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/protfolio" passHref>
              <a>
                <span>PROTFOLIO</span>
                <i className="fas fa-briefcase"></i>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact" passHref>
              <a>
                <span>CONTACT</span>
                <i className="fas fa-envelope-open"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
