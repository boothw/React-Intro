import React from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
    {
        title: 'Red',
        content: 'One'
    },
    {
        title: 'Blue',
        content: 'Two'
    },
    {
        title: 'Green',
        content: 'Three'
    }
]

export default () => {
    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}