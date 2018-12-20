import React, { Component } from 'react';
import axios from 'axios';
import './couches.css';

export default class Couches extends Component {
    constructor(){
        super();
        this.state = {
            couches: []
        }
    }

    componentDidMount(){
        axios.get('/api/couches').then(res => {
            this.setState({
                couches: res.data
            })
        })
    }

  render() {
    const couches = this.state.couches.map(couch => {
        return <div className='couchcouch'>
            <h3>{couch.name}</h3>
            <img src={couch.image} />
            <p>{couch.price}</p>
        </div>
    })
    return (
      <div>
        <h1 className='couchcouch'>Couches</h1>
        {couches}
      </div>
    )
  }
}
