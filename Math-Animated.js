// iv)	Email address must be validated to only accept email addresses that ends with “@gmail.com”.
// change the background color of the answer to match if the answer is correct or incorrect


const PlayerRegistrationData = {};
var NumberOfUser = 1;
var check = "false";
var LoggedInUser = "";
var Gen;
let lastscore = -1;
let lastloggedinuser


/*Variables that stores the two random generate number*/
let int1,int2;
var MainTableRow,progres, tbl;
var percentArr = ["< 50","50-59","60-69","70-79","80-89","90-100"];
var amtOfUsers = [0,0,0,0,0,0];
var currentPercentArr = [0,0,0,0,0,0];

var multiplication = document.getElementById("multisymb");
var equalsymbol = document.getElementById("equsymb");
var answer = document.getElementById("answer");
var ansp2 = document.getElementById("ansp2");
var showCharts = document.getElementById('showChart')

var userAnswer = document.getElementById("answerbox");
var submitAnswer = document.getElementById("CheckAnswer");
var Next = document.getElementById("NextButton");
var StartGameButton = document.getElementById("StartGame");
var StartGameButton2 = document.getElementById("StartGame2");
var EndGameButton = document.getElementById("EndGame");
var findPercentButton = document.getElementById("findPercent")
var gameSection = document.getElementById('gameSectiontd')
var genderChartelement = document.getElementById('genderchart')
var percentchartelement = document.getElementById('percentchart')
var currentPercentchartelement = document.getElementById('MosrRecentpercentchart')
var placeChartgender = document.createElement('canvas')
var placeChartpercent = document.createElement('canvas')
var placeCurrentChartpercent = document.createElement('canvas')



var img1 = [document.getElementById("img1"), 1];
var img2 = [document.getElementById("img2"), 2];

var bg1 = document.getElementById("bg1")
var bg2 = document.getElementById("bg9")
var bg3 = document.getElementById("bg3")

var bg4 = document.getElementById("bg4")
var bg5 = document.getElementById("bg5")
var bg6 = document.getElementById("bg6")

var bg7 = document.getElementById("bg7")
var bg8 = document.getElementById("bg8")
var bg9 = document.getElementById("bg2")

/*Arrys*/
let int1Images = [img1, img2];

PlayerRegistrationData["Malick"] = ["Malick", "Brown", "06-08-2014", "Male", "MalBwn1@gmail.com", 8, 1, 1];

var percentageScore
// document.getElementsById("registerBtn").addEventListener('click', Register());
// document.getElementsById("registerBtn").addEventListener('click', Store());


function positioning(imagepos,proxy){

    multiplication.style.left = "17%"
    multiplication.style.position = "relative";

    equalsymbol.style.left = "33%"
    equalsymbol.style.position = "relative";
    equalsymbol.style.top = "10%";

    answer.style.left = "40%"
    answer.style.position = "relative";
    answer.style.top = "10%";

    if(proxy === 1){
        imagepos.style.left = "3%";
        imagepos.style.position = "absolute";
        imagepos.style.top = "10%";

    }

    if(proxy === 2){
        imagepos.style.left = "35%";
        imagepos.style.position = "absolute";
        imagepos.style.top = "10%";

    }

}

/* Functions that handle the Login and register page*/
function signIn() {
    document.getElementById('wrapper1').style.transform = "scale(1)";
}

function iconClose() {
    document.getElementById('wrapper1').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.display = "";
    document.getElementById('wrapper1').style.display = "";
}

function registerPage() {
    document.getElementById('wrapper1').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.transform = "scale(1)";
    setTimeout(() => {
        document.getElementById('wrapper1').style.display = "none";
        document.getElementById('wrapper2').style.display = "inline-block";  
    }, 280);  
      
}

function loginPage() {
    document.getElementById('wrapper1').style.transform = "scale(1)";
    document.getElementById('wrapper2').style.transform = "scale(0)";
    setTimeout(() => {
        document.getElementById('wrapper1').style.display = "";
        document.getElementById('wrapper2').style.display = "none";  
    }, 280);
}

