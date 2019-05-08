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
               let link = (data.results[i].short_url)
               
               console.log(data)
               $('article').append("<a href = '" + link + "' class ='box" + i + " media'><p>" + abstract + "</p></a>")
               $(`.box${i}`).css('background-image', 'url("' + image + '")')
               $(`.box${i}`).css('background-size', "cover")   
               $(`.box${i}`).css('height', "600px")
               $(`.box${i}`).css('display', "flex")
               $(`.box${i}`).css('align-items', "flex-end")
               $('a').css("color", "white")
               $(`.box${i} p`).css("background-color", "rgba(0, 0, 0, 0.5)")
               $(`.box${i} p`).css("margin-bottom", "0")
             
               
            
        
               
            
           }
        
            
           
        })
            
    
         
})
