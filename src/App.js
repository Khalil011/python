import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import './components/Styling.css';

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];
const items = [
    {
      title: 'What is react?',
      content: 'React is front end javascript framework' 
    },
    {
        title: 'Why use react?',
        content: 'React is favorite javascript framework among engineers'
    },
    {
        title: 'How do we use react?',
        content: 'You use react by creating components' 
      }
];

/*const showAccordion = () =>{
    if (window.location.pathname === '/'){
        return (<Accordion items={items}/>);
    };
};
const showList = () =>{
    if (window.location.pathname === '/list'){
        return (<Search/>);
    };
};
const showDropdown = () =>{
    if (window.location.pathname === '/dropdown'){
        return (<Dropdown options={options}/>);
    };
};
const showTranslate = () =>{
    if (window.location.pathname === '/translate'){
        return (<Translate/>);
    };
};*/


export default () =>{
    const [selected , setSelected] = useState(options[0]);
   
    return (
        <div className="parent">
            <Header/>
          <Route path="/">
            <Accordion items={items}/>
          </Route>
          <Route path='/list'>
            <Search/>
          </Route>
          <Route path='/dropdown'>
            <Dropdown 
            label="select a color"
            selected={selected}
            onSelectedChange={setSelected}
            options={options}/>
          </Route>
          <Route path='/translate'>
            <Translate/>
          </Route>  
        </div>
    );
};
