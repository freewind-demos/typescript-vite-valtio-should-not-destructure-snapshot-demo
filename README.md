TypeScript Vite Valtio Should NOT De-Structure Demo
=====================================

`const {hello} = useSnapshot(store);` 这种解构的写法，可能会让valtio的proxy工作不正常，在某些情况下不能及时更新而报错。

应该始终写成 `const snap = useSnapshot(store); snap.hello()`的形式

```
npm install
npm start
```

It will open page on browser automatically.
