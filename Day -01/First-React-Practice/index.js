//1. using ReactDOM package to render jsx


    //ReactDOM.render(<h1>I'm just trying out react</h1>,document.querySelector("#root"));

//2.Composibility in react -- making reusable components

    // function MainTitle(){
    //     return(
    //         <h1>Hello This is a sample Component</h1>
    //     )
    // }

    // function MainContent(){
    //     return(
    //         <p>This is a dummy text to test out the MainContent component</p>
    //     )
    // }

    // ReactDOM.render(
    //     <div>
    //         <MainTitle />
    //         <MainContent />
    //     </div>
    // ,document.querySelector("#root"));


//3.Working with jsx    
    //what react is returning in jsx is plain old javaScript objects

const pageContent = (
    <div>
        <h1>This is a JSX element</h1>
        <p>This text is a part of the main jsx element</p>
    </div>
)
console.log(pageContent);

const root = document.querySelector("#root");

console.log(root);
ReactDOM.render(pageContent,root);