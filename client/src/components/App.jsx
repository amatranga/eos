import React from 'react';
import Eos from 'eosjs';

import Header from './Header';
import HeadBlockInfo from './HeadBlockInfo';
import LatestButton from './LatestButton';

let eos = Eos.Testnet();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      block_num: null,
      cycles: null,
      id: null,
      previous: null,
      producer: null,
      producer_changes: null,
      producer_signature: null,
      ref_block_prefix: null,
      timestamp: null,
      transaction_merkle_root: null,
    },
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    // HeadBlock Only

    eos.getInfo({}).then(res => 
      eos.getBlock(res.head_block_num).then(block => this.setState({
        block_num: block.block_num,
        cycles: block.cycles,
        id: block.id,
        previous: block.previous,
        producer: block.producer,
        producer_changes: block.producer_changes,
        producer_signature: block.producer_signature,
        ref_block_prefix: block.ref_block_prefix,
        timestamp: block.timestamp,
        transaction_merkle_root: block.transaction_merkle_root,
      })
    ));
  }

  render() {
    if (this.state.block_num !== null) {
      return (
        <div className="container-fluid">
          <Header />
          <LatestButton handleClick={this.handleClick} />
          <HeadBlockInfo info={this.state} />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Header />
          <LatestButton handleClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default App;
