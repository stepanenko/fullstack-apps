Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
Please keep in mind that selectors represent "idempotent" functions: For a given set of inputs they
should always produce the same results (at least for the lifetime of the application). This is important
as selector evaluations may be cached, restarted, or executed multiple times.
Because of this, selectors are generally a good way to model read-only DB queries.
