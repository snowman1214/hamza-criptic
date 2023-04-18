const coin_abbrivation_list = ["BTC", "ETH", "USDT", "BNB", "USDC", "ADA", "DOGC"];

$(document).ready(function(){
    $("button[aria-haspopup='menu']").click(function(){
        $("button[aria-haspopup='menu']").next().fadeOut(200);
        $(this).next().fadeToggle(200);
    });

    $("div[role=radio]").click(function(){
        $("div[role=radio]").toggleClass("text-white bg-brand text-brand shadow-large");
    });

    $(".farm_transaction").click(function(){
        $(this).next().slideToggle(200);
    });
    
    $("#coin_search").keyup(function(){
        var text = $(this).val().toLowerCase();
        
        $("ul[role=listbox] li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1)
        });
    });

    var dir = "";
    $(".coin_symbol").click(function(){
        dir = $(this).attr("role-dir");
        $(".select_coin_modal").removeClass("hidden");
    });

    $("li[role=roleitem]").click(function(){
        let index = $(this).attr("tabindex");
        let coin_abbrivation = coin_abbrivation_list[index];
        let coin_svg = $(this).children(":first").html();
        $("button[role-dir=" + dir + "]").children(":first").html(coin_svg);
        $("button[role-dir=" + dir + "]").children("span").html(coin_abbrivation);
        $(".select_coin_modal").addClass("hidden");
    })

    $(".swap").click(function(){
        let prev_html = $(this).next().html();
        $(this).next().html($(this).prev().html());
        $(this).prev().html(prev_html);
    })
});