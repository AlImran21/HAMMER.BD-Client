import React from 'react';

const Blogs = () => {
    return (
        <div className='px-20 py-20'>
            <div className=''>
                <h1 className='text-3xl mb-3'>Q1. How will you improve the performance of a React Application?</h1>
                <p className='text-xl'><span className='font-semibold'>Ans:</span> To optimize React rendering, you need to make sure that components <br /> receive only necessary props. It will let you control the CPU consumption <br /> and avoid over-rendering unnecessary features. The solution is to create <br /> a functional component that will collect all props and redistribute them <br /> to other components.</p>
            </div>
            <div className='mt-8'>
                <h1 className='text-3xl mb-3'>Q2. What are the different ways to manage a state in a React application?</h1>
                <div className='text-xl'>
                    <p className='mb-3'><span className='font-semibold'>Ans:</span> 5 Types of Application State in React and How They Help in State Management</p>
                    <p className='mb-3'>The Problem. Redux, particularly, gives the developer a single <br /> place to put all their state that seems great at first...</p>
                    <li>Data State</li>
                    <li>Control State</li>
                    <li>Session State</li>
                    <li>Location State</li>
                    <li>Conclusion</li>
                </div>
            </div>
            <div>
                <h1 className='text-3xl mb-3 mt-8'>Q3. How does prototypical inheritance work?</h1>
                <p className='text-xl'><span className='font-semibold'>Ans:</span> The Prototypal Inheritance is a feature in javascript used to add methods <br /> and properties in objects. It is a method by which an object can inherit the <br /> properties and methods of another object. Traditionally, in order to get and <br /> set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h1 className='text-3xl mb-3 mt-8'>Q4. Why should we not update the state directly?</h1>
                <p className='text-xl'><span className='font-semibold'>Ans:</span>
                    <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                    <li>When you directly update the state, it does not change this.state immediately. <br /> Instead, it creates a pending state transition, and accessing it after calling this method <br /> will only return the present value.</li>
                    <li>You will lose control of the state across all components.</li>
                </p>
            </div>
            <div>
                <h1 className='text-3xl mb-3 mt-8'>Q5.1 What is a unit test?</h1>
                <p className='text-xl'><span className='font-semibold'>Ans:</span> This is a type of testing which is done by software developers <br /> in which the smallest testable module of an application - like functions, <br /> procedures or interfaces - are tested to ascertain if they are fit to use.</p>
            </div>
            <div>
                <h1 className='text-3xl mb-3 mt-8'>Q5.2 Why should write unit tests?</h1>
                <p className='text-xl'><span className='font-semibold'>Ans:</span> Unit testing allows software developers to actually think through <br /> the design of the software and what has to be done before they write <br /> the code. This can help them to stay focused and can also help them <br /> to create much better designs.</p>
            </div>
        </div>
    );
};

export default Blogs;