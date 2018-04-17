import React, { Component } from 'react'

import avatarImg from './avatar.jpg'

class MainInfo extends Component {
  render() {
    return (
      <section className="Resume-MainInfo">
        <img className="Resume-Avatar" src={avatarImg} alt="my photo" />
        <h1 className="Resume-Name">Alexander Knyazev</h1>
        <p className="Resume-Profession">Web engineer</p>
      </section>
    )
  }
}

export default MainInfo;