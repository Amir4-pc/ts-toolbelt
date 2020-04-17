import {_Omit} from './Omit'
import {_Pick} from './Pick'
import {Key} from '../Any/Key'
import {Compute} from '../Any/Compute'
import {OptionalFlat} from './Optional'
import {Keys} from './Keys'
import {RequiredFlat} from './Required'

/**
@hidden
*/
type __AtLeast<O extends object, K extends Key> =
    K extends keyof O               // if we can operate on it
    ? _Pick<O, K> & OptionalFlat<O> // take entry & make rest optional
    : O

/**
@hidden
*/
type _AtLeast<O extends object, K extends Key> =
    Compute<__AtLeast<RequiredFlat<O>, K>>

/**
Make that at least one of the keys **`K`** are required in **`O`** at a time.
@param O to make required
@param K (?=`keyof O`) to choose fields
@returns [[Object]] [[Union]]
@example
```ts
```
*/
export type AtLeast<O extends object, K extends Key = Keys<O>> =
    O extends unknown
    ? _AtLeast<O, K>
    : never