function typeChanger(){
    document.getElementById("DOB").type = "date";
    document.getElementById("DOB2").type = "date";
}

function validateEmail(){
    var emailInput = document.getElementById('Email2');

      // Regular expression to check if the email ends with "@gmail.com"
      var regex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

      if (!regex.test(emailInput.value)) {
        window.alert("Please enter a valid Gmail address");
        //emailInput.setCustomValidity('Invalid email');
        //emailInput.setAttribute("value", null);
        emailInput.value = null
      }
}

function calculateAge(id , Age, label){
    var DOB = document.getElementById(id).value;
    var tag = document.getElementById(label);
    const d = new Date(DOB);
    let year = d.getFullYear();
    var now = new Date().getFullYear(); 
    var age = Math.abs(now - year);
    var message = (age + " years old is Acceptable");

    if (age < 9 || age > 12) {
        window.alert(age + ' years old does not meet the player requirement');  
    } else if (age > 8 && age < 13) {
        document.getElementById(Age).removeAttribute('disabled');
        document.getElementById(Age).setAttribute("value", age);
        document.getElementById(label).style.top = "5px";
        document.getElementById(Age).setAttribute('disabled',true);
        // Using Set attribute method.
    }
    else if (age < 1) {
        window.alert('This age does not meet the player requirement');  
    }
}

function CheckForUser(firstnameId,lastNameId, DOBId){
    /*Note: In the console, Only the Gen value is read. 
    Please check the values of the other variables to store. */  
    
    /*We the Element from the index Webpage*/
    var fname = document.getElementById(firstnameId).value;
    var lname = document.getElementById(lastNameId).value;
    var DOB = document.getElementById(DOBId).value;

    // PlayerRegistrationData[i] = [{fname, lname,  DOB , Gen}];
    console.log(PlayerRegistrationData);
    
   for (let key in PlayerRegistrationData) {
        console.log(PlayerRegistrationData[key]);
        if (fname === PlayerRegistrationData[key].at(0)) {
            //check = "true";
            console.log("Found User");
            return true;
        }
    }   

    // for (let counter = 0; counter < NumberOfUser ; counter++) {
    //     console.log(PlayerRegistrationData[counter]);
    //     if (fname === PlayerRegistrationData[counter].at(1)) {
    //         //check = "true";
    //         console.log("Found User");
    //         return true;
    //     }
    // }    
    return false;
};

function Register(event) {
    if (event){event.preventDefault();}

    if (document.getElementById("Male2").checked) {
        Gen = "Male";
    }

    else if (document.getElementById("Female2").checked){
        Gen = "Female";
    }
    else{
        Gen = "Non Binary";
    }

    var check = CheckForUser("firstName2", "lastName2", "DOB2");
    console.log(check)
    if (check === true){
        window.alert("Registration attempt failed \n Please try again"); 
        loginPage()
    }else if(check === false){
        iconClose()
        StoreUserRegistration()
        if(NumberOfUser > 1){
            currentPlayerProgressbar()
        }
        StartGameButton.style.display = " inline-block"
        StartGameButton2.style.display = " inline-block"
    }       
    
}


function UserLogin(event){
    if (event){event.preventDefault();}

    var check = CheckForUser("firstName", "lastName", "DOB");

    console.log(check)
    if (check === true){
        window.alert("A match found!\nPlease Continue to Start game."); 
        window.alert("Welcome to our multiplication calculator \n to play press start button \n  once the game has started enter the answer you think is correct in the input box provided        ")
        LoggedInUser = document.getElementById("firstName").value;
        console.log("this is logged in user", LoggedInUser)
        StartGameButton.style.display = " inline-block"
        StartGameButton2.style.display = " inline-block"
        iconClose()
    }else if(check === false){
        window.alert("No such user match found!\nPlease Try registering."); 
        registerPage()
    }
}

