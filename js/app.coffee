---
---
$ ->
  $('#videos .video-nav .items .item').click ->
      unless $(@).hasClass 'active'
        $('#videos .video-nav .items .item').removeClass 'active'
        $(@).addClass 'active'
        videoFrame = "<iframe  src='#{@.dataset.videoUrl}' frameborder='0' allowfullscreen></iframe>"
        $('#videos .video-container').html(videoFrame)
