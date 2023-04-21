const coin_abbrivation_list = ["BTC", "ETH", "USDT", "BNB", "USDC", "ADA", "DOGC"];

$(document).ready(function(){
    var count = 0, state = 0;

    //when user click on main-menu in humber-menu, function that rotate down-arrow symbol
    var initSubMenu = function () {
        $('.expend-sub-menu .sub-menu-content').css('height', '0px');
        $('.arrow-icon').removeClass('rotate-180')
        count = 0;
    }

    //
    $("button[aria-haspopup='menu']").click(function(){
        $("button[aria-haspopup='menu']").next().fadeOut(200);
        $(this).next().fadeToggle(200);
    });

    //when click on humbger button, display humber menu.
    $('.humbger-button').on('click', function () {
        initSubMenu();
        $('#humbger-menu').fadeIn(500);
        $('body').css("overflow", "hidden");
    });

    //when click on close button of humbger part, close menu.
    $('.humbger-menu-close').on('click', function () {
        initSubMenu();
        $('body').css("overflow", "auto");
        $('#humbger-menu').fadeOut(500);
    });

    //when click on other part of main menu, disappear submenu.
    $('body').on('click', '', function (event) {
        if (event.target.className.includes('drop-button')) {
        } else {
            $('.drop-down-menu').hide();
        }

        if (event.target.className.includes('transaction_type')) {
        } else {
            $('.transaction_type').next().hide();
        }
    });


    $('.expend-sub-menu').on('click', function() {
        var id = $(this).data('id');
        if(parseInt(count) % 2 == 0) {
            $('[data-id=' + id + '] .sub-menu-content').css('height', '140px');
            $('[data-id=' + id + '] .arrow-icon').addClass('rotate-180');
            count = 1;
        } else {
            $('[data-id=' + id + '] .sub-menu-content').css('height', '0px');
            $('[data-id=' + id + '] .arrow-icon').removeClass('rotate-180');
            count = 0;
        }
    });

    $('.stacked-button').on('click', function() {
        if(parseInt(state) == 0) {
            $('.stacked-only').removeClass('bg-gray-200 dark:bg-gray-500');
            $('.stacked-only').addClass('bg-brand dark:bg-white');
            $('.stacked-only span').css('transform','translate(20px, 0)');
            state = 1;
        } else {
            $('.stacked-only').removeClass('bg-brand dark:bg-white');
            $('.stacked-only').addClass('bg-gray-200 dark:bg-gray-500');
            $('.stacked-only span').css('transform','translate(0, 0)');
            state = 0;
        }
    });

    $(".transaction_type").click(function(){
        $(this).next().slideToggle("slow");
    })

    $("div[role=radio]").click(function(){
        $("div[role=radio]").toggleClass("text-white bg-brand text-brand shadow-large");
    });

    $(".farm_transaction").click(function(){
        $(this).next().slideToggle(200);
    });

    //filter coin list when type coin name in search input.
    $("#coin_search").keyup(function(){
        var text = $(this).val().toLowerCase();
        
        $("ul[role=listbox] li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(text) > -1)
        });
    });

    //when click on coin symbol, 
    //display coin list for search coin.
    //assign the value of to, from dir.
    var dir = "";
    $(".coin_symbol").click(function(){
        dir = $(this).attr("role-dir");
        $(".select_coin_modal").removeClass("hidden");
    });

    //exchange coin symbol in the from, to part when user click on coin symbol
    $("li[role=roleitem]").click(function(){
        let index = $(this).attr("tabindex");
        let coin_abbrivation = coin_abbrivation_list[index];
        let coin_svg = $(this).children(":first").html();
        $("button[role-dir=" + dir + "]").children(":first").html(coin_svg);
        $("button[role-dir=" + dir + "]").children("span").html(coin_abbrivation);
        $(".select_coin_modal").addClass("hidden");
    });

    //disappear coin search modal.
    $(".select_coin_modal").click(function(){
        $(".select_coin_modal").addClass("hidden");
    })

    // shift place of from, to position.
    $(".swap").click(function(){
        $(this).parent().toggleClass("flex-col-reverse");
        $(this).parent().toggleClass("flex-col");
    })
});