/*We store the users data using this funcation*/
function StoreUserRegistration(){
    /*Note: In the console, Only the Gen value is read. 
    Please check the values of the other variables to store. */  
    
    /*We the Element from the index Webpage*/
    var fname = document.getElementById("firstName2").value;
    var lname = document.getElementById("lastName2").value;
    var email = document.getElementById("Email2").value;
    var DOB = document.getElementById("DOB2").value;

    // PlayerRegistrationData[i] = [{fname, lname,  DOB , Gen}];
    console.log("this is the number of users ",NumberOfUser);
    LoggedInUser = fname;
    NumberOfUser++;   
    PlayerRegistrationData[fname] = [fname, lname,  DOB , Gen, email, 0 ,0, NumberOfUser];
    amtOfUsers.push(NumberOfUser)

    console.log(PlayerRegistrationData);
    
};

function currentPlayerProgressbar(){
    if(progres){
        progres.remove()
    }
    if(loggedInTag){
        loggedInTag.remove()
    }
    loggedInTag = document.createElement('h3')
    loggedInTag.innerText = LoggedInUser

    findpercentageScoreFunction()
    gameSection.insertBefore(progres, gameSection.firstChild)
    gameSection.insertBefore(loggedInTag, gameSection.firstChild)

    progres.style.width = '200px'
    progres.style.top = '10px'
}

/*These function handle the the playing of the game */
var loggedInTag 
/*This funcation fires whne the User clicks the submit button and vaildtes the answer*/
function checkAnswer(){

    submitAnswer.disabled = true;

    let correctAns = int1*int2;
    let userAns = userAnswer.value;

    let newuserAns = userAns-0;

    let picAnswerVal = correctAns.toString()

    answer.src = "Assets/imgs/numbers/Image"+picAnswerVal[0]+".jpg";
    answer.style.transform = "rotateY(10deg)";

    if(picAnswerVal.length > 1){
        ansp2.src = "Assets/imgs/numbers/Image"+picAnswerVal[1]+".jpg";

        ansp2.style.transform = "rotateY(10deg)";

        ansp2.style.left = "40%"
        ansp2.style.position = "relative";
        ansp2.style.top = "10%";
    }


    if(newuserAns === correctAns){
        //window.alert("the user entered the correct answer");
        PlayerRegistrationData[LoggedInUser][5] += 1;
        answer.style.backgroundColor = "rgb(124, 203, 110)";
        ansp2.style.backgroundColor = "rgb(124, 203, 110)";
    }
    else{
       //window.alert("That was the wrong number"+"\n"+"the correct answer is "+ correctAns +"\n"+"the user answer is " + newuserAns);
       PlayerRegistrationData[LoggedInUser][6] += 1;
       answer.style.backgroundColor = "rgb(203, 110, 126)";
       ansp2.style.backgroundColor = "rgb(203, 110, 126)";
    }
    showAllStats()
    
    currentPlayerProgressbar()
    
}

/*This function Generates the random numbers*/
function getRandomInt(range) {
    let min = 1;
    let max = range;

    return Math.floor(Math.random() * (max - min) + min);
}


/*The play game function fire the Generates number function and displays them on the field*/
function playgame(){
    submitAnswer.disabled = false;

    answer.style.transform = "rotateY(90deg)";
    ansp2.style.transform = "rotateY(90deg)";

    int1 = getRandomInt(5);
    int2 = getRandomInt(10);

    console.log("int 1 is: ",int1);
    console.log("int 2 is: ",int2);

    let x;
        
    let tempImg1 = int1Images[0].at(0);
    let tempVal1 = int1

    tempImg1.src = "Assets/imgs/numbers/Image"+tempVal1+".jpg";
    // console.log("the turnt num should be: ",tempImg1);
    tempImg1.style.transform = "rotateY(10deg)";
    positioning(tempImg1, 1);

        
    let tempImg2 = int1Images[1].at(0);
    let tempVal2 = int2

    tempImg2.src = "Assets/imgs/numbers/Image"+tempVal2+".jpg";
    // console.log("the turnt num should be: ",tempImg2);
    tempImg2.style.transform = "rotateY(10deg)";

    positioning(tempImg2, 2);

}

