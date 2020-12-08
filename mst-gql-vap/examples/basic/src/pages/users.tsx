import React from 'react';

import RootContainer from '../containers/users';
import UserForm from '../connector/users/saveform'
import UserTable from '../connector/users/table'


export default () => <RootContainer>
  <h1>Users:</h1>
  <hr />
  <UserForm />
  <hr />
  <UserTable />
</RootContainer>
