import React, {FC} from 'react';
import './Hello.pcss';
import {proxy, useSnapshot} from 'valtio';

class Store {
  user: string = 'aaa';

  get upperUser(): string {
    return this.user.toUpperCase();
  }

  changeName(value: string) {
    this.user = value
  }
}

const store = proxy<Store>(new Store());

function hello(): string {
  return `Hello, ${store.upperUser}`;
}

export const Hello: FC = () => {
  const {user} = useSnapshot(store);

  return <div className={'Hello'}>
    <input type={'text'} value={user} onChange={event => store.changeName(event.target.value)}/>
    <div>{hello()}</div>
  </div>;
}
