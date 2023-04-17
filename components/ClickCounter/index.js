// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  increment = () => {
    this.setstate(prevstate => ({count: prevstate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="counts">The Button has been clicked {count} times</h1>
        <p>click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.increment}>
          click me!
        </button>
      </div>
    )
  }
}
export default Counter
