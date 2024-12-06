https://github.com/reduxjs/redux.git

//actions.ts

/**
 * An *action* is a plain object that represents an intention to change the
 * state. Actions are the only way to get data into the store. Any data,
 * whether from UI events, network callbacks, or other sources such as
 * WebSockets needs to eventually be dispatched as actions.
 *
 * Actions must have a `type` field that indicates the type of action being
 * performed. Types can be defined as constants and imported from another
 * module. These must be strings, as strings are serializable.
 *
 * Other than `type`, the structure of an action object is really up to you.
 * If you're interested, check out Flux Standard Action for recommendations on
 * how actions should be constructed.
 *
 * @template T the type of the action's `type` tag.
 */
// this needs to be a type, not an interface
// https://github.com/microsoft/TypeScript/issues/15300
export type Action<T extends string = string> = {
  type: T
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface UnknownAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: unknown
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 * @deprecated use Action or UnknownAction instead
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

/* action creators */

/**
 * An *action creator* is, quite simply, a function that creates an action. Do
 * not confuse the two terms—again, an action is a payload of information, and
 * an action creator is a factory that creates an action.
 *
 * Calling an action creator only produces an action, but does not dispatch
 * it. You need to call the store's `dispatch` function to actually cause the
 * mutation. Sometimes we say *bound action creators* to mean functions that
 * call an action creator and immediately dispatch its result to a specific
 * store instance.
 *
 * If an action creator needs to read the current state, perform an API call,
 * or cause a side effect, like a routing transition, it should return an
 * async action instead of an action.
 *
 * @template A Returned action type.
 */
export interface ActionCreator<A, P extends any[] = any[]> {
  (...args: P): A
}

/**
 * Object whose values are action creator functions.
 */
export interface ActionCreatorsMapObject<A = any, P extends any[] = any[]> {
  [key: string]: ActionCreator<A, P>
}


//middleware.ts

import type { Dispatch } from './store'

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState: () => S
}

// middleware
/**
 * A middleware is a higher-order function that composes a dispatch function
 * to return a new dispatch function. It often turns async actions into
 * actions.
 *
 * Middleware is composable using function composition. It is useful for
 * logging actions, performing side effects like routing, or turning an
 * asynchronous API call into a series of synchronous actions.
 *
 * @template DispatchExt Extra Dispatch signature added by this middleware.
 * @template S The type of the state supported by this middleware.
 * @template D The type of Dispatch of the store where this middleware is
 *   installed.
 */
export interface Middleware<
  _DispatchExt = {}, // TODO: see if this can be used in type definition somehow (can't be removed, as is used to get final dispatch type)
  S = any,
  D extends Dispatch = Dispatch
> {
  (
    api: MiddlewareAPI<D, S>
  ): (next: (action: unknown) => unknown) => (action: unknown) => unknown
}

//reducer.ts

import type { Action, UnknownAction } from './actions'

/* reducers */

/**
 * A *reducer* is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S The type of state consumed and produced by this reducer.
 * @template A The type of actions the reducer can potentially respond to.
 * @template PreloadedState The type of state consumed by this reducer the first time it's called.
 */
export type Reducer<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = (state: S | PreloadedState | undefined, action: A) => S

/**
 * Object whose values correspond to different reducer functions.
 *
 * @template S The combined state of the reducers.
 * @template A The type of actions the reducers can potentially respond to.
 * @template PreloadedState The combined preloaded state of the reducers.
 */
export type ReducersMapObject<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = keyof PreloadedState extends keyof S
  ? {
      [K in keyof S]: Reducer<
        S[K],
        A,
        K extends keyof PreloadedState ? PreloadedState[K] : never
      >
    }
  : never

/**
 * Infer a combined state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type StateFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? {
      [P in keyof M]: M[P] extends Reducer<infer S, any, any> ? S : never
    }
  : never

/**
 * Infer reducer union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ReducerFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? M[keyof M]
  : never

/**
 * Infer action type from a reducer function.
 *
 * @template R Type of reducer.
 */
export type ActionFromReducer<R> =
  R extends Reducer<any, infer A, any> ? A : never

/**
 * Infer action union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ActionFromReducersMapObject<M> = ActionFromReducer<
  ReducerFromReducersMapObject<M>
>

/**
 * Infer a combined preloaded state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type PreloadedStateShapeFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? {
      [P in keyof M]: M[P] extends (
        inputState: infer InputState,
        action: UnknownAction
      ) => any
        ? InputState
        : never
    }
  : never

  //store.ts

  import type { Action, UnknownAction } from './actions'
import type { Reducer } from './reducers'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _$$observable from '../utils/symbol-observable'

/**
 * A *dispatching function* (or simply *dispatch function*) is a function that
 * accepts an action or an async action; it then may or may not dispatch one
 * or more actions to the store.
 *
 * We must distinguish between dispatching functions in general and the base
 * `dispatch` function provided by the store instance without any middleware.
 *
 * The base dispatch function *always* synchronously sends an action to the
 * store's reducer, along with the previous state returned by the store, to
 * calculate a new state. It expects actions to be plain objects ready to be
 * consumed by the reducer.
 *
 * Middleware wraps the base dispatch function. It allows the dispatch
 * function to handle async actions in addition to actions. Middleware may
 * transform, delay, ignore, or otherwise interpret actions or async actions
 * before passing them to the next middleware.
 *
 * @template A The type of things (actions or otherwise) which may be
 *   dispatched.
 */
