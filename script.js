
//calcualtion of ractangular
function rectangle(){

    let w= document.getElementById('ractangle-w').value;
    let i= document.getElementById('ractangle-i').value;
    let calculate =w*i;
    return calculate;
}

let rectanglebtn=document.getElementById('ractangle-btn').addEventListener('click',function(){

    let result=rectangle();

    let resultarea=document.getElementById('areaCalculation');

    let p= document.createElement('p');

    p.innerText="Rectangle area= "+ result
    resultarea.appendChild(p);

})






// calcualtion of triangle
document.getElementById("triangle-btn").addEventListener('click',function(){

    let inputB= document.getElementById('triangle-b').value;

    let inputH= document.getElementById('triangle-h').value;
    let areaCalculation=0.5 * inputB * inputH;

    //selecting area calculation;
    let resultarea=document.getElementById('areaCalculation');

    let p= document.createElement('p');
    p.innerText="Area (A) = 0.5 x" + inputB +"x"+inputH+"="+areaCalculation;
    resultarea.appendChild(p);



}) 