function storePercentage(score){
    score = score*100

    if(score < 50){
        amtOfUsers[0]++;
    }
    else if(score >= 50 && score <= 59){
        amtOfUsers[1]++;
    }
    else if(score >= 60 && score <= 69){
        amtOfUsers[2]++;
    }
    else if(score >= 70 && score <= 79){
        amtOfUsers[3]++;
    }
    else if(score >= 80 && score <= 89){
        amtOfUsers[4]++;
    }
    else if(score >= 90 && score <= 100){
        amtOfUsers[5]++;
    }
}

function findpercentageScoreFunction(){
    percentageScoreCalculations = PlayerRegistrationData[LoggedInUser].at(5)/(PlayerRegistrationData[LoggedInUser].at(5) + PlayerRegistrationData[LoggedInUser].at(6));
    percentageScore = percentageScoreCalculations* 100

   // percentageScoreCalculations = PlayerRegistrationData[key].at(5)/(PlayerRegistrationData[key].at(5) + PlayerRegistrationData[key].at(6)) * 100;


    progres = document.createElement('div');
    progres.setAttribute('id', 'progres');

    progres.style.backgroundColor = 'grey'
    progres.style.height = '20px'
    progres.style.width = '100%'
    progres.style.borderRadius = '25px'

    var progresDone = document.createElement('div');
    progresDone.setAttribute('id', 'progresDone');
    progres.appendChild(progresDone)

    progresDone.style.height = '20px'
    progresDone.style.width = `${PlayerRegistrationData[LoggedInUser].at(5)/(PlayerRegistrationData[LoggedInUser].at(5) + PlayerRegistrationData[LoggedInUser].at(6)) * 100}% `
    progresDone.style.backgroundColor = 'rgb(101, 101, 243)'
    progresDone.style.borderRadius = '25px'
    progresDone.style.display = 'flex'
    progresDone.style.alignItems = 'center'
    progresDone.style.justifyContent = 'center'
    progresDone.style.color = 'white'
    progresDone.style.transition = 'all 1s ease 0.3s';

    var percentAmt = document.createElement('p')
    percentAmt.innerText = `${Math.ceil(PlayerRegistrationData[LoggedInUser].at(5)/(PlayerRegistrationData[LoggedInUser].at(5) + PlayerRegistrationData[LoggedInUser].at(6)) * 100)}% `
    progresDone.appendChild(percentAmt)
    
    storePercentage(percentageScoreCalculations);
}

function findPercentageScore(){

    console.log("thie find score is called")
    if (document.getElementById("showPercentageTable")) {
        console.log("Table removed")
        document.getElementById("showPercentageTable").remove()
    }
    var MainTableRow = document.getElementById("showPercentageRow");
    // create elements <table> and a <tbody>
    tbl = document.createElement("table");
    tbl.style.width = '100%';
    tbl.style.border = '1px solid black';
    tbl.className = "ScoreTable"
    tbl.id = "showPercentageTable"

    var rowheader = tbl.insertRow();
    //Name Cell
    var cell1 = rowheader.insertCell();
    cell1.appendChild(document.createTextNode("First Name"));
    var cell2 = rowheader.insertCell();
    cell2.appendChild(document.createTextNode("Last Name"));
    //Percentage score
    var cell3 = rowheader.insertCell();
    cell3.appendChild(document.createTextNode("Percentage score"));
    //Correct answers
    var cell4 = rowheader.insertCell();
    cell4.appendChild(document.createTextNode("Correct answers"));
    //incorrect equations
    var cell5 = rowheader.insertCell();
    cell5.appendChild(document.createTextNode("incorrect equations"));

    for (let key in PlayerRegistrationData) {
        // table row creation
        var row = tbl.insertRow();
    
        console.log(PlayerRegistrationData[key]);
            for (var i = 0; i < PlayerRegistrationData[key].length; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                /*Create a The row for the data */
                if(i == 0 || i == 1 || i == 5 || i == 6){
                    var cell = row.insertCell();

                    cellText = document.createTextNode(PlayerRegistrationData[key].at(i));
                    console.log("other added cell")
                    cell.appendChild(cellText);
                    console.log(PlayerRegistrationData[key].at(i));
                }else if (i == 2){

                    var cell = row.insertCell();
                    percentageScoreCalculations = PlayerRegistrationData[key].at(5)/(PlayerRegistrationData[key].at(5) + PlayerRegistrationData[key].at(6)) * 100;
                     percentageScore = percentageScoreCalculations
                    storecurrentpercent(percentageScore)
                    cellText = document.createTextNode(percentageScore.toFixed(2) );
                    var breakeTag = document.createElement("br");
                    cell.appendChild(cellText); cell.appendChild(breakeTag);

                    
                    /*
                    var cell = row.insertCell();
                    findpercentageScoreFunction()
                    cell.appendChild(progres)*/

                }
            }        
    }
    MainTableRow.appendChild(tbl);
    //countgender

}

