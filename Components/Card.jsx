import React from "react";
import StyleSheet from "../styles/Card.module.css";

export default function Card({ number, title }) {
  return (
    <div className={StyleSheet.card__div}>
      <div className={StyleSheet.heading}>
        <div className={StyleSheet.number}>{number}</div>
        <span>+</span>
      </div>
      <div className={StyleSheet.secoend__heading}>
        <div className={StyleSheet.liner}></div>
        <div className={StyleSheet.h2}>{title}</div>
      </div>
    </div>
  );
}
