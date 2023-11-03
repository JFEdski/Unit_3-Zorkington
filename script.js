/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Journey Through Time',
    desc: 'Welcome to the Journey Through Time! On your journey, you will explore different decades throughout American culture, from the 1970s to the 2000s. Hold on tight and safe [time] travels!',
    author: 'Jared Edelinski',
    cohort: 'SBPT-06-2023',
    startingRoomDescription: 'You start your journey in a room with white walls and no ceiling. There is a harp in the corner, a scroll lying on a Roman pedestal, and a pearly gate in front of you.',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'play', 'enter', 'pickup'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
} 

class Room {
    constructor(exits, description, items) {
      this.exits = exits;
      this.description = description;
      this.items = items;
    }
};

let beginning = new Room(
    ['seventies'],
    'You start your journey in a room with white walls and no ceiling. There is a harp in the corner and a scroll lying on a Roman pedestal. From here, you can move on to the seventies',
    ['scroll']
);

let seventies = new Room(
    ['eighties'],
    'You are in a room with a disco ball hanging from the ceiling. There is a record player in the corner and a mood ring on a table. From here, you can move on to the eighties',
    ['mood ring']
)

let eighties = new Room(
    ['nineties'],
    'You are in a room with neon signs lighting the area. There is a boombox in the corner and a gameboy on a table. From here, yo can move on to the nineties',
    ['gameboy']
)

let nineties = new Room(
    ['y2k'],
    'You are in a room with walls covered with Magic Eye wallpaper. There is a Sony Discman on a table and a pile of pogs on the floor. From here, you can go back to y2k',
    ['pogs']
)

let y2k = new Room(
    ['beginning'],
    'You are in a room with big balloons in the shape of "Y2K." There is an iPod nano on a table and a Nokia RAZR on a desk. From here, you can go back to the beginning.',
    ['nokia']
)

class Item {
    constructor(name, description, location, move) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.move = move;
    }
}
   
let scroll = new Item(
    'scroll',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mi eget enim aliquam porttitor. Nulla et arcu ut dui semper hendrerit. Sed bibendum libero at lacus volutpat facilisis.',
    'beginning',
    true
)

let moodRing = new Item(
    'mood ring',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mi eget enim aliquam porttitor. Nulla et arcu ut dui semper hendrerit. Sed bibendum libero at lacus volutpat facilisis.',
    'seventies'
)

let gameboy = new Item(
    'gameboy',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mi eget enim aliquam porttitor. Nulla et arcu ut dui semper hendrerit. Sed bibendum libero at lacus volutpat facilisis.',
    'eighties'
)

let pogs = new Item(
    'pogs',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mi eget enim aliquam porttitor. Nulla et arcu ut dui semper hendrerit. Sed bibendum libero at lacus volutpat facilisis.',
    'nineties'
)

let nokia = new Item(
    'scroll',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mi eget enim aliquam porttitor. Nulla et arcu ut dui semper hendrerit. Sed bibendum libero at lacus volutpat facilisis.',
    'y2k'
)

let state = {
    beginning: beginning,
    'seventies': seventies,
    'eighties': eighties,
    'nineties': nineties,
    'y2k': y2k
} 

let currentState = beginning;
let playerInventory = [];

// Your code here

export const domDisplay = (playerInput) => {
    console.log(typeof playerInput);
    let playerInputArr = playerInput.split(' ');
    console.log(playerInputArr);

    let action = playerInputArr[0];
    let target = playerInputArr[1];

    if(action === 'enter' && currentState.exits.includes(target)) {
        currentState = state[target];
        console.log(state[target]);
        return currentState.description;
    } else {
        return (`You cannot go here, you can only to ${currentState}!`);
    }


    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
