(function() {
  $(function() {
    $('#videos .video-nav .items .item').click(function() {
      var videoFrame;
      if (!$(this).hasClass('active')) {
        $('#videos .video-nav .items .item').removeClass('active');
        $(this).addClass('active');
        videoFrame = "<iframe  src='" + this.dataset.videoUrl + "' frameborder='0' allowfullscreen></iframe>";
        return $('#videos .video-container').html(videoFrame);
      }
    });
    return $('#testimonials .testimonial').click(function() {
      var testimonialContent;
      testimonialContent = "<blockquote><p>";
      testimonialContent += this.dataset.content;
      testimonialContent += "</p><footer>";
      testimonialContent += this.dataset.author;
      testimonialContent += "</footer></blockquote>";
      $('#testimonial-display').html(testimonialContent);
      $('#testimonials .testimonial').removeClass('active');
      return $(this).addClass('active');
    });
  });

}).call(this);
