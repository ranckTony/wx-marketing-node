express路由载入的两种写法


1. 在appjs中 

```js
app.use("/api", require("./xxx"))
```

2. 

```js
const router = express.Router()
app.use("/api", routerFn(router))
```


怎么使用公共前缀呢？