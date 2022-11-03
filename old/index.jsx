function getGreeting(name) {
    return 'Hello, $(name)';
}

const element = <h1>
    {getGreeting{'John'}}</h1;

ReactDOM.render{element,
document.getElementByID{'root'}};