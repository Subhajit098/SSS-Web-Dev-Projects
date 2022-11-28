

function increment()
{
    let number=parseInt(document.querySelector("#number").innerHTML);
    document.querySelector("#number").innerHTML=number+1;
}

function decrement()
{
    let number=parseInt(document.querySelector("#number").innerHTML);
    document.querySelector("#number").innerHTML=number-1;
}

function neutral()
{
    document.querySelector("#number").innerHTML=0;
}

