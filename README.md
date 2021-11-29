# Frontend Mentor - Space tourism website

- Live website -(https://space-tourism-multipage-cpwd.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## The challenge

Your users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Built with

- React.js
- Sass/SCSS
- React Hooks

### What I learned

- This is the first time I made a multi-page layout with React.js. I completed the project using react-router and react hooks. I also used the json file provided to utilize and display the information. I also focused on accessibility and made sure that the layout of my pages are accessible to both keyboard users and screen readers. I also learned a lot about using React and Sass together and found it easy to work with.

#### Here is some code used to create my project

- In order to display the right background image for my page, I passed down a function to the child component to pass a string and add that string into my page-wrap class

```Javascript
// App.jsx
<div className={`page-wrap ${bg}`}>
	<Header />
    <Routes>
        {/* pass function to current page compont to set the background class */}
        <Route index element={<Home changeBG={(x) => setBG(x)} />} />
        <Route
            path="/destination"
            element={<Destination changeBG={(x) => setBG(x)} />}
        />
        <Route path="/crew" element={<Crew changeBG={(x) => setBG(x)} />} />
        <Route
            path="/technology"
            element={<Technology changeBG={(x) => setBG(x)} />}
        />
    </Routes>
</div>
```

- My child component would then pass a string back once it renders using the useEffect hook in React

```Javascript
function Destination(props) {
	useEffect(() => {
		props.changeBG("destination");
	});

    ///////////// code
}
```

- In order to display and tab through my buttons with the right and left arrow key, I used the useRef hook in order to reference the parent div of my buttons. and I used the map method to display my buttons along with the names from the json file

```Javascript
// reference the buttons, similar to querySelectorAll(myBtn)
const myBtn = useRef();
// reset the tabIndex for group to 0 and others to -1
const [tabFocus, settabFocus] = useState(0);

const keyPress = (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownRight) {
        if (tabFocus < 3) {
            settabFocus(tabFocus + 1);
            // set focus to tab or else ig outside the if statements it'll be one behind
            myBtn.current.children[tabFocus + 1].focus();
        } else {
            settabFocus(0);
            myBtn.current.children[0].focus();
        }
    }

    if (e.keyCode === keydownLeft) {
        if (tabFocus > 0) {
            settabFocus(tabFocus - 1);
            myBtn.current.children[tabFocus - 1].focus();
        } else {
            settabFocus(3);
            myBtn.current.children[3].focus();
        }
    }
};
```

```JavaScript
<div
    className="tab-list flex"
    // the role attribute can be utilized in plain JS to querySelect this element for the tab functionality
    role="tablist"
    aria-label="destination list"
    onKeyDown={keyPress}
    ref={myBtn}
>
    {/*Here I map through my destination object within the json file and display the buttons of the planets*/}
    {Data.destinations.map((item, index) => {
        return (
            <button
                key={index}
                onClick={() => toggle(index)}
                aria-selected={tabFocus === index}
                role="tab"
                className="underline-indicator uppercase ff-sans-cond text-accent letter-spacing-2"
                tabIndex={tabFocus === index ? "0" : "-1"}
            >
                {item.name}
            </button>
        );
    })}
</div>
```

- Something that I want to improve on is writing cleaner and less code. There was a lot of code within my components that I felt were very repetitive and was wondering for a why to reuse certain pieces of code through out my components. I also want to improve on having a cleaner layout for my styling sheets and files within my folder.

### Useful resources

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