function storecurrentpercent(score){
    score 

    if(score < 50){
        currentPercentArr[0]++;
    }
    else if(score >= 50 && score <= 59){
        currentPercentArr[1]++;
    }
    else if(score >= 60 && score <= 69){
        currentPercentArr[2]++;
    }
    else if(score >= 70 && score <= 79){
        currentPercentArr[3]++;
    }
    else if(score >= 80 && score <= 89){
        currentPercentArr[4]++;
    }
    else if(score >= 90 && score <= 100){
        currentPercentArr[5]++;
    }


    if(LoggedInUser === lastloggedinuser){
        if(lastscore >= 0 && lastscore < 50){
            currentPercentArr[0]--;
        }
        else if(lastscore >= 50 && lastscore <= 59){
            currentPercentArr[1]--;
        }
        else if(lastscore >= 60 && lastscore <= 69){
            currentPercentArr[2]--;
        }
        else if(lastscore >= 70 && lastscore <= 79){
            currentPercentArr[3]--;
        }
        else if(lastscore >= 80 && lastscore <= 89){
            currentPercentArr[4]--;
        }
        else if(lastscore >= 90 && lastscore <= 100){
            currentPercentArr[5]--;
        }
    
    }

    lastloggedinuser = LoggedInUser
    lastscore = score

}

function showAllStats(){
    if (document.getElementById("showPlayerDiv")) {
        console.log("Div removed")
        document.getElementById("showPlayerDiv").remove()
    }

    MainTableRow = document.getElementById("showallplayers");
    MainTableRow.style.padding = '5px'
    MainTableRow.style.height = 'auto'
    // create elements <table> and a <tbody>
    var Div1 = document.createElement("div");
    Div1.style.width = '100%';
    Div1.style.height = 'auto';
    Div1.style.border = '1px solid black';

    Div1.className = "showAllPlayerDiv"
    Div1.id = "showPlayerDiv"
   

    for (let key in PlayerRegistrationData) {
        // table row creation  
        console.log(PlayerRegistrationData[key]); 

        var cell = document.createElement("div");
        cell.className = "showAllPlayerDiv"
        cell.id = PlayerRegistrationData[key].at(0)

        cell.style.display = 'inline-block';
        cell.style.width = '20%';


            for (var i = 0; i < PlayerRegistrationData[key].length; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                /*Create a The row for the data */
                if(i == 0  || i == 1 || i == 5 || i == 6){

                    cellText = document.createTextNode(PlayerRegistrationData[key].at(i));
                    var breakeTag = document.createElement("br");
                    cell.appendChild(cellText); cell.appendChild(breakeTag);

                }else if (i == 2){
                    
                    percentageScoreCalculations = PlayerRegistrationData[key].at(5)/(PlayerRegistrationData[key].at(5) + PlayerRegistrationData[key].at(6)) * 100;
                     percentageScore = percentageScoreCalculations
                    storecurrentpercent(percentageScore)
                    cellText = document.createTextNode(percentageScore.toFixed(2) );
                    var breakeTag = document.createElement("br");
                    cell.appendChild(cellText); cell.appendChild(breakeTag);

                }

            }   
        Div1.appendChild(cell)  

    }
    MainTableRow.appendChild(Div1);
}

