(function ($) {
    $(document).ready(function(){   
        var pathname = window.location.pathname.replace(/^\/|\/$/g, '');
        var menuElement = "";
        if(pathname == ""){
            menuElement = "home";
        }else{
            menuElement = pathname;
        }
        $('#menu-' + menuElement).addClass("active");

        $('.postBody img').each(function() { 
            $(this).addClass("img-responsive");
        });

        $('.postBody').marker('adminMongo');

        $('#top-link').topLink({
            min: 400,
            fadeSpeed: 500
        });

        $('table').each(function(i, block) {
            $(this).addClass("table table-responsive");
        });

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        $(".postBody :header").each(function() {
            if($(this).get(0).tagName != "H1"){
                var indenter = "";
                if($(this).get(0).tagName != "H2"){
                    indenter = "&nbsp; > &nbsp;";
                }
                var headerText = $(this).text().replace("#","").replace(/^\s+/g,"");
                $('.sidebar > ul').append('<li class="list-group-item">' + indenter + '<a href="#' + headerText + '">' + headerText + '</li>');
            }
        });
    });

}(jQuery));