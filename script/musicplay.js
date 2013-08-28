        <script type="text/javascript">
            jQuery(function($) {
                var supportsAudio = !!document.createElement('audio').canPlayType;
                if(supportsAudio) {
                    var index = 0,
                    playing = false;
                    mediaPath = '../music/',
                    extension = '',
                    tracks = [
                        {"track":1,"name":"Intro","length":"00:55","file":"DEEPER LOVE INTRO"},
                        {"track":2,"name":"Beneath The World","length":"00:37","file":"BENEATH THE WORLD MM COMP"},
                        {"track":3,"name":"Sky Man","length":"01:05","file":"SKY MAN MM5"},
                        {"track":4,"name":"Turning To White","length":"00:40","file":"turning to white aug 2"},
                        {"track":5,"name":"I Love You Too","length":"00:59","file":"I LOVE YOU TOO MM3"},
                        {"name":"Too High","file":"TOO HIGH COMP"},
                        {"name":"Joy and Pain","file":"JOY & PAIN MM4"},
                        {"name":"Caravan Park","file":"CARAVAN PARK DOM MIX 1"},
                        {"name":"Step Into The Light","file":"STEP INTO THE LIGHT MM COMP"},
                        {"name":"Eyes Of Love","file":"EYES OF LOVE MM10"},
                        {"name":"Deeper Love","file":"DEEPER LOVE DESK MIX 7.7.13"}
                    ],
                    trackCount = tracks.length,
                    npAction = $('#npAction'),
                    npTitle = $('#npTitle'),
                    audio = $('#audio1').bind('play', function() {
                        playing = true;
                        npAction.text('Now Playing:');
                    }).bind('pause', function() {
                        playing = false;
                        npAction.text('Paused:');
                    }).bind('ended', function() {
                        npAction.text('Paused:');
                        if((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            audio.play();
                        } else {
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }).get(0),
                    btnPrev = $('#btnPrev').click(function() {
                        if((index - 1) > -1) {
                            index--;
                            loadTrack(index);
                            if(playing) {
                                audio.play();
                            }
                        } else {
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    btnNext = $('#btnNext').click(function() {
                        if((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            if(playing) {
                                audio.play();
                            }
                        } else {
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    li = $('#plUL li').click(function() {
                        var id = parseInt($(this).index());
                        if(id !== index) {
                            playTrack(id);
                        }
                    }),
                    loadTrack = function(id) {
                        $('.plSel').removeClass('plSel');
                        $('#plUL li:eq(' + id + ')').addClass('plSel');
                        npTitle.text(tracks[id].name);
                        index = id;
                        audio.src = mediaPath + tracks[id].file + extension;
                    },
                    playTrack = function(id) {
                        loadTrack(id);
                        audio.play();
                    };
                    
                    extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';

                    loadTrack(index);
                }

                $('#useLegend').click(function(e) {
                    e.preventDefault();
                    $('#use').slideToggle(300, function() {
                        $('#useSpanSpan').text(($('#use').css('display') == 'none' ? 'show' : 'hide'));
                    });
                });
            });
        </script>
    