function StartGame(){
    if (!LoggedInUser) {alert("Please Loggin First"); return;}
    var playArea = document.getElementById("area");

    if (document.getElementById("showPercentageTable")){
        console.log("Table removed")
        document.getElementById("showPercentageTable").display = "none";
    }

    window.location.href = "#GameArea";

    playArea.style.display = " block";

    StartGameButton.style.display = "none";
    StartGameButton2.style.display = "none"

    playgame()
}

function EndGame(){
    var playArea = document.getElementById("area");
    //var showpercentageTable = document.getElementById("showPercentageTable");

    if (document.getElementById("showPercentageTable")){
        console.log("Table removed")
        document.getElementById("showPercentageTable").display = " block";
    }

    playArea.style.display = "none";

    //showpercentageTable.style.display = " block";

    LoggedInUser = null;

    console.log(LoggedInUser + " End Game Why");

    findPercentageScore()
}

let chart1,chart2, chart3

function currentPercentfrequency(){

    if(placeCurrentChartpercent){
        placeCurrentChartpercent.remove()
    }

    placeCurrentChartpercent = document.createElement('canvas')
    
    placeCurrentChartpercent.setAttribute('id', 'currentpercentfrequency')

    placeCurrentChartpercent.style.width = '500px'
    placeCurrentChartpercent.style.heihgt = '500px'
    
    percentchartelement.appendChild(placeCurrentChartpercent)


    const data = {
        labels: percentArr,
        datasets: [{
            data: currentPercentArr,
            backgroundColor: 'rgba(83, 98, 211, 0.8)'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend:{
                    display: false
                },
                title: {
                    display: true,
                    text: 'current percent frequency'
                }
            }
        }
    };

    chart3 = new Chart(
        document.getElementById('currentpercentfrequency'),
        config
    );
}


function percentfrequency(){

    if(placeChartpercent){
        placeChartpercent.remove()
    }

    placeChartpercent = document.createElement('canvas')

    placeChartpercent.setAttribute('id', 'percentfrequency')

    placeChartpercent.style.width = '500px'
    placeChartpercent.style.heihgt = '500px'
    
    percentchartelement.appendChild(placeChartpercent)


    const data = {
        labels: percentArr,
        datasets: [{
            data: amtOfUsers,
            backgroundColor: 'rgba(83, 98, 211, 0.8)'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend:{
                    display: false
                },
                title: {
                    display: true,
                    text: 'percent frequency'
                }
            }
        }
    };

    chart2 = new Chart(
        document.getElementById('percentfrequency'),
        config
    );
    currentPercentfrequency()
}


