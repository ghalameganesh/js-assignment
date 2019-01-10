Copying [my dry run from slack](https://teamclairvoyant.slack.com/archives/GE2FJ7ZH6/p1543547156000300), which was thought there, initial thinking was it will produce below output:
```javascript
response: { name: "Clairvoyant", location: "Pune", id: "1" }
response : ["clairvoyantUser1", "clairvoyantUser2", "clairvoyantUser3", "clairvoyantUser4", "clairvoyantUser5" ]
final user list: {value: ["clairvoyantUser1", "clairvoyantUser2", "clairvoyantUser3", "clairvoyantUser4", "clairvoyantUser5" ], done:true}
outerYield: {value: undefined, done:true} 
````
Then later I spend some time on understanding previous example, and some raw understanding as below:
1. We can write `*` at the  beginning of the function name or may be at the end of the `function` keyword i.e `function* printUserDetails()` or `function *printUserDetails` it doesnt matter correct me if I am wrong
2. We always call `next`  after completion of `yield` call but in the last example we are calling the `next` before completion of first `yield`i.e our `yield` started on 24 is not yet completed and we called `next` on line number 16. So my understanding is it works as linked list, so whenever it completes `yield` it stores address and use that address for `next` as of linked list, Now whats happening there as our first `yield` is not yet completed we don't know what to execute next ( Because we have not yet completed first `yield` and it dont have that address for doing next ) so it will throw some error with  `done:false` after printing first response, so my understanding is final output will be:
```javascript
response: { name: "Clairvoyant", location: "Pune", id: "1" }
some error `done:false`
```

```javascript
outerYield: {"value":{},"done":false}
response: { name: "Clairvoyant", location: "Pune", id: "1" }
response : ["clairvoyantUser1", "clairvoyantUser2", "clairvoyantUser3", "clairvoyantUser4", "clairvoyantUser5" ]
final user list: {value: ["clairvoyantUser1", "clairvoyantUser2", "clairvoyantUser3", "clairvoyantUser4", "clairvoyantUser5" ], done:true}
```