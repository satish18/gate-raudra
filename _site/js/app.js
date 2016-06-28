(function() {
  $(function() {
    return $('#videos .video-nav .items .item').click(function() {
      var videoFrame;
      if (!$(this).hasClass('active')) {
        $('#videos .video-nav .items .item').removeClass('active');
        $(this).addClass('active');
        videoFrame = "<iframe  src='" + this.dataset.videoUrl + "' frameborder='0' allowfullscreen></iframe>";
        return $('#videos .video-container').html(videoFrame);
      }
    });
  });

}).call(this);
