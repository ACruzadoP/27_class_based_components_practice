This is 28th screencast, called "28. Class-based Components Practice"<br />
https://scrimba.com/course/glearnreact



Challenge:<br />
1. Convert all 3 components to be class-based<br />
2. Fix the small bug<br />


<br />
<br />

<blockquote><pre><code>
#1
function App() {
    return (
        &lt;div&gt;
            &lt;Header /&gt;
            &lt;Greeting /&gt;
        &lt;/div&gt;
    )
}<br />

#2
function Header(props) {
    return (
        &lt;header&gt;
        &lt;p&gt;Welcome, {props.username}!&lt;/p&gt;
        &lt;/header&gt;
    )
}<br />

#3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        &lt;h1&gt;Good {timeOfDay} to you, sir or madam!&lt;/h1&gt;
    )
}
</code></pre></blockquote>