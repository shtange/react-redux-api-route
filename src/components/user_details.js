import React from 'react';


class UserDetails extends React.Component {

  render() {
    const {name, avatar_url, ...props} = this.props;

    const extraFields = [].reduce.call(
      ['location', 'company', 'email', 'bio'],
      (result, fieldName) => {
        return props[fieldName]
          ? result.concat([fieldName, props[fieldName]])
          : result;
      },
      {}
    );
    
    return (
      <div className="user-profile-details">
        {name &&
          <h1>{name}</h1>}
        {avatar_url &&
          <img src={avatar_url} width="240" alt="" />}
        {Object.keys(extraFields).map(([fieldName, fieldValue]) => (
          <p>{`${fieldName}: ${fieldValue}`}</p>
        ))}
      </div>
    );
  }

}

export default UserDetails;