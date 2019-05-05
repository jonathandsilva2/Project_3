$("select").on("change", function () {
    let section = $("select option:selected").val();
  
        // $.getJSON("https://api.nytimes.com/svc/topstories/v2/" + section +".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt")
       
        $.ajax({
            method: 'GET',
            url: "https://api.nytimes.com/svc/topstories/v2/" + section +".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt",
            success: function () {

            }
        })

        .done(function (data) {
           $('article').html("");   
            for (i = 0; i <= 11; i++){
               let abstract = (data.results[i].abstract)
               let image = (data.results[i].multimedia[4].url)
               $('article').append("<div class ='box" + i + " media'><p>" + abstract + "</p></div>")
               $(`.box${i}`).css('background-image', 'url("' + image + '")')
               $(`.box${i}`).css('background-size', "cover")
            //    $(`.box${i}`).css('width', '25%')
               $(`.box${i}`).css('height', "400px")
               $(`.box${i}`).css('display', "flex")
               $(`.box${i}`).css('align-items', "flex-end")
               $(`.box${i} p`).css("background-color", "rgba(0, 0, 0, 0.5)")
               $(`.box${i} p`).css("margin-bottom", "0")
               
               
        //        $(window).resize(function(){

        //          if ($(window).width() >= 480 && $(window).width() < 600 ) {  
         
        //              $(`.box${i}`).css('width', '100%')
        //        $(`.box${i}`).css('height', "400px")
        //        console.log(("$(window).width() >= 480 && $(window).width() < 600 ")
         
        //        )}
                     
        //     else      if ($(window).width() >= 600 && $(window).width() < 1240 ) { 
        //         $(`.box${i}`).css('width', '33.33%')
        //         $(`.box${i}`).css('height', "400px")
        //         console.log("$(window).width() >= 600 && $(window).width() < 1240 ")
        //     }
        //     else if ($(window).width() >= 1240 ) { 
        //         $(`.box${i}`).css('width', '25%')
        //         $(`.box${i}`).css('height', "400px")
        //         console.log("$(window).width() >= 1240 ")
        //     }

        //  });
               
               
            
           }
        
            
           
        })
            
    
         
})
// $(document).ready(function(){
//     $('select').on('change',function(){
        
//         var optionText = $("select option:selected").text();
//         $.getJSON("https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt",
//                 function() {
//                    $('.loading').append('success')
//                })
//                  .done(function (data) {
                  
//                    $.each(data, function (index, repo ) {
//                        console.log(data)
//                        name = repo.name
//                        name2 = repo.forks
//                         $('ul').append('<li>' + name + '</li>')
//                     ;
                        
//                     })
//                 })
//                   .fail(function(){
//                       $('.repo-list').append('<li>' + 'NOPE' + '</li>');
//     });
// ;})