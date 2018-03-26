import React from 'react';

const HeadBlockInfo = (props) => {
  const info = props.info;
  return (
    <ul style={{"listStyle":"none"}}>
      <li>block_num: {info.block_num}</li>
      <li>cycles: {info.cycles}</li>
      <li>id: {info.id}</li>
      <li>previous: {info.previous}</li>
      <li>producer: {info.producer}</li>
      <li>producer_changes: {info.producer_changes}</li>
      <li>producer_signature: {info.producer_signature}</li>
      <li>ref_block_prefix: {info.ref_block_prefix}</li>
      <li>timestamp: {info.timestamp}</li>
      <li>transaction_merkle_root: {info.transaction_merkle_root}</li>
    </ul>
  );
};

export default HeadBlockInfo;
