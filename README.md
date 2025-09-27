What is JSX, and why do we use it?
Think of JSX as a way to write HTML inside JavaScript. Instead of juggling between two separate files (HTML and JS), React lets you mix them together so your UI code lives right inside your logic.
Example:
const greeting = <h1>Hello, React!</h1>;
That looks like HTML, right? But under the hood, React turns it into JavaScript. This makes it easier to build components and visualize what your UI will look like.


State vs Props – What’s the difference?
Both state and props hold data, but they’re used differently:
State is like a component’s personal memory. It can change over time.
Props are like arguments you pass into a function. They’re read-only and come from a parent component.
In short: State belongs to the component; props are gifts from outside.


What is the useState hook?
React gives us a handy tool called useState to let components remember things.
Example:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
};
Here:
count is the current value.
setCount is how we update it.
Every time we update, the component refreshes itself with the new value.


How do we share state between components?
Sometimes, two or more components need to use the same piece of information. There are a few ways to do that:
Lift state up – Put the state in their parent component and pass it down as props.
Context API – Create a global store of data that any component can grab from (like a shared backpack).
State libraries (Redux, Zustand, etc.) – Useful when your app gets big and state management becomes messy.
Event Handling in React
Handling events (like clicks, input changes, etc.) in React is straightforward:
Use camelCase (onClick, onChange, etc.).
Pass a function, not a string.
Example:
function Button() {
  const sayHello = () => alert("Hello!");
  return <button onClick={sayHello}>Click Me</button>;
}