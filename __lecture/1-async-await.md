# 3.6.1 - Async / Await

---

<blockquote>
    Async/Await is a long anticipated JavaScript feature that makes working with asynchronous functions much more _enjoyable_ and _easier to understand_.
    - It is built on top of Promises
    - is compatible with all existing Promise-based APIs.
</blockquote>

---
async functions block the reading of the code compared to promise.then which reads everything while waiting

```js
const newPauseFunction = (sec) => {
    return new Promise(function(resolve) {
        console.log(`${sec}s pause`);
        setTimeout(() => resolve(sec * 2), sec * 1000);
    });
}

newPauseFunction(1)
    .then(() => newPauseFunction(2))
    .then(() => newPauseFunction(3))
    .then(() => newPauseFunction(3))
    .then(data => console.log(data));

const doIt = async () => {
    let data = await newPauseFunction(1);
    data = await newPauseFunction(data);
    data = await newPauseFunction(data);
    await newPauseFunction(data);
    console.log('no more "awaits"')
}
doIt()
```

_let's convert it to async/await_

---

### Exercise

Convert the following to async/await

```js
transformText = async (str) =>{
    let str = await (str) => allCaps(str))
    str = await trimFirst(str))
    str = await trimLast(str))
    str = await replaceWithX(str))
    str = await console.log(str);
    })
    .catch((err) => console.log(err));


```

---

## Error Handling

As much as possible, you should wrap your `await`(s) inside of a `try/catch` block.

### Example

```js
const asyncPause = async () => {
    try {
        console.log('Go');
        await newPauseFunction(1);
        await newPauseFunction(2);
        await newPauseFunction(3);
        await newPauseFunction(3);
        console.log('Stop');
    } catch (err) { console.log(err) }
}
asyncPause();
```

---