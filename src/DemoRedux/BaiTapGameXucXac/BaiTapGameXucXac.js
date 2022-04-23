import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";
import styles from './BaiTapGameXucXac.module.css';

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className={`${styles.fontGame}`}
        style={{
          backgroundImage: "url(./img/gameXucXac/bgGame.png)",
          width: "100vw",
          height: "100vh",
        }}
      >
          <h3 className="text-center display-4 pt-5">Bài Tập Game Xúc Xắc</h3>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
