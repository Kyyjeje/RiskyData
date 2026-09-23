document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064",()=>{let _0xe831c;const cards=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u006C\u0069\u006E\u006B\u002D\u0063\u0061\u0072\u0064");_0xe831c=509864^509864;const totalCards=cards['\u006C\u0065\u006E\u0067\u0074\u0068'];const totalDuration=98872^100736;const fadeDuration=484911^484779;const staggerDelay=(totalDuration-fadeDuration)/(totalCards-(843521^843520)||539743^539742);cards['\u0066\u006F\u0072\u0045\u0061\u0063\u0068']((card,index)=>{card['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']="\u0030";card['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']= ")xp42(Yetalsnart".split("").reverse().join("");card['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E']="\u006E\u006F\u006E\u0065";setTimeout(()=>{card['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0069\u0074\u0069\u006F\u006E']=`opacity ${fadeDuration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${fadeDuration}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`;card['\u0073\u0074\u0079\u006C\u0065']['\u006F\u0070\u0061\u0063\u0069\u0074\u0079']="\u0031";card['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']="\u0074\u0072\u0061\u006E\u0073\u006C\u0061\u0074\u0065\u0059\u0028\u0030\u0029";},staggerDelay*index);});const btnShare=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0062\u0074\u006E\u0053\u0068\u0061\u0072\u0065");if(btnShare){btnShare['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{if(navigator['\u0073\u0068\u0061\u0072\u0065']){navigator['\u0073\u0068\u0061\u0072\u0065']({"title":'Kunjungi Bio Link Saya',"url":window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u0072\u0065\u0066']});}else{alert("\u004C\u0069\u006E\u006B\u0020\u0064\u0069\u0073\u0061\u006C\u0069\u006E\u0020\u006B\u0065\u0020\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064\u0021");navigator['\u0063\u006C\u0069\u0070\u0062\u006F\u0061\u0072\u0064']['\u0077\u0072\u0069\u0074\u0065\u0054\u0065\u0078\u0074'](window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u0072\u0065\u0066']);}});}});
document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('bgMusic');
  music.volume = 0.5; // atur volume 0-1

  // Coba autoplay
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(function () {
      // Autoplay diblokir browser → tunggu interaksi user
      const startMusic = () => {
        music.play();
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
        document.removeEventListener('keydown', startMusic);
      };
      document.addEventListener('click', startMusic);
      document.addEventListener('touchstart', startMusic);
      document.addEventListener('keydown', startMusic);
    });
  }
});
