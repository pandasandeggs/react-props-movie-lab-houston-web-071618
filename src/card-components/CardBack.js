import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    if(this.props.rating === null){
      return <h4>No Rating Found</h4>
    } else {
      return <img src={imgMapper[this.props.rating]} alt="rating" />
    }
  }

  separateGenres = () =>{
    if (this.props.genre.length){
      return this.props.genre.map((category,index) => {
        if (index !== this.props.genre.length - 1) {
          return category + ", ";
        } else {
          return category
        }
      })
    }
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement()}
        <span />
        <h5 className="genres">{this.separateGenres()}</h5>
      </div>
    )
  }
}
