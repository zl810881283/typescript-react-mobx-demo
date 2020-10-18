import { observer } from 'mobx-react'
import React from 'react'
import { stores } from '../stores'

export const List: React.FC<{}> = observer((prop) =>
  <div>
    {stores.production.list.map(i =>
      <div>{i.name}</div>
    )}
  </div>
)