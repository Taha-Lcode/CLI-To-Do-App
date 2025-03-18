import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const list = [];

const showOption = () => {
    console.log("\n1: Add the Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose the option: ", Take_Input);
}

const Take_Input = (option) => {
    if(option === "1"){
        rl.question("Enter the Task: ", (task)=>{
            list.push(task);
            console.log('Task Added: ', task);
            showOption();
        })
    }
    else if(option === "2"){
        console.log("\nYour Todo lists: ");
        list.forEach((curr_task, index) => {
            console.log(`${index + 1}. ${curr_task}`);
        })
        showOption();
    }
    else if(option === "3"){
        console.log("Thank You for using me!!");
        rl.close();
    }
    else{
        console.log("Invalid Option!! Pls Choose correct options: ");
        showOption();
    }
}

showOption();

