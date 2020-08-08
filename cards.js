function renderCards(data)
{
    var totalCards = data.length;
    var cardtemplate ="";
    for(var i =0;i<totalCards;i++)
    {
        cardtemplate +=  "<div class='column'><div class='card' style='background-color:"+data[i].card.color+"'><span>"+data[i].card.text+"</span></div></div>";
    }
    document.getElementsByClassName("container")[0].innerHTML=cardtemplate;

}

function shuffle(data) {
    let ctr = data.length;
    let temp;
    let index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = data[ctr];
        data[ctr] = data[index];
        data[index] = temp;
    }
    return data;
}

function sort(data)
{
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
