### Selectors
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

### Asynchronous Data Queries

Recoil can map state and **derived state** to React components via a data-flow graph. The functions in the graph can also be asynchronous.
So we can use asynchronous functions in synchronous React component render functions.
Recoil allows you to mix synchronous and asynchronous functions in your data-flow graph of **selectors**.
Simply return a Promise to a value instead of the value itself from a **selector** get callback, the interface remains exactly the same.
Because these are just **selectors**, other **selectors** can also depend on them to further transform the data.
