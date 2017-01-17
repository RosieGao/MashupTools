$(document).ready(function() {
    $("#mashupMode").on("click", function(){
        $("body").removeClass("previewLayout").addClass("mashupLayout");
    });
    $("#previewMode").on("click", function(){
        $("body").removeClass("mashupLayout").addClass("previewLayout");
    });
    $("#clear").on("click", function(){
        $(".canvas").empty();
    });

    $(".defaultSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize")
    });
    $(".lgSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("lgSize")
    });
    $(".mdSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("mdSize")
    });
    $(".smSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("smSize")
    });
    $(".xsSizeOption").on("click", function(){
        $(".canvas").removeClass("lgSize mdSize smSize xsSize").addClass("xsSize")
    });

    $(".canvas").on("click", ".removeButton", function(){
        $(this).parent().remove();
    });
});