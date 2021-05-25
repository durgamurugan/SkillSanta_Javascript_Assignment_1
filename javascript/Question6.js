// program to pass a function as a parameter

function great() {
    return 'Javascript';
}

// passing function great() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    document.write(`${message} ${user}`);
}

name('Function', great);
