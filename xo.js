let field = document.querySelector(".field");
let xoDivs = [], xoSquars = [];
let user = 0 ;

function create_Xo_Squars(xoSquars , xoDivs)
{
for(let i = 0 ; i < 3 ; i ++)
{
xoSquars[i] = [];
for(let l = 0 ; l < 3 ; l++)
{
    let xoDiv = document.createElement("div");
    xoDiv.classList.add("child");
    if(i == 0)
    xoDiv.classList.add("top");
    if(l==0)
    xoDiv.classList.add("left");
    if(i==2)
    xoDiv.classList.add("bottom");
    if(l == 2 )
    xoDiv.classList.add("right");
    xoSquars[i].push(xoDiv);
    xoDivs.push(xoDiv)
    field.append(xoDiv);
}
}
}

function main_function(xoDivs)
{
    xoDivs.forEach(x=> {
        x.onclick = function()
        {
            if(!checker(xoSquars))
            {
            if(user%2==0)
            {
            xPlayer(x);
            checker(xoSquars);
            console.log(checker(xoSquars));
            }
            else{
            oPlayer(x);
            checker(xoSquars);
            console.log(checker(xoSquars));
            }
        }
        }
    });
}
function xPlayer(x)
{
    if(x.innerHTML=="")
    {
    x.innerHTML = "X";
    x.classList.add("xDiv");
    user+=1;
    return user;
}
}
function oPlayer(x)
{
    if(x.innerHTML =="")
    {x.innerHTML = "O";
    x.classList.add("oDiv");
    user+=1;
return user;}
}
function checker(xo)
{
    for(let i = 0 ; i < 3 ; i++)
{
    if(xo[i][0].innerHTML===xo[i][1].innerHTML&&xo[i][0].innerHTML===xo[i][2].innerHTML&&xo[i][0].innerHTML!=="")
    {
        xo[i][0].classList.add("win")
        xo[i][1].classList.add("win")
        xo[i][2].classList.add("win")
        return `Player ${xo[i][0].innerHTML } Win`
    }
    if(xo[0][i].innerHTML===xo[1][i].innerHTML&&xo[0][i].innerHTML===xo[2][i].innerHTML&&xo[0][i].innerHTML!=="")
    {
        xo[0][i].classList.add("win")
        xo[1][i].classList.add("win")
        xo[2][i].classList.add("win")
        return `Player ${xo[0][i].innerHTML } Win`
    }
    if(xo[0][0].innerHTML===xo[1][1].innerHTML&&xo[2][2].innerHTML===xo[1][1].innerHTML&&xo[1][1].innerHTML!=="")
    {
        xo[0][0].classList.add("win")
        xo[1][1].classList.add("win")
        xo[2][2].classList.add("win")
    return `Player ${xo[1][1].innerHTML} Win`
    }
    if(xo[0][2].innerHTML===xo[1][1].innerHTML&&xo[2][0].innerHTML===xo[1][1].innerHTML&&xo[1][1].innerHTML!=="")
    {
        xo[0][2].classList.add("win")
        xo[2][0].classList.add("win")
        xo[1][1].classList.add("win")
    return `Player -${xo[1][1].innerHTML}- Win`
    }
    
}}
create_Xo_Squars(xoSquars , xoDivs);
main_function(xoDivs)
let restart = document.createElement("button");
restart.append(document.createTextNode("RESTART"))
document.querySelector(".game").append(restart)
restart.onclick = function()
{
    xoDivs.forEach(e=>
    {
        e.innerHTML="";
        user = 0 ;
        e.classList.remove("win");
if(e.classList.contains("xDiv"))
e.classList.remove("xDiv")
if(e.classList.contains("oDiv"))
e.classList.remove("oDiv")
    })
}