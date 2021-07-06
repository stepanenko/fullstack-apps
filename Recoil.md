### [Atoms](https://recoiljs.org/docs/api-reference/core/atom)
An atom represents state in Recoil. The `atom()` function returns a writeable `RecoilState` object.

Recoil manages atom state changes to know when to notify components subscribing to that atom to re-render,
so you should use the hooks listed below to change atom state. If an object stored in an atom was mutated directly
it may bypass this and cause state changes without properly notifying subscribing components.
To help detect bugs Recoil will freeze objects stored in atoms in development mode.

Most often, you'll use the following hooks to interact with atoms:

- `useRecoilState()`: Use this hook when you intend on both reading and writing to the atom. This hook subscribes the component to the atom.
- `useRecoilValue()`: Use this hook when you intend on only reading the atom. This hook subscribes the component to the atom.
- `useSetRecoilState()`: Use this hook when you intend on only writing to the atom.
- `useResetRecoilState()`: Use this hook to reset an atom to its default value.
- `useRecoilCallback()`: For rare cases where you need to read an atom's value without subscribing the component

You can initialize an atom either with a static value or with a `Promise` or a `RecoilValue` representing a value of the same type.
Because the `Promise` may be pending or the default selector may be asynchronous it means that the atom value may also be pending or throw an error when reading.
Note that you cannot currently assign a `Promise` when setting an atom. Please **use selectors for async functions**.

Atoms cannot be used to store `Promise`'s or `RecoilValue`'s directly, but they may be wrapped in an object.
Note that Promise's may be mutable. Atoms can be set to a `function`, as long as it is pure, but to do so
you may need to use the updater form of setters. (e.g. `set(myAtom, () => myFunc);`).

### [Selectors](https://recoiljs.org/docs/api-reference/core/selector)
A **selector** represents a piece of **derived state**. You can think of derived state as the output
of passing state to a pure function that modifies the given state in some way.

Derived state is a powerful concept because it lets us build dynamic data that depends on other data.

Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
Please keep in mind that selectors represent "idempotent" functions: For a given set of inputs they
should always produce the same results (at least for the lifetime of the application). This is important
as selector evaluations may be cached, restarted, or executed multiple times.
Because of this, selectors are generally a good way to model read-only DB queries.

From a component's point of view, **selectors** can be read using the same hooks that are used to read atoms.
However it's important to note that certain hooks only work with **writable state** (i.e `useRecoilState()`).
All atoms are writable state, but only some selectors are considered writable state (selectors that have both a `get` and `set` property).

Selectors represent a function, or **derived state** in Recoil. You can think of them as similar to
an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.
If only a `get` function is provided, the selector is read-only and returns a `RecoilValueReadOnly` object.
If a `set` is also provided, it returns a writeable `RecoilState` object.

Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.
If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.
To help detect bugs, Recoil will freeze selector value objects in development mode.

### [Asynchronous Data Queries](https://recoiljs.org/docs/guides/asynchronous-data-queries)

Recoil can map state and **derived state** to React components via a data-flow graph. The functions in the graph can also be asynchronous.
So we can use asynchronous functions in synchronous React component render functions.
Recoil allows you to mix synchronous and asynchronous functions in your data-flow graph of **selectors**.
Simply return a Promise to a value instead of the value itself from a **selector** get callback, the interface remains exactly the same.
Because these are just **selectors**, other **selectors** can also depend on them to further transform the data.

Todo:
- check and add sync and async examples from https://recoiljs.org/docs/guides/asynchronous-data-queries/
- explore selectors more: https://recoiljs.org/docs/api-reference/core/selector/
