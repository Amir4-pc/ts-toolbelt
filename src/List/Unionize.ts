import {Key} from '../Any/Key'
import {Unionize as OUnionize} from '../Object/Unionize'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {NumberOf} from '../Any/_Internal'

/**
Make the fields of **`L`** union the ones of **`L1`**
@param L to union from
@param L1 to union with
@param K (?=`any`) to do choose fields
@returns [[List]]
@example
```ts
```
*/
export type Unionize<L extends List, L1 extends List, K extends Key = any> =
    Cast<OUnionize<L, L1, NumberOf<K>>, List>
