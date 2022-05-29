import React from 'react';
import './App.css';
import { ChildOne } from './components/Optimization/ChildOne';
import { OptimizedParentOne } from './components/Optimization/OptimizedParentOne';
import { ParentOne } from './components/Optimization/ParentOne';
import { ParentThree } from './components/Optimization/ParentThree';
import { ParentTwo } from './components/Optimization/ParentTwo';
import { Parent } from './components/ParentChild/Parent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <hr />
      <Parent />
      <hr />
      <ParentOne />
      <OptimizedParentOne>
        <ChildOne />
      </OptimizedParentOne>
      <hr />
      Parent Two
      <ParentTwo />
      <hr />
      Parent Three
      <ParentThree />
    </div>
  );
}

export default App;
