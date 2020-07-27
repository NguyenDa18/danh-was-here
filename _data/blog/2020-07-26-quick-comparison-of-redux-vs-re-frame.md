---
template: BlogPost
path: /quick-redux-vs-reframe
date: 2020-07-26T22:59:44.293Z
title: Quick Comparison of Redux vs. Re-Frame
metaDescription: >-
  redux, re-frame, clojure, clojurescript, cljs, react-redux, tutorial,
  comparison, javascript, timer, color
thumbnail: >-
  https://res.cloudinary.com/dnguyen/image/upload/v1595807209/blog/redux-reframe_vln1sh.jpg
---
# Re-Frame example in React+Redux
* Core image from [DeviantArt](https://www.deviantart.com/ameij/art/Arm-wrestling-167001658)
* Blog image made with [Pixlr](https://pixlr.com/x/)
* prerequisite: React + Redux are JavaScript libraries used to build UI and state management for SPA apps. Reagent + Re-Frame are their cousins in Clojurescript town.

---
> "Is the learning curve for Redux steeper than Re-Frame?"

A coworker admitted to me recently that he thought there is a higher learning curve for React + Redux compared with Reagent + Re-Frame. My first exposure to a state management library was React + Redux during my internship and then with my senior capstone project, and that allowed me to quickly change gears to using Clojure at my workplace. I have to admit, I was a little sour about not being able to use JavaScript to contribute to the team's Clojure codebase at first, and was prepping myself for the Clojure learning grind. But when I got to the parts of the codebase using Re-Frame I saw a familiar face: it was good 'ol Redux in a different outfit, maybe something with chainmail because of the parentheses used.

In this example I will be making a React + Redux app based off of a Clojurescript example that used Reagent and Re-Frame. It was the first example I learned from when practicing Clojurescript. This app will allow you to change the color of a HH:MM:SS clock being updated every second like the ClojureScript demo.

Now with Facebook's recent update of Redux with the Redux Toolkit, the similarities between Re-Frame and Redux are clearer to see than ever.

---

[Reagent + Re-Frame demo referenced](https://blog.klipse.tech/clojure/2019/02/17/reframe-tutorial.html)

We'll start by creating a template app based off of the essential create-react-app. This bundles Redux Toolkit and we will be using the shiny up to date new stuff (as of now) for this tutorial:
- `npx create-react-app timer-demo --template redux`

When you run `npm start` you will see the demo application used in the template: a simple counter and looking through it is all you need to start writing your own piece based off the example app.

![Starter App](https://res.cloudinary.com/dnguyen/image/upload/v1595808346/blog/reframe-redux/redux-counter_ohs24j.png)

# Let's get started.

### For your consideration:
- A selector behaves the same was as a sub in Re-Frame
- A dispatch emits actions that are the same as events in Re-Frame
- The store is the same as a db in Re-Frame
- The configureStore function is the same as the initialize-db event in Re-Frame. The extra touch is the parameters are all the reducers we use.

## Creating our Feature + Slice
1. Create a feature for color state (we are following the way the template created a feature for the counter)
- add a new feature by creating a new folder and naming it `color`
- add 3 files to it
   - Clock.js
   - ColorInput.js
   - colorSlice.js

2. Add the beefy part of our Redux stuff in colorSlice.js

- Create our slice: this includes the name, initialState, and our reducers
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

- Add out selectors (which are the same as subs) and export our slice
```js
export const selectTimeColor = state => state.color.timeColor
export const selectTime = state => state.color.time
export default colorSlice.reducer
```

3. Add our Color Picker UI using the Redux state.
- we use Redux hook functions from the Redux Toolkit. Before RTK we would have to connect our component and pass in mapStateToProps.
- This component will be the input box that allows us to change the color of our time
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
