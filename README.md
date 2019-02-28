Assignment 2
=================

Learn You a Framework


Steps
------------

### ← Step 1

Read about a couple different frameworks or libraries. Make a note of which ones you looked. There are many websites comparing various frameworks.

### ← Step 2

Pick one framework and learn it. Read the documentation and search for examples, tutorials, videos, or other resources

### ← Step 3

Build a site/app of your own design using the framework on a Glitch. This needs to be a new site, you can’t build on top of something you already built in the previous assignment or activities. Tip: use the search function on Glitch.com to look for the name of the framework. You can usually find templates or example apps that someone else has made. You may use these as references, but make sure to document it (see more about documentation below).

### ← Step 4

Document your project. In your project’s readme.md, answer the following questions (at least 200 words per question):

1. Why you picked a particular framework.
2. What about that framework appealed to you?
3. What alternative frameworks did you consider?
4. What resources did you read/watch/listen to?
5. What kind of application did you make?

Answers of step 4
------------

### ← 1. Why you picked a particular framework.

- React makes it much easier to create user interfaces. And React enables us to code reliably and test easily. What is more, React can tranfer data better by components made from JavaScript and seperate DOM and application statement. 

- Compared with jQuery:
If use jQuery to program a complex operation, it will be much harder to maintain codes after that. There is a common characteristic of Web App nowadays which is that the Model phase of back end is simple so that the View of front end becomes much more complicated. Thus, using pure jQuery to program DOM may be not perceptual intuition. However, if we use React, it will help us to operate in a Virtual DOM and even when events happen, the state of Virtual DOM will update and then call render() to update UI instead of updating whole DOM.

- Compared with Angular:
Angular has abundant functions which may take some advantages and some disadvantages, which means that we don't have to choose third-party libraries but on the contrary, we have no choice to abandon those functions we don't need. And for the React, it has simplier functions than Angular and we can choose any third-party we need.

- Compared with Vue:
Though Vue is easy to use ,small scaler and better performance, we cannot ignore the issues when appying it to large scale applications. However, React has expansibility and it can apply to large scale applications.

### ← 2. What about that framework appealed to you?

- React provides much more flexibility and responsiveness.

- Because React is based on the document object model, it allows the browser to arrange documents in HTML, XHTML, or XML format in a friendly manner.

- React also has very rich JavaScript libraries and we can achieve many goals by those functions.

- As we discuss before, React has been proven to have much better performace for larger applications due to its flexible structure and extensibility.

- React is supported by professional Facebook developers who are constantly looking for ways to React.

- React provides the React Native platform, which develops natively rendered applications for iOS and Android through the same React component model.

- React is fast because it doesn't operate directly on the DOM, introducing a concept called the Virtual DOM, which stays between javascript logic and the actual DOM and performs well.

- Virtual DOM helps us solve cross-browser problems by providing us with standardized apis, even in IE8.

- All is component: more modular code, easier to reuse, and more maintainable.

- React has a One-way data flow. Flux is an architecture used to create one-way data layers in JavaScript applications, conceptualized by Facebook with the development of the React video gallery.

Thus, no matter what Web or native mobile development is developed, React is the ideal choice for most user interface design platforms.

### ← 3. What alternative frameworks did you consider?
- jQuery: 
Firstly, I consider jQuery as framework. And I learn from the official website of jQuery, which is that ([https://jquery.com/](https://jquery.com/)). It is said that jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. Thus, its strong JavaScript library and API make it outstanding, but it updates the whole bunches of DOM when something changes, which makes it run slower.

- Angular:
And then, I search some information about Angular. Also, I look over the official website of Angular, which is ([https://angularjs.org/](https://angularjs.org/)). AngularJS simplifies application development by presenting a higher level of abstraction to developers. As with other abstract technologies, it also sacrifices some flexibility. In other words, not all applications are suitable for Angular. Angular is primarily concerned with building CRUD applications. Fortunately, at least 90% of WEB applications are CRUD applications. But to understand what works with Angular, you need to understand what doesn't work with Angular. For example, games and graphical interface editors, which are frequent and complex DOM manipulation applications, are quite different from CRUD applications, and they are not suitable to be built with Angular. In this case, it might be better to use lighter, simpler techniques like jQuery.

- Vue: 
I also check the official website of Vue, which is ([https://cn.vuejs.org/](https://cn.vuejs.org/)). Is a progressive framework for building user interfaces. Unlike other large frameworks, Vue is designed to be applied from the bottom-up approach. Vue's core libraries focus on the view layer only, making it easy to get started and integrate with third-party libraries or existing projects. On the other hand, when used in conjunction with modern toolchains and supporting libraries, Vue is well placed to drive complex, single-page applications.

### ← 4. What resources did you read/watch/listen to?
1. [React document](https://reactjs.org/): https://reactjs.org/
- Get started

- Basic knowledge about React

2. [Vitural DOM](https://github.com/livoras/blog/issues/13): https://github.com/livoras/blog/issues/13
- Basically, Virtual DOM is a Cache between JS and DOM

- Use JS object structure to represent the structure of DOM tree and insert it in to the document

- When the state changes, rebuild a new object tree and compare the new tree and the old one

- Apply the differences recorded before to the real DOM tree and the view is updated

3. [Diff algorithm](https://react.docschina.org/docs/reconciliation.html): https://react.docschina.org/docs/reconciliation.html
- When using React, at one moment, the render() function creates a React element tree

- When the next state or props updates, the render() function will create a new React element tree

- React will compare the diffences between those two trees and only update the variation

4. [JSX](https://react.docschina.org/docs/introducing-jsx.html): https://react.docschina.org/docs/introducing-jsx.html
- JSX can avoid injection attack

5. [Element rendering](https://react.docschina.org/docs/rendering-elements.html): https://react.docschina.org/docs/rendering-elements.html
- Element is the smallest uint of React application

- Different from DOM of html, the element of React is common object and React DOM can be consistent with DOM in html

- React elements are all immutable

6. [Components & Props](https://react.docschina.org/docs/components-and-props.html): https://react.docschina.org/docs/components-and-props.html
- Components can split the UI into separate, reusable parts, so you can focus on building each individual part

- The component is conceptually a function, with the ability to receive arbitrary input values (called "Props") and return a React element to be displayed on the page.

- Component rendering: React element can be a user defined component (component names must begin with a capital letter)

- Component extracting: construct reusable components

7. [State & life circle](https://react.docschina.org/docs/state-and-lifecycle.html): https://react.docschina.org/docs/state-and-lifecycle.html
- State is private and completely controlled by the current component

- Add the lifecycle methods to the class:
Whenever the Clock component is first loaded into the DOM, we want to generate a timer, which is called a mount in React;
Similarly, whenever the clock-generated DOM is removed, we also want to clear the timer, which in React is called unmounting

- The constructor is the only place to initialize this.state, and the code does not re-render the component

8. [jQuery overview](https://jquery.com/): https://jquery.com/

9. [jQuery tutorial](http://www.w3school.com.cn/jquery/index.asp): http://www.w3school.com.cn/jquery/index.asp

10. [Angular overview](https://angularjs.org/): https://angularjs.org/

11. [Angular tutorial](https://www.w3cschool.cn/angular/): https://www.w3cschool.cn/angular/

12. [Vue overview](https://cn.vuejs.org/): https://cn.vuejs.org/

### ← 5. What kind of application did you make?

I make an application of a simple message box. Firstly, I use the [React demo](https://glitch.com/~create-react-app-sample) to 