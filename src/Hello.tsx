import React, {FC} from 'react';
import './Hello.pcss';
import {proxy, useSnapshot} from 'valtio';

class Store {
  user: string | undefined = undefined;

  hello(): string {
    return `Hello, ${this.user}`;
  }

  changeName(value: string) {
    this.user = value
  }
}

const store = proxy<Store>(new Store());


export const Hello: FC = () => {
  // Uncaught TypeError: Cannot read properties of undefined (reading 'user')
  const snap = useSnapshot(store);
  const {hello} = snap;

  return <div className={'Hello'}>
    <input type={'text'} defaultValue={''} onChange={event => store.changeName(event.target.value)}/>
    <ul>
      <li>snap.hello(): {snap.hello()}</li>
      <li>hello: {(() => {
        try {
          hello()
        } catch (error) {
          return (error as Error).message;
        }
      })()}</li>
    </ul>
  </div>;
}
