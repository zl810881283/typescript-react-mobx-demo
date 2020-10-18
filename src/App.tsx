import React from 'react'
import { Filter } from './components/Filter'
import { List } from './components/List'

export class App extends React.Component<{}>{
  render() {
    return (
      <div>
        <Filter/>
        <List/>
      </div>
    )
  }
}