function genderfrequency(male,female){

    console.log("the create is called")
    
    if(placeChartgender){
        placeChartgender.remove()
    }

    placeChartgender = document.createElement('canvas')
    
    placeChartgender.setAttribute('id', 'genderfrequency')

    placeChartgender.style.width = '200px'
    placeChartgender.style.heihgt = '200px'
    
    genderChartelement.appendChild(placeChartgender)

    let labels = ['boy','girl'];
    let datavalues = [male,female];

    const data = {
        labels: labels,
        datasets: [{
            data: datavalues,
            backgroundColor: 'rgba(83, 98, 211, 0.8)'
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{
                legend:{
                    display: false
                },
                title: {
                    display: true,
                    text: 'gender frequency'
                }
            }
        }
    };

        
        chart1 = new Chart(
            document.getElementById('genderfrequency'),
            config
        );
       percentfrequency();
        

}


function countgender(){
    var genderChart = document.createElement("canvas");
    genderChart.style.height = '500px'
    genderChart.style.width = '500px'

    let male = 0;
    let female = 0;

    for (let key in PlayerRegistrationData) {
    //console.log(PlayerRegistrationData[key].at(3));
  
        if(PlayerRegistrationData[key].at(3) === "Male"){
            male++
        }
        else if (PlayerRegistrationData[key].at(3) === "Female"){
            female++
        }
        else{
            console.log('wrong number')
        }
    }
    genderfrequency(male,female);

    //MainTableRow.appendChild(genderChart);
      
}

function callgenderchart(){
    var recallchart = setInterval(function(){
        countgender()
        console.log("this call is for the charts")
    },5000)
}

let checkanswerstate = 0

callgenderchart()


function backTrack(bg1h,bg1v,bg2h,bg2v,bg3h,bg3v,bg4h,bg4v,bg5h,bg5v,bg6h,bg6v,bg7v,bg7h,bg8v,bg8h)                    
{

    var moving1 = setInterval(function(){
        
        bg1h++,bg1v++,bg2h--,bg3v++;
        bg4h--, bg4v++,bg5h++,bg6h--;
        bg7v++, bg7h++, bg8v++, bg8h++;
        bg1.style.left = bg1h + 'px';
        bg1.style.top = bg1v + 'px';//770
        bg2.style.left = bg2h + 'px';
        bg3.style.top = bg3v+ 'px';

        bg4.style.left = bg4h + 'px'
        bg4.style.top = bg4v + 'px';
        bg5.style.left = bg5h + 'px'
        bg6.style.left = bg6h + 'px'

        bg7.style.top  = bg7v+ 'px'
        bg7.style.left=  bg7h + 'px'
        bg8.style.top = bg8v + 'px'
        bg8.style.left = bg8h + 'px'
        if(bg1h === 900){
            clearInterval(moving1)

            var moving2 = setInterval(function(){

                bg1h++,bg1v--,bg2h++,bg2v--,bg3v--;
                bg4v++,bg5h--,bg6h++;
                bg7v--, bg8v++,bg8h--;

                bg1.style.left = bg1h + 'px';
                bg1.style.top = bg1v + 'px';
                bg2.style.left = bg2h + 'px';
                bg2.style.top = bg2v + 'px';
                bg3.style.left = bg3v + 'px';

                bg4.style.top = bg4v + 'px';
                bg5.style.left = bg5h + 'px'
                bg6.style.left = bg6h + 'px'

                bg7.style.top= bg7v+'px'
                bg8.style.top = bg8v + 'px'
                bg8.style.left = bg8h + 'px'
                
                if(bg1h === 1670){
                    clearInterval(moving2)

                    var moving3 = setInterval(function(){
                        
                        bg1h--,bg2v--,bg3h--;
                        bg4h--, bg4v--,bg5h++,bg6h--;
                        bg7v++, bg7h--, bg8h--, bg8v--;
                        bg1.style.left = bg1h + 'px';
                        bg2.style.top = bg2v + 'px';
                        bg3.style.top = bg3h+ 'px';

                        bg4.style.left = bg4h + 'px'
                        bg4.style.top = bg4v + 'px';
                        bg5.style.left = bg5h + 'px'
                        bg6.style.left = bg6h + 'px'

                        bg7.style.top=bg7v+'px'
                        bg7.style.left= bg7h+'px'
                        bg8.style.top = bg8v + 'px'
                        bg1.style.left = bg8h + 'px'

                        if(bg1h === 900){
                            clearInterval(moving3)

                            var moving4 = setInterval(function(){

                                bg1h--,bg1v--,bg2h--,bg3v--;
                                bg4h++,bg4v--,bg5h--,bg6h++;
                                bg7v--, bg8h++, bg8v--;
                                bg1.style.left = bg1h + 'px';
                                bg1.style.top = bg1v + 'px';
                                bg2.style.left = bg2h + 'px';
                                bg3.style.top = bg3v + 'px';

                                bg4.style.left = bg4h + 'px'
                                bg4.style.top = bg4v + 'px';
                                bg5.style.left = bg5h + 'px'
                                bg6.style.left = bg6h + 'px'

                                bg7.style.top=bg7v+'px'
                                bg8.style.top = bg8v + 'px'
                                bg8.style.left = bg8h + 'px'

                                if(bg1h === 0){
                                    clearInterval(moving4)
                                    moveBackground()

                                }
                            })
                        }

                    })
                }
            })
            
        }
    },5)

}

function moveBackground(){

    // bg1h = background 1 horizontal
    // bg1v = background 1 vertical
    
    let bg1h = 0, bg1v = 0;
    let bg2h = 0, bg2v = 0;
    let bg3h = 0, bg3v = 0;

    let bg4h = 0, bg4v = 0;
    let bg5h = 0, bg5v = 0;
    let bg6h = 0, bg6v = 0;

    let bg7h = 0, bg7v = 0;
    let bg8h = 0, bg8v = 0;
    let bg9h = 0, bg9v = 0;
    
    var moving1 = setInterval(function(){
        bg1h++, bg1v++,bg2h++,bg3v++;
        bg4h--, bg4v++,bg5h++,bg6h--;
        bg7v++, bg8h--, bg8v++;
        
        bg1.style.left = bg1h + 'px';
        bg1.style.top = bg1v + 'px';
        bg2.style.left = bg1h + 'px'
        bg3.style.top = bg3v + 'px';

        bg4.style.left = bg4h + 'px'
        bg4.style.top = bg4v + 'px';
        bg5.style.left = bg5h + 'px'
        bg6.style.left = bg6h + 'px'

        bg7.style.top= bg7v +'px'
        bg8.style.left = bg8h + 'px'
        bg8.style.top = bg8v + 'px'

        if(bg1h === 900){
            clearInterval(moving1);

            var moving2 = setInterval(function(){
                bg1h++,bg2v++,bg3v++;
                bg4h++, bg4v++,bg5h--,bg6h++;
                bg7h++, bg7v--, bg8h++, bg8v++ ;

                bg1.style.left = bg1h + 'px';
                bg2.style.top = bg2v + 'px';
                bg3.style.top = bg3v+ 'px';

                bg4.style.left = bg4h + 'px'
                bg4.style.top = bg4v + 'px';
                bg5.style.left = bg5h + 'px'
                bg6.style.left = bg6h + 'px'

                bg7.style.left = bg7h+ 'px'
                bg7.style.top = bg7v+'px'
                bg8.style.top = bg8v + 'px'
                bg8.style.left = bg8h + 'px'

                if(bg1h === 1670){
                    clearInterval(moving2)
                    
                    var moving3 = setInterval(function(){
                        bg1h--,bg1v++,bg2h--,bg2v++,bg3h++;
                        bg4v--,bg5h++,bg6h--;
                        bg7v++,bg8v--,bg8h++;

                        bg1.style.left = bg1h + 'px';
                        bg1.style.top = bg1v + 'px';
                        bg2.style.left = bg2h + 'px';
                        bg2.style.top = bg2v + 'px';
                        bg3.style.left = bg3h + 'px';

                        bg4.style.top = bg4v + 'px';
                        bg5.style.left = bg5h + 'px'
                        bg6.style.left = bg6h + 'px'

                        bg7.style.top= bg7v+'px'
                        bg8.style.top = bg8v + 'px'
                        bg8.style.left = bg8h + 'px'
                        if(bg1h === 900){
                            clearInterval(moving3);

                            var moving4 = setInterval(function(){
                                bg1h--,bg1v--,bg2h++,bg3v--;
                                bg4h++, bg4v--,bg5h--,bg6h++;
                                bg7h--,bg7v--,bg8h++,bg8v++;

                                bg1.style.left = bg1h + 'px';
                                bg1.style.top = bg1v + 'px';//770
                                bg2.style.left = bg2h + 'px';
                                bg3.style.top = bg3v+ 'px';

                                bg4.style.left = bg4h + 'px'
                                bg4.style.top = bg4v + 'px';
                                bg5.style.left = bg5h + 'px'
                                bg6.style.left = bg6h + 'px'
                                
                                bg7.style.top = bg7v+'px'
                                bg7.style.left= bg7h+'px'
                                bg8.style.top = bg8v + 'px'
                                bg8.style.left = bg8h + 'px'

                                if(bg1h === 0){
                                    clearInterval(moving4)
                                   backTrack(bg1h,bg1v,bg2h,bg2v,bg3h,bg3v,bg4h,bg4v,bg5h,bg5v,bg6h,bg6v,bg7v,bg7h,bg8v,bg8h)                    


                                }

                            })
                            
                        }
                    },5)
                }
            },5)


        }
    },5)
}

moveBackground();


//     document.writeln(storage[i]);
//     window.alert('Log on Successful!');
//     window.location.href="#Game-address;";
// i ++;