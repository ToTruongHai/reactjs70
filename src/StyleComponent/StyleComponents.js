import React, { Component } from "react";
import './style.css'
import style from './Style.module.css'

export default class StyleComponents extends Component {
  render() {
    const styleBackGround = {
      backgroundColor: 'black',
      color: 'green'
    }
    return (
      <div>
        <p className="pColor">Hello front-end</p>
        <p className={style.pColor}>World </p>
        <p className={style['p-color-blue']}>World 2 </p>
        <p style={{backgroundColor: 'pink', color: 'red'}}>World 3</p>
        <p style={styleBackGround}>World 4</p>
      </div>
    );
  }
}
