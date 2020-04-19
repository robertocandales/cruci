import React from 'react';

class CrosswordAction extends React.Component {
  render() {
    return (
      // <div style={{ flexbasis: "100%"}}></div>

      <div className='btnMsg' style={{ color: '#e83c7b' }}>
        <button
          style={{
            color: '#ffffff',
            backgroundColor: '#e83c7b',
            height: '60px',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
          onClick={this.props.handleClick}>
          {this.props.action}
        </button>
        {/* <h2 style={{ color: '#e83c7b' }}>Resultados:</h2> */}
        <br></br>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
export default CrosswordAction;
