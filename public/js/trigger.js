$(function (){
  var datas;
  var url = 'http://www.youtube.com/embed/';
  $('button').on('click', function (){
    // $.get('/api/youtube/search')
    //   .done(function(data) {
    //     datas = $.parseJSON(data);
    //     console.log({data : datas.items[0]}); // do the shaking api
    //     $('iframe').attr('src', url + datas.items[0].id.videoId + '?autoplay=true');
    //   });
    $.get('/api/twitter/trends')
      .done(function(data) {
        datas = $.parseJSON(data);
        console.log({data : datas}); // do the shaking api
      });
  });
  
});