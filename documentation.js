
pg = document.getElementById("page")
pg.addEventListener("load", function () {
        btns = document.getElementById("modelType").children
        imgs = document.getElementsByClassName("svgimg")
        for (let i = 0; i < btns.length; i++) {
                btns[i].onclick = function () {
                        var id = this.id
                        imgs[0].style.display = 'none'
                        imgs[1].style.display = 'none'
                        imgs[2].style.display = 'none'
                        imgs[3].style.display = 'none'
                        var cont = pg.contentDocument
                        if (id == "Decay") {
                                imgs[0].style.display = 'block'
                                cont.getElementById("decay").scrollIntoView();
                        } else if (id == "Aesthetics") {
                                imgs[1].style.display = 'block'
                                cont.getElementById("aesthetics").scrollIntoView();
                        } else if (id == "Termites") {
                                imgs[2].style.display = 'block'
                                cont.getElementById("termites").scrollIntoView();
                        } else if (id == "Integrity") {
                                imgs[3].style.display = 'block'
                                cont.getElementById("integrity").scrollIntoView();
                        }
                }
        }
})


var a = document.getElementById("alphasvg");
a.addEventListener("load", function () {
        // get the inner DOM of alpha.svg
        var svgDoc = a.contentDocument;
        // get the inner element by id
        var delta = []
        for (let i = 0; i < 14; i++) {
                delta[i] = svgDoc.getElementById("id" + i + "a");
        }
        for (let i = 0; i < delta.length; i++) {
                delta[i].style.strokeWidth = 1
                delta[i].style.stroke = "rgb(255,255,255)"
                delta[i].style.fill = 'black'
        }
        // add behaviour
        // Highlight on hover
        for (let i = 0; i < delta.length; i++) {
                delta[i].addEventListener("mouseenter", function () {
                        //alert('hello world!')
                        delta[i].style.fill = 'green'
                        delta[i].style.strokeWidth = 5
                        delta[i].style.stroke = "rgb(0,125,0)"
                }, false);
                delta[i].addEventListener("mouseleave", function () {
                        //alert('hello world!')
                        delta[i].style.fill = ''
                        delta[i].style.strokeWidth = 1
                        delta[i].style.stroke = "rgb(255,255,255)"
                }, false);
                delta[i].addEventListener("click", function () {
                        var pageId = document.getElementById("page");
                        var content = pageId.contentDocument
                        content.getElementById(delta[i].id).scrollIntoView();
                }, false);
        }
        //Go to section on click
}, false);

//Second figure
var b = document.getElementById("alphasvg2");
b.addEventListener("load", function () {
        // get the inner DOM of alpha.svg
        var svgDoc = b.contentDocument;
        // get the inner element by id
        var delta = []
        for (let i = 0; i < 10; i++) {
                delta[i] = svgDoc.getElementById("id" + i + "b");
        }
        for (let i = 0; i < delta.length; i++) {
                delta[i].style.strokeWidth = 1
                delta[i].style.stroke = "rgb(255,255,255)"
                delta[i].style.fill = 'black'
        }
        // add behaviour
        // Highlight on hover
        for (let i = 0; i < delta.length; i++) {
                delta[i].addEventListener("mouseenter", function () {
                        //alert('hello world!')
                        delta[i].style.fill = 'green'
                        delta[i].style.strokeWidth = 5
                        delta[i].style.stroke = "rgb(0,125,0)"
                }, false);
                delta[i].addEventListener("mouseleave", function () {
                        //alert('hello world!')
                        delta[i].style.fill = ''
                        delta[i].style.strokeWidth = 1
                        delta[i].style.stroke = "rgb(255,255,255)"
                }, false);
                delta[i].addEventListener("click", function () {
                        //alert('hello world!')
                        var pageId = document.getElementById("page");
                        var content = pageId.contentDocument
                        content.getElementById(delta[i].id).scrollIntoView();
                }, false);
        }
        //Go to section on click
}, false);


//Second figure
var c = document.getElementById("alphasvg3");
c.addEventListener("load", function () {
        // get the inner DOM of alpha.svg
        var svgDoc = c.contentDocument;
        // get the inner element by id
        var delta = []
        for (let i = 0; i < 10; i++) {
                delta[i] = svgDoc.getElementById("id" + i + "c");
        }
        for (let i = 0; i < delta.length; i++) {
                delta[i].style.strokeWidth = 1
                delta[i].style.stroke = "rgb(255,255,255)"
                delta[i].style.fill = 'black'
        }
        // add behaviour
        // Highlight on hover
        for (let i = 0; i < delta.length; i++) {
                delta[i].addEventListener("mouseenter", function () {
                        //alert('hello world!')
                        delta[i].style.fill = 'green'
                        delta[i].style.strokeWidth = 5
                        delta[i].style.stroke = "rgb(0,125,0)"
                }, false);
                delta[i].addEventListener("mouseleave", function () {
                        //alert('hello world!')
                        delta[i].style.fill = ''
                        delta[i].style.strokeWidth = 1
                        delta[i].style.stroke = "rgb(255,255,255)"
                }, false);
                delta[i].addEventListener("click", function () {
                        //alert('hello world!')
                        var pageId = document.getElementById("page");
                        var content = pageId.contentDocument
                        content.getElementById(delta[i].id).scrollIntoView();
                }, false);
        }
        //Go to section on click
}, false);



//Second figure
var d = document.getElementById("alphasvg4");
d.addEventListener("load", function () {
        // get the inner DOM of alpha.svg
        var svgDoc = d.contentDocument;
        // get the inner element by id
        var delta = []
        for (let i = 0; i < 6; i++) {
                delta[i] = svgDoc.getElementById("id" + i + "d");
        }
        for (let i = 0; i < delta.length; i++) {
                delta[i].style.strokeWidth = 1
                delta[i].style.stroke = "rgb(255,255,255)"
                delta[i].style.fill = 'black'
        }
        // add behaviour
        // Highlight on hover
        for (let i = 0; i < delta.length; i++) {
                delta[i].addEventListener("mouseenter", function () {
                        //alert('hello world!')
                        delta[i].style.fill = 'green'
                        delta[i].style.strokeWidth = 5
                        delta[i].style.stroke = "rgb(0,125,0)"
                }, false);
                delta[i].addEventListener("mouseleave", function () {
                        //alert('hello world!')
                        delta[i].style.fill = ''
                        delta[i].style.strokeWidth = 1
                        delta[i].style.stroke = "rgb(255,255,255)"
                }, false);
                delta[i].addEventListener("click", function () {
                        //alert('hello world!')
                        var pageId = document.getElementById("page");
                        var content = pageId.contentDocument
                        content.getElementById(delta[i].id).scrollIntoView();
                }, false);
        }
        //Go to section on click
}, false);