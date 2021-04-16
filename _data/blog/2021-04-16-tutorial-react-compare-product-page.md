---
template: BlogPost
path: /react-compare-app
date: 2021-04-16T03:04:33.203Z
title: "Tutorial: React Product Compare Page"
metaDescription: react,react compare, react compare product page, react
  tutorial, react compare product, react 2021 tutorial
---
# Simple Recipe #1 : React Product Compare Page

About two months ago, our team had a new requirement to implement for a website: to be able to allow users to select products and compare them side by side instead of just displaying a list and leaving most of the mental organization for them. It was agreed that was not a good user experience, and the technical team including me were able to convey that the comparison work would be pretty simple to implement. The product comparison apps that show up in the top results of a "react comparison app" query were a little complex and took a couple minutes to study to get the comparison functionality out, which was the main point.
I decided to make one of the simplest product comparisons as possible, a suitable demo for beginners with React and generally anyone with 5 minutes at their fingertips.

Let's get started.

## Part 1: Start off with Create React App
- Run `npx create-react-app product-compare` in the command line.

## Part 2: Create your comparison component:

```react
const [selectedItems, setSelectedItems] = useState([])

    const addToCompare = (item) => {
      setSelectedItems((selectedItems) => [...selectedItems, item])
    }

    const removeFromCompare = (item) => {
      const filteredItems = selectedItems.filter(product => product.id !== item.id)
      setSelectedItems(filteredItems)
    }

```

That is all you need. TBC


Here is the finished product:

<iframe
     src="https://codesandbox.io/s/product-compare-demo-its11?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
     title="redux-tk-clock"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

