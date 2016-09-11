initSidebarItems({"fn":[["pool","Produces a `PoolBuilder` instance"]],"mod":[["settings",""]],"struct":[["Pool","A collection of values that can be reused without requiring new allocations."],["PoolBuilder","Used to define settings for and ultimately create a `Pool`."],["RcRecycled","A smartpointer which uses reference counting (`Rc`) to know when to move its wrapped value back to the `Pool` that issued it."],["Recycled","A smartpointer which uses a shared reference (`&`) to know when to move its wrapped value back to the `Pool` that issued it."]],"trait":[["InitializeWith","Informs how an already allocated value should be initialized when provided with a model value or other meaningful input."],["Recycleable","In order to be managed by a `Pool`, values must be of a type that implements the `Recycleable` trait. This allows the `Pool` to create new instances as well as reset existing instances to a like-new state."],["Supply","Provides a method which will produce new instances of a type"]]});