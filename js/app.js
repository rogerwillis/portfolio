$(document).ready(function () {


    $(window).scroll(function () {
        var posTop = $(window).scrollTop() - $('.feature').offset().top;
        console.log(posTop);
        if (posTop > 20) {
            $(".logo img").css({ height: '30px' });
            $("header").css({ padding: '10px' });
            $("nav").css({ padding: '0' });
            $("nav ul li a").css({ padding: '5px 15px' });
        } else {
            $(".logo img").css({ height: '' });
            $("header").css({ padding: '' });
            $("nav").css({ padding: '' });
            $("nav ul li a").css({ padding: '' });

        }
    });

    

    var portfolio = [{
        "id": "1",
        "img": "http://placehold.it/400x200",
        "name": "Hot or Cold App",
        "url": "http://rogerwillis.github.io/hot-or-cold/index.html"
    },
   {
       "id": "2",
       "img": "http://placehold.it/400x200",
       "name": "Google Clone App",
       "url": "http://rogerwillis.github.io/google-clone/"
   },
    {
        "id": "3",
        "img": "http://placehold.it/400x200",
        "name": "Street Fighter App",
        "url": "http://rogerwillis.github.io/jquery-streetfighter/main.html"
    }, {
        "id": "4",
        "img": "http://placehold.it/400x200",
        "name": "Shopping Application",
        "url": "http://rogerwillis.github.io/shopping-app/index.html"
    },
   {
       "id": "5",
       "img": "http://placehold.it/400x200",
       "name": "Fizz Buzz",
       "url": "http://rogerwillis.github.io/fizzbuzz-refactor/"
   },
    {
        "id": "6",
        "img": "http://placehold.it/400x200",
        "name": "Quiz App",
        "url": "http://rogerwillis.github.io/Quiz-App/index.html"
    },
    {
        "id": "7",
        "img": "http://placehold.it/400x200",
        "name": "Stackoverflow Rep Builder",
        "url": "http://rogerwillis.github.io/stackoverflow-rep-builder/"
    },
    {
        "id": "8",
        "img": "http://placehold.it/400x200",
        "name": "API Hack",
        "url": "http://rogerwillis.github.io/APIHack/index.html"
    }];



    //for (var key in portfolio) {


    //    console.log(portfolio[key].id);

    //    $(".portfolio-list").append("<div class='col-md-4 col-sm-4 col-xs-4 text-center'><a href=" + portfolio[key].url + ">" +
    //        "<img src=" + portfolio[key].img + " class='img-responsive' /></a></div>");

    //}

});
