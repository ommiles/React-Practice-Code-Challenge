import React, { Fragment, Component } from 'react';

class Sushi extends Component {

  render() {
    const { id, name, img_url, price } = this.props
    return (
      <Fragment>
        <div className="sushi" id={id}>
          <div className="plate" 
            id={id}
            onClick={(e) => this.props.buySushi(e, price)} >
          <img src={img_url} width="100%" alt={name} id={id} />
          <h4 className="sushi-details" id={id}>
          {name} ${price}
          </h4>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Sushi;