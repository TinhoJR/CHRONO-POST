$(document).ready(function() {

    let searchBtn = $("#search-btn");

      searchBtn.on("click", function() {

        let Search = $("#search");

        Search.focus()

      });

    
     let businessConsignee = $(".business-consignee");

       businessConsignee.on("click", function() {

        $(".colored-div").css("display", "inherit").css("transition", "ease-in 0.6s");

        businessConsignee.css("backgroundColor", "white");

        

       })

       


})