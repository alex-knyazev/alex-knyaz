import React, { Component } from 'react'
import Typing from 'react-typing-animation';

import Content from '../Content';

import './index.css';
import orangeImg from './orange.png'

const FREQUENCY_TYPING = 30;
const FREQUENCY_CURSOR_ANIMATION = 100;

let cursorOffset = 0;

const runCursorAnimation = () => {
  setInterval(() => {
    cursorOffset += 16;
  }, FREQUENCY_CURSOR_ANIMATION);
}

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinishedTyping: false,
    };
    //this.handleFinishTyping = this.handleFinishTyping.bind(this);
  }

  handleFinishTyping = () => {
    this.setState({
      isFinishedTyping: true,
    });
  }

  render() {
    return (
      <div className="MainPage">
        <Content>
          <div>
            <Typing
              speed={FREQUENCY_TYPING}
              onFinishedTyping={this.handleFinishTyping}
              cursor={
                <TypingCursor
                  isFinishedTyping={this.state.isFinishedTyping}
                />
              }
            >
              <p className="MainPage-AnimatedText">
                Hey, I'm a web engineer from Novocherkassk, Russia.
            </p>
              <Typing.Delay ms={600} />
              <p className="MainPage-AnimatedText">
                I make web applications.
            </p>
            </Typing>
          </div>
        </Content>
      </div>
    )
  }
}

class TypingCursor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnimating: false,
      cursor: null,
    }
  }

  getCoordinates = () => {
    const cursor = this.state.cursor;
    debugger
  }

  handleCursorRef = (e) => {
    console.log(this.state.isAnimating)
    if (!this.state.isAnimating) {
      this.setState({
        isAnimating: true,
        cursor: e
      })
      runCursorAnimation()
    }
  }

  render() {
    const { isFinishedTyping } = this.props;
    if (isFinishedTyping) {
      this.getCoordinates();
    }
    return (
      <span
        ref={this.handleCursorRef}
        className="MainPage-ImageCursor"
        style={{ backgroundPositionX: -cursorOffset + 'px' }}
      >
      </span>
    );
  }
}
