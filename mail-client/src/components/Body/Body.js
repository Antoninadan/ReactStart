import React, { PureComponent } from 'react'

class Body extends PureComponent {
    render() {
        const {emails} = this.props;

    const emailCards = emails.map(email => (<div key={email.id}>{email.topic}</div>))

        return (
            <div>
                {emailCards}
            </div>
        )
    }
}

export default Body