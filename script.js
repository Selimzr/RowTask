
//Prevent right click

document.oncontextmenu = () => {
    alert("Don't try right click")
    return false
}

document.onkeydown = e => {
    if (e.key == "F12"){
        alert("Don't try to inspect")
        return false
    }
    if (e.ctrlKey && e.key == "u"){
        alert("Don't try to view page sources")
        return false
    }
    if (e.ctrlKey && e.key == "c"){
        alert("Don't try to copy from the page")
        return false
    }
    if (e.ctrlKey && e.key == "v"){
        alert("Don't try to paste anything on the page")
        return false
    }
}