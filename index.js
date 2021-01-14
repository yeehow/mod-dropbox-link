var Modresults = [];
var input = document.getElementById("SearchMod");
var list = document.getElementById("list");

input.addEventListener("keyup", function (event) {
    if (13 == 13) {
        event.preventDefault();
        Modresult = document.getElementById("find");
        console.log(Modresult)
        
    }
});




let SearchMod = (text) => {
    text = text.value.toLowerCase();
    find();
}



//code to search the mod

async function find() {

    clearMods();

    var get = await fetch(`https://api.krunker.io/search?type=mod&val=${input.value}`);
    var json = await get.json();

    json.data.forEach(element => {
        addMod(element);
    });
}

let addMod = (element) => {
    scroll = true;
    
    var div = document.createElement("div");
    var link = document.createElement("a");
    

    div.className = "mod"

    if (element.mod_url == "ua") {
        var img = document.createElement("div");
        link.href = `https://user-assets.krunker.io/md${element.mod_id}/mod.zip`
    } else {
        link.href = element.mod_url;
    }

    var img = document.createElement("img");
    img.src = `https://user-assets.krunker.io/md${element.mod_id}/thumb.png`;
    div.appendChild(img);

    var name = document.createElement("p");
    name.textContent = element.mod_name;
    div.appendChild(name);

    var creator = document.createElement("p");
    creator.innerHTML = `<span>by </span>${element.creatorname}`;
    div.appendChild(creator);

    link.appendChild(div);

    list.appendChild(link);
}

function clearMods() {
    list.innerHTML = "";
}

find();








    