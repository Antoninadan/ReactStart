import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        const { user, title } = this.props;

        console.log('Header.js', this);

        return (
            <>
                <h2>{title}</h2>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
            </>
        )
    }

    // static propTypes = {

    // }
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
    title: PropTypes.string
}

export default Header;