export interface Dispatch<A extends Action = UnknownAction> {
  <T extends A>(action: T, ...extraArgs: any[]): T
}

/**
 * Function to remove listener added by `Store.subscribe()`.
 */
export interface Unsubscribe {
  (): void
}

export type ListenerCallback = () => void

declare global {
  interface SymbolConstructor {
    readonly observable: symbol
  }
}

/**
 * A minimal observable of state changes.
 * For more information, see the observable proposal:
 * https://github.com/tc39/proposal-observable
 */
export type Observable<T> = {
  /**
   * The minimal observable subscription method.
   * @param {Object} observer Any object that can be used as an observer.
   * The observer object should have a `next` method.
   * @returns {subscription} An object with an `unsubscribe` method that can
   * be used to unsubscribe the observable from the store, and prevent further
   * emission of values from the observable.
   */
  subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
  [Symbol.observable](): Observable<T>
}

/**
 * An Observer is used to receive data from an Observable, and is supplied as
 * an argument to subscribe.
 */
export type Observer<T> = {
  next?(value: T): void
}

//store
/**
 * A store is an object that holds the application's state tree.
 * There should only be a single store in a Redux app, as the composition
 * happens on the reducer level.
 *
 * @template S The type of state held by this store.
 * @template A the type of actions which may be dispatched by this store.
 * @template StateExt any extension to state from store enhancers
 */
export interface Store<
  S = any,
  A extends Action = UnknownAction,
  StateExt extends unknown = unknown
> {
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will be
   * considered the **next** state of the tree, and the change listeners will
   * be notified.
   *
   * The base implementation only supports plain object actions. If you want
   * to dispatch a Promise, an Observable, a thunk, or something else, you
   * need to wrap your store creating function into the corresponding
   * middleware. For example, see the documentation for the `redux-thunk`
   * package. Even the middleware will eventually dispatch plain object
   * actions using this method.
   *
   * @param action A plain object representing “what changed”. It is a good
   *   idea to keep actions serializable so you can record and replay user
   *   sessions, or use the time travelling `redux-devtools`. An action must
   *   have a `type` property which may not be `undefined`. It is a good idea
   *   to use string constants for action types.
   *
   * @returns For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  dispatch: Dispatch<A>

  /**
   * Reads the state tree managed by the store.
   *
   * @returns The current state tree of your application.
   */
  getState(): S & StateExt

  /**
   * Adds a change listener. It will be called any time an action is
   * dispatched, and some part of the state tree may potentially have changed.
   * You may then call `getState()` to read the current state tree inside the
   * callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked,
   * this will not have any effect on the `dispatch()` that is currently in
   * progress. However, the next `dispatch()` call, whether nested or not,
   * will use a more recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all states changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param listener A callback to be invoked on every dispatch.
   * @returns A function to remove this change listener.
   */
  subscribe(listener: ListenerCallback): Unsubscribe

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param nextReducer The reducer for the store to use instead.
   */
  replaceReducer(nextReducer: Reducer<S, A>): void

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  [Symbol.observable](): Observable<S & StateExt>
}

export type UnknownIfNonSpecific<T> = {} extends T ? unknown : T

/**
 * A store creator is a function that creates a Redux store. Like with
 * dispatching function, we must distinguish the base store creator,
 * `createStore(reducer, preloadedState)` exported from the Redux package, from
 * store creators that are returned from the store enhancers.
 *
 * @template S The type of state to be held by the store.
 * @template A The type of actions which may be dispatched.
 * @template PreloadedState The initial state that is passed into the reducer.
 * @template Ext Store extension that is mixed in to the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export interface StoreCreator {
  <S, A extends Action, Ext extends {} = {}, StateExt extends {} = {}>(
    reducer: Reducer<S, A>,
    enhancer?: StoreEnhancer<Ext, StateExt>
  ): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext
  <
    S,
    A extends Action,
    Ext extends {} = {},
    StateExt extends {} = {},
    PreloadedState = S
  >(
    reducer: Reducer<S, A, PreloadedState>,
    preloadedState?: PreloadedState | undefined,
    enhancer?: StoreEnhancer<Ext>
  ): Store<S, A, UnknownIfNonSpecific<StateExt>> & Ext
}

/**
 * A store enhancer is a higher-order function that composes a store creator
 * to return a new, enhanced store creator. This is similar to middleware in
 * that it allows you to alter the store interface in a composable way.
 *
 * Store enhancers are much the same concept as higher-order components in
 * React, which are also occasionally called “component enhancers”.
 *
 * Because a store is not an instance, but rather a plain-object collection of
 * functions, copies can be easily created and modified without mutating the
 * original store. There is an example in `compose` documentation
 * demonstrating that.
 *
 * Most likely you'll never write a store enhancer, but you may use the one
 * provided by the developer tools. It is what makes time travel possible
 * without the app being aware it is happening. Amusingly, the Redux
 * middleware implementation is itself a store enhancer.
 *
 * @template Ext Store extension that is mixed into the Store type.
 * @template StateExt State extension that is mixed into the state type.
 */
