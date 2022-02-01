import Link from "next/link";
import React from "react";
import StyleSheet from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <div className={StyleSheet.home__container}>
        <div className={StyleSheet.home__container__main}>
          <div className={StyleSheet.home__container__main__left__block}></div>

          <div className={StyleSheet.home__container__main__about}>
            <div className={StyleSheet.home__container__main__about__image}>
              {/* <Image
                width={"100%"}
                height={"100%"}
                src={ProfileImage}
                alt="My Image"
              /> */}
              <div className={StyleSheet.profile__image}></div>
            </div>

            <div className={StyleSheet.home__container__main__about__text}>
              <div className={StyleSheet.title}>
                <h1 className={StyleSheet.title__main}>
                  <div className={StyleSheet.title__liner}></div>
                  {"I'M FORHADUL ISLAM."}
                </h1>
                <h1 className={StyleSheet.title__sub__title}>WEB DEVELOPER</h1>
              </div>

              <div className={StyleSheet.decprition}>
                <p>
                  {
                    "I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me."
                  }
                </p>
              </div>

              <div className={StyleSheet.about__more__info}>
                <Link href="/about" passHref>
                  <a>
                    <button>
                      <p>MORE ABOUT ME</p>
                      <span className={StyleSheet.icon}>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={StyleSheet.home__container__change__mode}></div>
      </div>
      <div className={StyleSheet.home__container__add__animation}></div>
    </>
  );
}
