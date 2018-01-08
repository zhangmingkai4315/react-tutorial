import React, {Component} from 'react'
import {connect} from 'react-redux';
import {increment,decrement,storeResult,deleteResult} from '../../store/actions'
class Counter extends Component {
  render() {
    let results = this
      .props
      .results
      .map((r) => {
        return <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>{r.value}</li>
      })
    return (
      <div>
        <div>
          Counter: {this.props.counter}
        </div>
        <div>
          <button onClick={this.props.onIncrementCounter}>Increment</button>
          <button onClick={this.props.onDecrementCounter}>Decrement</button>
        </div>
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>StoreResult</button>
        <ul>
          {results}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {counter: state.counter.counter, results: state.results.results}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter : () => dispatch(increment()),
    onDecrementCounter:()=>dispatch(decrement()),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteResult: (index) => dispatch(deleteResult(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);