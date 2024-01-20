const jokes = [
     "What's the smartest insect?A spelling bee!"
    ,"What is fast,loud and crunchy?A rocket chip."
    ,"How does the ocean say hi?it waves!"
    ,"what do birds give out on Halloween?Tweets."
    ,"What do you call a guy who's really loud? Mike."
    ,"What's a cat's favorite dessert? A bowl full of mice-cream."
    ,"Where did the music teacher leave her keys?In the piano!"
    ,"What do you call two bananas on the floor?Slippers."
    ,"Why did the chicken cross the playground?To get to the other slide."
    ,"What kind of math do birds love? Owl-gebra!"
    ,"Why was 6 afraid of 7? Because 7,8,9."
    ,"What kind of shoes do frogs love? Open-toad!"
    ,"What's brown and sticky>A stick."
    ,"How do you make a lemon drop? Let if fall from the tree."
    ,"Which planet loves to sing? Nep-tune!"
    ,"How do bees brush their hair? with honeycombs!"
    ,"How many months have 28 days? All of them!"
    ,"What's a cat's favorite color? purr-ple."

];

function generatejoke(){
    const jokeDisplay = document.getElementById("jokeDisplay");
    const randomIndex = math.floor(math.random() * Jokes.length);
    jokeDisplay.textContent= Jokes[randomIndex];
}
