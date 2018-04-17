import React, { Component } from 'react'

import './index.css'

export default class Content extends Component {
  render() {
    return (
      <main className="Content">
        {this.props.children}
      </main>
    )
  }
}
