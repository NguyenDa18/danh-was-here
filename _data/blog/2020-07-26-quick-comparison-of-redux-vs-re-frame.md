---
template: BlogPost
path: /quick-redux-vs-reframe
date: 2020-07-26T22:59:44.293Z
title: Quick Example of Reagent + Re-Frame to React + Redux
metaDescription: >-
  redux, re-frame, clojure, clojurescript, cljs, react-redux, tutorial,
  comparison, javascript, timer, color
thumbnail: https://res.cloudinary.com/dnguyen/image/upload/v1595807209/blog/reframe-redux/redux-reframe_vln1sh.jpg
tags: ["Tech Help", "Tutorials", "JavaScript", "Clojure"]
---
# Re-Frame example in React+Redux
* Core image from [DeviantArt](https://www.deviantart.com/ameij/art/Arm-wrestling-167001658)
* Blog image made with [Pixlr](https://pixlr.com/x/)
* prerequisite: React + Redux are JavaScript libraries used to build UI and state management for SPA apps. Reagent + Re-Frame are their cousins in ClojureScript town.

---
> **"Is the learning curve for Redux steeper than Re-Frame?"**

A coworker admitted to me recently that he thought there is a higher learning curve for React + Redux compared with Reagent + Re-Frame. My first exposure to a state management library was React + Redux during my internship and then with my senior capstone project, and that allowed me to quickly change gears to using Clojure at my workplace. I have to admit, I was a little sour about not being able to use JavaScript to contribute to the team's Clojure codebase at first, and was prepping myself for the Clojure learning grind. But when I got to the parts of the codebase using Re-Frame I saw a familiar face: it was good 'ol Redux in a different outfit, maybe something with chainmail because of the parentheses used.

In this example I will be making a React + Redux app based off of a ClojureScript example that used Reagent and Re-Frame. It was the first example I learned from when practicing ClojureScript. This app will allow you to change the color of a HH:MM:SS clock being updated every second like the ClojureScript demo.

Now with Facebook's recent update of Redux with the Redux Toolkit, the similarities between Re-Frame and Redux are clearer to see than ever.

---

[Reagent + Re-Frame demo referenced](https://blog.klipse.tech/clojure/2019/02/17/reframe-tutorial.html)

We'll start by creating a template app based off of the essential create-react-app. This bundles Redux Toolkit and we will be using the shiny up to date new stuff (as of now) for this tutorial:
- `npx create-react-app timer-demo --template redux`

When you run `npm start` you will see the demo application used in the template: a simple counter and looking through it is all you need to start writing your own piece based off the example app.

![Starter App](https://res.cloudinary.com/dnguyen/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1595808346/blog/reframe-redux/redux-counter_ohs24j.png)

# Let's get started.

### Here are some things to take note if you have experience with Re-Frame:
- A selector behaves the same way as a sub in Re-Frame.
- A dispatch emits actions that are the same as events in Re-Frame.
- The store is the same as a db in Re-Frame.
- The configureStore function is the same as the initialize-db event in Re-Frame. The extra touch is the parameters are all the reducers we use.

## Creating our Feature + Slice
1. Create a feature for color state (we are following the way the template created a feature for the counter). This will contain all the state we are using for this example: the color of our clock and the time shown on the clock.
- add a new feature by creating a new folder and naming it `color`
- add 3 files to it
    - Clock.jsx
    - ColorInput.jsx
    - colorSlice.js

2. Add our Redux stuff in colorSlice.js
- Create our slice: this includes the label of our slice, initialState, and our reducers
```js
export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        time: new Date().toTimeString().split(' ')[0],
        timeColor: "#f88"
    },
    reducers: {
        timeColorChange: (state, action) => {
            state.timeColor = action.payload
        },
        timeChange: (state, action) => {
            state.time = action.payload
        }
    }
})
```

- Pull out our actions created from the slice: the combination of our reducer and action is the same as an event in Re-Frame.
```js
export const { timeColorChange, timeChange } = colorSlice.actions
```

- Add our selectors (which are the same as subs) and export our slice
```js
export const selectTimeColor = state => state.color.timeColor
export const selectTime = state => state.color.time
export default colorSlice.reducer
```

## Creating our UI elements using the Redux state
3. Add our Color Picker UI
- We use Redux hook functions from the Redux Toolkit. Note, before RTK we would have to connect our component and pass in mapStateToProps. Using hooks is much cleaner, a very welcome change in RTK!
- This component will be the input box that allows us to change the color of our time

Add the following to ColorInput.jsx:

```js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timeColorChange, selectTimeColor } from './colorSlice'
const ColorInput = () => {
    const color = useSelector(selectTimeColor)
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text"
                value={color}
                onChange={(e) => dispatch(timeColorChange(e.target.value))} />
        </div>
    )
}
export default ColorInput
```

4. Add our Clock UI
- Notice that we use the useEffect hook to cause a change in state (or in this case dispatching a time change in our redux state) when the component mounts. It automatically updates our component by causing a re-render each second.
- For the visible UI we are returning we only need a selector since we are just reading the value of the color from Redux state.
- Notice how the JS interopt used in ClojureScript matches how we are setting the time in our JS app:
```clojure
; Clojure version
(-> (js/Date.)
    .toTimeString
    (str/split " ")
    first)
;; JS version
;; new Date().toTimeString().split(' ')[0]
```

Add the following to Clock.jsx:

```js
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTimeColor, selectTime, timeChange } from './colorSlice'
const Clock = () => {
    const color = useSelector(selectTimeColor)
    const time = useSelector(selectTime)
    const dispatch = useDispatch()
    useEffect(() => {
        setInterval(() => {
            dispatch(timeChange(new Date().toTimeString().split(' ')[0]))
        }, 1000)
    }, [dispatch])
    return (
        <div style={{ color: `${color}` }}>
            <h1>{time.toString()}</h1>
        </div>
    )
}
export default Clock
```

## Hook everything up
5. Add your components to the main App.js
6. Add your color slice to the configureStore function in `store.js` so it is registered. The store is like the db of Re-Frame, containing the "global" application state that can be referenced by any component subscribed. In `index.js` you see that a `Provider` component is the wrapper around the app and its components, providing that state.
```js
export default configureStore({
    reducer: {
        counter: counterReducer,
        color: colorReducer
  },
});
```

7. Test it!
You should be able to update the color and the clock will match accordingly and the time updates every second too.

Here is the finished product:

<iframe
     src="https://codesandbox.io/embed/redux-tk-clock-4xgle?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="redux-tk-clock"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Treat yourself!
![Celebrate](https://media.giphy.com/media/7zMkk1aiQVonuZQKi6/giphy.gif)

**Congratulations!** You have successfully completed a port of a Reagent + Re-Frame app to React + Redux!
