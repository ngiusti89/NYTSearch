
$('.btn-primary').on('click', function (event) {
  event.preventDefault();
    var searchWord = $('#search-input').val().trim()
    var queryURL =  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchWord}&api-key=lLQSwGu8x97Vpxb82jDq9NHWxswIqhiq`
$.ajax({
    url: queryURL,
   method: "GET"
 }).then(function (response){
   console.log(response)
   
 });
})