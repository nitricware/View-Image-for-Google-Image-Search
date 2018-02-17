document.addEventListener("click", function(e){
    let tagType = e.target.localName;
    if (tagType == "img") {
        let tagHref = e.originalTarget.offsetParent.attributes[1].value;
        let hrefContent = tagHref.split("&");
        let imageSource = hrefContent[0].substr(15);
        let sourceURL = unescape(imageSource);        
        let blackbox = document.getElementById("irc_cc");
        let buttonTable = blackbox.getElementsByClassName("irc_but_r");
        for (var i = 0; i < buttonTable.length; i++) {
            var element = buttonTable[i];
            var nwbutton = element.getElementsByClassName("nwaddedbutton");
            if (nwbutton.length > 0){
                nwbutton[0].setAttribute("href", sourceURL)
            } else {
                let row = element.getElementsByTagName("tr")[0];
                let cell = row.insertCell();
                cell.innerHTML = "<a id=\"nwaddedbutton\" class=\"nwaddedbutton i17628\" role=\"button\" href=\""+sourceURL+"\" target=\"_blank\">Bild anzeigen</a>";
            }
        }
    }
})