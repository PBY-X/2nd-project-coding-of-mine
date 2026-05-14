// Get all buttons on the page
const buttons = document.querySelectorAll('button');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        
        switch(buttonText) {
            case 'Yes! for real':
                alert('Great! You\'re committed to using AI correctly.');
                break;
            case 'No i am not':
                alert('That\'s okay, but consider learning the basics!');
                break;
            case 'i am not sure at all':
                alert('Take your time to decide. Learning is a journey.');
                break;
            case 'choose for me instead':
                alert('I choose: Learn and use AI as a tool, not a crutch!');
                break;

            case 'so Are you Ready?':
                if (confirm('are you confident about using it correctly?'))
                    alert('good put yourself at a test and find out how long you can do that with a small help from AI');
                else
                    alert("well try again unless you don't want the help of the AI then that's fine");
                break;
            case 'yes i am':
                alert('good okay put it to practice');
                break;
            case 'not really sure about it':
                alert('redecide when you are ready or not');
                break;
        }
    });
});