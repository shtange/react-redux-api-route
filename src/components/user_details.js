import React from 'react';


class UserDetails extends React.Component {

  render() {
    const {name, avatar_url, created_at, ...props} = this.props;

    const createdAt = created_at ? new Date(created_at) : null;

    const extraFields = [].reduce.call(
      ['location', 'company', 'email', 'bio', 'blog', 'followers', 'following'],
      (result, fieldName) => {
        if (props[fieldName]) {
          result.push([fieldName, props[fieldName]]);
        }
        return result;
      },
      []
    );
    
    return (
      <div className="user-profile-details">
        {name &&
          <h1>{name}</h1>}
        {createdAt &&
          <p>created at: {createdAt.toLocaleString('en-GB', { timeZone: 'UTC' })}</p>}
        {avatar_url &&
          <img src={avatar_url} width="240" alt="" />}
        {extraFields.map(([fieldName, fieldValue], index) => (
          <p key={index}>{`${fieldName}: ${fieldValue}`}</p>
        ))}
      </div>
    );
  }

}

export default UserDetails;