/* This is a simple message board that will randomly generate a inspirational gym quote once every 30 sec
it will consist of a switch mechanism, a few objects, and a random number generator to display a new message */

/* The random function below generates a random number between 1 and 9 inclusive. The random number correlates
to the time of day the workout is occuring. Normally we wouldn't have an addition element after the math.random
function. However, a time of "0" doesn't make sense unless it is military time.  
*/
settime = () => {
    function getRandomInteger() {
        return Math.floor(Math.random() * 9) + 1;
    }
const message = {
    pre_workout: ["Save the rage", "Get your creatine on", "You are a machine"],
    the_pump: ["The pain of discipline or the pain of regret", "Put your phone down!", "Have some water"],
    post_workout: ["Drink your protein shake", "Don't go to McDonalds", "Take a shower, you stink!"]
    }
}

// All of the options available for the random integer generator
generateMessage = () => {
    switch (getRandomInteger){
        case 1:{ 
            console.log(`You haven't gotten to the gym yet, ${message.pre_workout[0]}`);
        break;
        }
        case 2:{ 
            console.log(`You haven't gotten to the gym yet, ${message.pre_workout[1]}`);
        break;
        }
        case 3:{ 
            console.log(`You haven't gotten to the gym yet, ${message.pre_workout[2]}`);
        break;
        }
        case 4:{ 
            console.log(`Remember you have two choices, ${message.the_pump[0]}`);
        break;
        }
        case 5:{ 
            console.log(`${message.the_pump[1]}, it's time to get swoll!`);
        break;
        }
        case 6:{ 
            console.log(`Great sets! Now, ${message.the_pump[0]}`);
        break;
        }
        case 7:{ 
            console.log(`Now that you're done, ${message.post_workout[0]}`);
        break;
        }
        case 8:{ 
            console.log(`Now that you're done, ${message.post_workout[1]}`);
        break;
        }
        case 9:{ 
            console.log(`Now that you're done, ${message.post_workout[2]}`);
        break;
        }
    }
}

let startTime = new Date().getTime();

let displayMessages = setInterval(() => {
  let currentTime = new Date().getTime();
  
  if (currentTime - startTime > 30000) {
    clearInterval(displayMessages);
    return;
  }

  settime();

}, 5000);