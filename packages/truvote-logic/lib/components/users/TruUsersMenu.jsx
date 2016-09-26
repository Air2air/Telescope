import Telescope from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';
import { Modal, Dropdown, MenuItem } from 'react-bootstrap';
import { ContextPasser } from "meteor/nova:core";
import { LinkContainer } from 'react-router-bootstrap';
import Users from 'meteor/nova:users';

class UsersMenu extends Component {

  render() {

    const user = this.props.user;

    return (
        <Dropdown id="user-dropdown">
          <Dropdown.Toggle>
            <div className="nav-avatar-div">
              <Telescope.components.UsersAvatar user={user} link={false} />
            </div>
            <div className="nav-avatar-name">{Users.getDisplayName(user)}</div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <LinkContainer to={`/users/${user.telescope.slug}`} /*to={{name: "users.single", params: {slug: user.telescope.slug}}}*/>
              <MenuItem className="dropdown-item" eventKey="1"><FormattedMessage id="users.profile"/></MenuItem>
            </LinkContainer>
            <LinkContainer to={`/account`} /*to={{name: "account"}}*/>
              <MenuItem className="dropdown-item" eventKey="2"><FormattedMessage id="users.edit_account"/></MenuItem>
            </LinkContainer>
            <MenuItem className="dropdown-item" eventKey="4" onClick={() => Meteor.logout(Accounts.ui._options.onSignedOutHook())}><FormattedMessage id="users.log_out"/></MenuItem>
          </Dropdown.Menu>
        </Dropdown>
    ) 
  }

}

UsersMenu.propTypes = {
  user: React.PropTypes.object
}

UsersMenu.contextTypes = {
  messages: React.PropTypes.object
}

module.exports = UsersMenu;
export default UsersMenu;