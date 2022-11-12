//selection and storing html elements in a variable.
let firstName=document.querySelector('#firstName');
let lastName =document.querySelector('#lastName');
let city =document .querySelector('#cityName');
let country = document.querySelector('#countryName');


//contains the various properties of users.
let userInfo =[
    {SlNo: '', FirstName:'Shivaraj', LastName: 'Kharvi', City:'Bangalore', Country: 'India'},
    {SlNo: '', FirstName:'Sandeep', LastName: 'Reddy', City:'Chittur', Country: 'India'},
    {SlNo: '', FirstName:'Pavan', LastName: 'Raj', City:'Channapattana', Country: 'India'},
    {SlNo: '', FirstName:'Sagar', LastName: 'Gowda', City:'Hassan', Country: 'India'},
]

//------------------------------------------------------------------------------------------->


//creates the table head and assigns the header value.
function generateTableHead(table,data){
    let thead = table.createTHead(); //creates the table head element.
    let row = thead.insertRow(); //inserts a new row

    //the for...of loop iterates through the values of an iterable object.
    for(let key of data){
        let th = document.createElement('th');
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

//------------------------------------------------------------------------------------------->


//creates a table and assigns the value. 
function generateTable(table,data){
    //inside the for...of loop we will create a new row for every item.
    for(let element of data){
        let row = table.insertRow();
        //The inner loop iterates over every key of the current object.
        for(key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);//creates a new text node.
            cell.appendChild(text); //appending the text node to the cell.
        }
    }
}

//------------------------------------------------------------------------------------------->


//adds new row at the top of the existing row.
function addTopRow(){

    //validation code.
    if(firstName.value==''||lastName.value==''||countryName.value==''||cityName==''){
        alert('Fill in the required fields to continue..!');
    }
    else{
        
    let row = table.insertRow(1);
    
    //inserting a cell into the row.
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);

    //taking user input and storing it in the specified cell.
    c1.innerHTML = ``;
    c2.innerHTML = `${firstName.value}`;
    c3.innerHTML = `${lastName.value}`;
    c4.innerHTML = `${city.value}`;
    c5.innerHTML = `${country.value}`;
    }
}

//------------------------------------------------------------------------------------------->


//adds new row at the end of the existing row.
function addBottomRow(){
    //validation code.
    if(firstName.value==''||lastName.value==''||countryName.value==''||cityName==''){
        alert('Fill in the required fields to continue..!');
    }
    else{
    //index of the end row.
    let currRows = table.rows.length;
    let row = table.insertRow(currRows);

    //inserting a cell into the row.
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);

    //taking user input and storing it in the specified cell.
    c1.innerHTML = ``;
    c2.innerHTML = `${firstName.value}`;
    c3.innerHTML = `${lastName.value}`;
    c4.innerHTML = `${cityName.value}`;
    c5.innerHTML = `${countryName.value}`;
    }
}

//------------------------------------------------------------------------------------------->


let table = document.querySelector("table");
let data = Object.keys(userInfo[0]);
generateTableHead(table,data);
generateTable(table,userInfo);

//------------------------------------------------------------------------------------------->
