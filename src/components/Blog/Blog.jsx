import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='Blog'>
            <h2>Question Answers</h2>
            <p className='Ques'>a. When should we use context API?</p>
            <p className='Ans'>These are some examples where the Context API could be utilized:<br></br>
           <b> 1. When data needs to be shared between several components:</b> The Context API can be used to maintain and offer access to data that needs to be accessed by several components in our React application, such as user login state or localization info, without manually passing it down through props.
            <br></br>
            <b>2. When components that are deeply nested need to access data:</b> Passing the data down through props at each level can be difficult if we have a component tree with numerous levels of nesting and we need to retrieve data from a component that is deeply buried. By allowing us to provide the data at a higher level in the component tree and access it directly in the deeply nested component without passing it through intermediary components, utilizing the Context API in these situations can make the process simpler.
            <br></br>
            <b>3. When numerous components from different systems need to update shared state:</b> The Context API offers a means to manage shared state and handle updates in a centralized manner when we have a state that needs to be modified by different components.
            </p>
            <hr></hr>
            <br></br>

            <p className='Ques'>b. What is a custom hook?</p>
            <p className='Ans'>The ability to encapsulate and reuse stateful functionality in functional components is made possible by the JavaScript function known as a custom hook in the React framework. With the use of reusable and composable custom hooks, behavior may be shared between components. To distinguish them from other types of code and to show that they are hooks, they all start their names with the word "use." 
            <br></br>
            The following are some features of custom hooks:<br></br>
            1. Encapsulation,
            2. Composability,
            3. Reusability,
            4. Hooks API.
            </p>
            <hr></hr>
            <br></br>

            <p className='Ques'>c. What is useRef?</p>
            <p className='Ans'>The useRef Hook allows us to persist values between renders. It provides a way to create and access a mutable reference to a value that persists across re-renders of a component. <br></br>
            Here are some significant features of useRef:<br></br>
            <b>1. Mutable reference:</b> The value contained in a useRef is mutable, which means it may be modified without causing the component to re-render. As a result, useRef is appropriate for saving values that must persist between views, such as caching DOM references or storing values that should not trigger re-renders.<br></br>

            <b>2. The application of ref.current:</b> The useRef hook method returns an object with a single property named current that contains the mutable value. The current value can be accessed and updated using ref.current. It is important to note that updating a ref's current property does not force the component to re-render.<br></br>
            
            <b>3. Helpful for gaining access to DOM elements:</b> useR ef is widely used in functional components to directly access and manipulate DOM elements. Users can establish a ref, using the ref attribute to attach it to a DOM element, and then use ref.current to directly interact with the DOM element, such as setting focus, modifying styles, or performing other imperative activities.<br></br></p>
            <hr></hr>
            <br></br>

            <p className='Ques'>d. What is useMemo?</p>
            <p className='Ans'>React's useMemo hook enables us to memoize the result of a computation and memoize the value so that it is only recomputed when its dependencies update. It assists in performance optimization by minimizing unwanted computations in functional components.React's useMemo hook enables us to memoize the result of a computation and memoize the value so that it is only recomputed when its dependencies update. It assists in performance optimization by minimizing unwanted computations in functional components.<br></br>
            Following are some of the most important features of useMemo:<br></br>
            <b>1. Use for memorization Memoizes:</b> A computation's result so that it is only recomputed when its dependencies change. This can help optimize performance by minimizing needless computations, especially for expensive or regularly performed processes or calculations.<br></br>
            <b>2. Use of a dependency array:</b> A useMemo accepts a dependency array as the second input, which specifies the dependencies that cause the memoized value to be recalculated. If any of the array's dependencies change, the memoized value will be recalculated. If the dependency array is not present, the memoized value will be computed only once, during the initial render.<br></br>
            <b>3. Computed value:</b> The computed value that we want to memoize should be returned by the computation function supplied to useMemo. This value will be returned by useMemo and can be used as needed throughout the component.<br></br>
            </p>
            <hr></hr>
            <br></br>
        </div>
    );
};

export default Blog;