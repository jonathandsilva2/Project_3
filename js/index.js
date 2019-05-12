$(document).ready(function () {
    // $('select').selectric(); *omitted selectric menu selector due to bugs, to be added later

    $('select').on('change', function () {
        let section = $('select option:selected').val();

        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=uKKnzk0uk0UArBEk8qp1PDWNW3kZfPFt',
            success: function () {
                $('.loader').append('<img src="assets/images/ajax-loader.gif" alt="loading">') // upon connection with the API, append a loader image
                $('main').addClass('newContainer') // adds new classes to different elements related to the header, so that the header becomes smaller when articles are displayed
                $('section').addClass('newSection');
                $('img').addClass('newImg');
                $('h6').addClass('newH6');
                $('select').addClass('newSelect');
                $('.container').css('padding-top', '0');
            }
        })

            .done(function (data) {


                $('article').html('');

                let articles = [];

                for (let i = 0; data.results.length - 1; i++) { // creates an array of up to 12 articles that contain an image
                    if (data.results[i].multimedia[4] !== undefined) {
                        articles.push(data.results[i])
                    } else if (data.results[i].multimedia[4] === undefined) {''
                    }
                    if (articles.length === 12) {
                        break;
                    }

                }
               


                setTimeout(function () {  // sets a delay towards displaying the articles to allow a loading gif to play.
                    $('.loader').html('')

                    for (let i = 0; i <= 11; i++) {  //loops through the articles array and appends all relavant information on the webpage
                        let abstract = (articles[i].abstract)
                        let image = (articles[i].multimedia[4].url)
                        let link = (articles[i].short_url)


                        $('article').append('<a href = "' + link + '" class ="box' + i + ' media"><p>' + abstract + '</p></a>')
                        $(`.box${i}`).css('background-image', 'url("' + image + '")')
                        $(`.box${i}`).css('background-size', 'cover')
                        $(`.box${i}`).css('background-position', 'center center')
                        $(`.box${i}`).css('height', '500px')
                        $(`.box${i}`).css('display', 'flex')
                        $(`.box${i}`).css('align-items', 'flex-end')
                        $('a').css('color', 'white')
                        $(`.box${i} p`).css('background-color', 'rgba(0, 0, 0, 0.5)')
                        $(`.box${i} p`).css('margin-bottom', '0')



                    }
                }, 200)


            })

            .fail(function () {
                $('.loader').append('<h2>There was an error loading the page.</h2>');

            })

    });
})