export type StoreEnhancer<Ext extends {} = {}, StateExt extends {} = {}> = <
  NextExt extends {},
  NextStateExt extends {}
>(
  next: StoreEnhancerStoreCreator<NextExt, NextStateExt>
) => StoreEnhancerStoreCreator<NextExt & Ext, NextStateExt & StateExt>
export type StoreEnhancerStoreCreator<
  Ext extends {} = {},
  StateExt extends {} = {}
> = <S, A extends Action, PreloadedState>(
  reducer: Reducer<S, A, PreloadedState>,
  preloadedState?: PreloadedState | undefined
) => Store<S, A, StateExt> & Ext


# redux Projects

give me 50 important redux small concept projects names using for redux understand

Here’s a comprehensive list of 50 Redux project ideas that range from beginner-friendly to intermediate-level, aimed at helping you understand Redux concepts in various scenarios:

1–10: Beginner-Level Projects

1. Counter App – Basic increment, decrement, and reset functionality.
2. Todo List – Add, edit, delete, and toggle tasks.
3. Theme Switcher – Toggle light and dark themes.
4. Shopping Cart – Manage product addition, removal, and quantities.
5. User Authentication – Login and logout with user state management.
6. Notes App – Create, edit, and delete notes.
7. Product Filter – Filter products by categories, price, or ratings.
8. Favorite Movies/Books – Save and remove favorites from a list.
9. Language Switcher – Toggle app language using Redux state.
10. Expense Tracker – Add, view, and remove expenses with a total.
----------------------------------------- * ------------------------------------------------------- 

11–20: Data-Fetching & Async Thunks

11. Weather Dashboard – Fetch and display weather data.
12. News App – Fetch and categorize news articles.
13. GitHub Repos Viewer – Fetch and display repositories from GitHub.
14. Quiz App – Fetch questions and store user answers.
15. Reddit Viewer – Fetch and display posts from Reddit.
16. Currency Converter – Fetch live exchange rates and calculate conversions.
17. Movie Finder – Fetch movies from an API and save favorites.
18. E-Commerce Dashboard – Fetch and manage product data.
19. Stock Tracker – Fetch and display stock prices in real-time.
20. Crypto Prices – Display live cryptocurrency prices and trends.
----------------------------------------- * ------------------------------------------------------- 


21–30: UI State Management

21. Modal Manager – Show and hide multiple modals using Redux.
22. Tab Navigation – Manage active tabs and their content.
23. Dropdown Menu – Handle dropdown open/close state.
24. Stepper Form – Manage state across multiple form steps.
25. Pagination – Manage page numbers and displayed data.
26. Notification System – Add, read, and remove notifications.
27. Profile Settings – Update and persist user settings.
28. Sidebar Toggle – Expand and collapse a sidebar.
29. Multi-Theme App – Add multiple themes and toggle between them.
30. Search Suggestions – Display and manage search suggestions.
----------------------------------------- * ------------------------------------------------------- 

31–40: CRUD & Advanced State

31. Contact Manager – Add, edit, and delete contacts.
32. Bookmark Manager – Save and organize bookmarks.
33. Playlist Creator – Create and manage playlists.
34. Recipe Manager – Add, edit, and delete recipes.
35. Inventory Tracker – Add and remove items with stock updates.
36. Budget Planner – Plan budgets and track expenses by category.
37. Order History – Store and display past orders.
38. Delivery Tracker – Track orders by status (Pending, Shipped, Delivered).
39. Message Inbox – Manage messages with read/unread states.
40. Task Timer – Start, stop, and reset timers for tasks.
----------------------------------------- * ------------------------------------------------------- 

41–50: Real-World Scenarios

41. Social Media Feed – Fetch and display user posts with likes and comments.
42. Poll Creator – Create polls and display live results.
43. Job Listings – Filter jobs by category and location.
44. Online Exam System – Manage user answers and track scores.
45. Calendar App – Add and delete events by date.
46. File Manager – Upload, delete, and organize files.
47. Appointment Scheduler – Schedule, update, and cancel appointments.
48. Cart Checkout – Manage cart state and proceed to checkout.
49. Wishlist – Save and remove items in a wishlist.
50. Live Chat – Manage messages and users in real-time.
----------------------------------------- * ------------------------------------------------------- 

How to Use These Ideas:--
Start Simple: Begin with projects like Counter App or Todo List to learn the basics of Redux.

Incorporate Async Logic: Use projects like Weather Dashboard or News App to practice redux-thunk or redux-saga.

Focus on UI State: Projects like Modal Manager or Pagination teach you how to update UI based on Redux state.

Expand Gradually: Move to more complex projects like E-Commerce Dashboard or Social Media Feed to handle advanced Redux patterns.

Working through these projects will solidify your Redux knowledge and give you practical experience to tackle real-world applications.