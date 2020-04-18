//creating a close button fr the lists that are not created
var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++) {
    var spanTag = document.createElement('sapn');
    var txt = document.createTextNode("\u00D7");
    spanTag.className = ("close");
    spanTag.appendChild(txt);
    myList[index].appendChild(spanTag);
}
//close button
var closeButton = document.getElementsByClassName("close");

for (i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function () {
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}

//checked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//creating todo fuction
function createNewElement() {
    var li = document.createElement("li");
    var theInputValue = document.getElementById("input").value;
    var textNode = document.createTextNode(theInputValue);
    li.appendChild(textNode);
    if (theInputValue === '') {
        alert("THIS CANNOT BE IMPTYE!!")
    } else {
        document.getElementById("ul").appendChild(li);
    }
    document.getElementById("input").value = "";
    var thePanTag = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    thePanTag.className = "close";
    thePanTag.appendChild(txt);
    li.appendChild(thePanTag);


    //removing items onclick
    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function () {
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }

}