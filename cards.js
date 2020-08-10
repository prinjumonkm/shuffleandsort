function renderCards(data)
{
    if(!data) return;
    var totalCards = data.length;
    var cardtemplate ="";
    for(var i =0;i<totalCards;i++)
    {
        cardtemplate +=  "<div class='column'><div class='card' style='background-color:"+data[i].card.color+"'><span>"+data[i].card.text+"</span></div></div>";
    }
    if(document.getElementsByClassName("container").length>0)
    {
        document.getElementsByClassName("container")[0].innerHTML=cardtemplate;
    }
    cardtemplate = null;
    totalCards = null;
}
/** shuffle method */
function shuffle(data) {
    if(!data) return;
    let datalength = data.length;
    let temp;
    let index;
    while (datalength > 0) {
        index = Math.floor(Math.random() * datalength);
        datalength--;
        temp = data[datalength];
        data[datalength] = data[index];
        data[index] = temp;
    }
    return data;
}
/** Sort method */
function sort(data)
{
    if(!data) return;
    data.sort(function(a, b){return a.card.value - b.card.value});
    return data;
}

function onShuffleButtonClick()
{
    renderCards(shuffle(data.cards));
}

function onSortButtonClick()
{
    renderCards(sort(data.cards));
}

function onLaunch()
{
    renderCards(sort(data.cards));
}
