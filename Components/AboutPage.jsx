import React from "react";
import StyleSheet from "../styles/About.module.css";
import Card from "./Card";

export default function AboutPage() {
  return (
    <div className={StyleSheet.about__page__container}>
      <div className={StyleSheet.about__page__container__title}>
        <h1>ABOUT ME</h1>
        <span>RESUME</span>
      </div>

      <div className={StyleSheet.about__page__container__personal__info}>
        <div
          className={StyleSheet.about__page__container__personal__info__left}
        >
          <div
            className={
              StyleSheet.about__page__container__personal__info__left__title
            }
          >
            PERSONAL INFOS
          </div>
          <div
            className={
              StyleSheet.about__page__container__personal__info__left__about
            }
          >
            <div
              className={
                StyleSheet.about__page__container__personal__info__left__about__left
              }
            >
              <ul>
                <li>
                  <b>First Name:</b>
                  <b>Forhadul</b>
                </li>
                <li>
                  <b>Age:</b>
                  <b>18 Years</b>
                </li>
                <li>
                  <b>Freelance:</b>
                  <b>Not Available</b>
                </li>
                <li>
                  <b>Phone:</b>
                  <b>01930631910</b>
                </li>
                <li>
                  <b>Skype:</b>
                  <b>live:.cid.a15d81f87346f575</b>
                </li>
              </ul>
            </div>
            <div
              className={
                StyleSheet.about__page__container__personal__info__left__about__right
              }
            >
              <ul>
                <li>
                  <b>Last Name:</b>
                  <b>Islam</b>
                </li>
                <li>
                  <b>Nationality:</b>
                  <b>Bangladeshi</b>
                </li>
                <li>
                  <b>Address:</b>
                  <b>Chittagong</b>
                </li>
                <li>
                  <b>Email:</b>
                  <b>mdforhadul44@gmail.com</b>
                </li>
                <li>
                  <b>Langages:</b>
                  <b>Bangla,English</b>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              StyleSheet.about__page__container__personal__info__left__button
            }
          >
            <button>
              DOWNLODE CV
              <div className={StyleSheet.icon}></div>
            </button>
          </div>
        </div>
        <div
          className={StyleSheet.about__page__container__personal__info__right}
        >
          <Card number="1" title="YEARS OFEXPERIENCE" />
          <Card number="50" title="COMPLETED PROJECTS" />
          <Card number="3" title="HAPPY CUSTOMERS" />
          <Card number="0" title="AWARDS WON" />
        </div>
      </div>
      <div className={StyleSheet.about__page__container__my__skills}></div>
      <div
        className={StyleSheet.about__page__container__exprience__and__education}
      ></div>
    </div>
  );
}
