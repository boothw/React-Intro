import React from 'react';
import Accordion from './Accordion'
import Search from './Search'

const items = [
    {
        title: 'Number one',
        content: 'First item'
    },
    {
        title: 'Number two',
        content: 'Second item'
    },
    {
        title: 'Number three',
        content: 'Third item'
    }
]

export default () => {
    return (
        <div className="ui container">
            <Search />
        </div>
    )
}