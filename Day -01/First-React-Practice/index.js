//1. using ReactDOM package to render jsx

//ReactDOM.render(<h1>I'm just trying out react</h1>,document.querySelector("#root"));

//2.Composibility in react -- making reusable components

function MainTitle(){
    return(
        <h1>Hello This is a sample Component</h1>
    )
}

function MainContent(){
    return(
        <p>This is a dummy text to test out the component</p>
    )
}

ReactDOM.render(
    <div>
        <MainTitle />
        <MainContent />
    </div>
,document.querySelector("#root"));