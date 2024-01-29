Github Pages: [Github Pages](https://lynne2002.github.io/)

1. **What is NPM?**
   NPM is Node Package Manager. It is the default package manager for the runtime Node.js
2. **What is SPA?**
   SPA is Single Page Application. It loads only a single document overwriting an existing one with new data
3. **What is the event loop?**
   It is the callback queue or a queue of callback functions in JavaScript.
4. **What is the difference between export x and export default x? How do you import them differently?**
   Export x means you export several values as it is a named export, while export default x means you export a single value or have a fallback value.

   _How to import them differently:_
   For export x use  curly braces {} 
   for export default x, curly braces are not used. A name can be used.
5. **Why do you use className as a property in React and not class?**
   class is a keyword in JavaScript
6. **Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button>**
Because the onClick expects a function call only, and in the above code it is the result of a function call, the component will re render therefore having an infinite loop of renders

7.**What is object deconstruction and how is it connected to React components (example)?**
   Object deconstruction is the process of extracting values from objects and assigning them to variables.
      e.g. let person = {
       name: 'Lynne',
       home: 'Nairobi'

   };
  
  destructuring:
let { name: firstname, home: place_of_birth } = person; 
9. **How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?**
   Becaause of JSX, which is having HTML within JS. It is HTML but under the hood, it is a JavaScript function
10. **What is async/await? Bring an example**
    async means a function always returns a promise, while await makes JavaScript wait until that promise settles and returns its result.
         async function a() {
            return 0;
            }

f().then(alert);
    
11.** What is a Promise? Bring an example**
    A Promise is an object that runs and promises a fulfillment of something/results, rejection or a return of something
    For example:
    
>>    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve("foo");
      }, 300);
});
