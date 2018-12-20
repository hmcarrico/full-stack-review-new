import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {userLogin} from '../../ducks/reducer';
import {Link} from 'react-router-dom';

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            loading: true,
            error: null
        }
    }

    componentDidMount(){
        axios.get('/api/me').then(res => {
            this.props.userLogin(res.data)
        }).then(res => {
            this.setState({
                loading: false
            })
        })
    }

    login = () => {
        const redirecturi = encodeURIComponent(window.location.origin + '/auth/callback');
        const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`
        window.location = url;
      }
    

    render(){
        const {loading, error} = this.state;
        const {user} = this.props;
        const redirecturi = encodeURIComponent(window.location.origin + '/auth/callback');
        const url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirecturi}&response_type=code`
        
        return (
            <div>
                <h1>Profile</h1>
                {loading
                    ? <div>Loading</div>
                    : error
                        ? <div>There was an error Loading</div>
                        : user
                        ? <div>
                            <div>Name: {user.name}</div>
                            <div>Email: {user.email}</div>
                            <img src={user.picture} />
                        </div>
                        : <div>Please <a href={url}>login</a> to view thy profile</div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {user} = state;
    return {
        user
    }
}

export default connect(mapStateToProps, {userLogin})(Profile)