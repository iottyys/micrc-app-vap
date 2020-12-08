import React, {useContext} from "react";
import {RootStoreContext} from "@/containers/users";
import UserForm from '../../component/userForm'


export default () => {
  const store = useContext(RootStoreContext);
  return <UserForm id="" record={store.bind('/userSave/param/user', {}, '')}
                   change={store.userSave.change.bind(0, '/userSave/param/user/')}
                   reset={store.userSave.reset}
                   save={store.userSave.action} />
}
