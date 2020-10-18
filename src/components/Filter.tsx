import { observer } from 'mobx-react'
import React from 'react'
import { stores } from '../stores'

export interface FilterProps {

}
export const Filter: React.FC<FilterProps> = observer((prop: FilterProps) =>
  <div>
    <input
      onChange={(event) => stores.production.handleNameChange(event.target.value)}
      value={stores.production.name} />
  </div>
)
