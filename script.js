// making Parallelogram

function ractangleBtnId(btnIdAdding,inputValueID,inputValueID2){


    document.getElementById(btnIdAdding).addEventListener('click',function(){
        let a= inputValue(inputValueID);
        let b = inputValue(inputValueID2);

        //now making calculation it for triangle
        let Area=a *b;
        
        // let Area=0.5 * a *b;


       
        console.log(Area);
        
        resultCal(Area);


       


    })
 }



// now making of ractangular
function ractangleBtnId(btnIdAdding,inputValueID,inputValueID2){


    document.getElementById(btnIdAdding).addEventListener('click',function(){
        let a= inputValue(inputValueID);
        let b = inputValue(inputValueID2);

        //now making calculation it for triangle
        let Area=a *b;
        
        // let Area=0.5 * a *b;


       
        console.log(Area);
        
        resultCal(Area);


       


    })
 }

 //calculation of raectangualar
 ractangleBtnId('ractangle-btn','ractangle-w','ractangle-i');

 //calculation of parallelogram
 ractangleBtnId('Parallelogram-btn','Parallelogram-b','Parallelogram-h');





//function for triengular you just need to tweak funtion name and match logic a little a bit . all thigs is set
 function btnId(btnIdAdding,inputValueID,inputValueID2){


    document.getElementById(btnIdAdding).addEventListener('click',function(){
        let a= inputValue(inputValueID);
        let b = inputValue(inputValueID2);

        //now making calculation it for triangle
        let Area=0.5 * a *b;
        
        // let Area=0.5 * a *b;


       
        console.log(Area);
        
        resultCal(Area);


       


    })
 }



//button even added now all i just need make math function and call it 

btnId('triangle-btn','triangle-b','triangle-h')





 //now i am makeing dynamic  input function

 function inputValue(inputValueID){
    let value= document.getElementById(inputValueID).value;

    return value;


}

//here i just adding area calculation part which it  the appending child;

function resultCal(Area){
    let resultArea= document.getElementById('areaCalculation');

    let p=document.createElement('p');

    p.innerText=" Result =" + Area;

    resultArea.appendChild(p);

}


