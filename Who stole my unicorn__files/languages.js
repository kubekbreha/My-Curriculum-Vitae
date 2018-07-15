
$(function(){

  var languages = [
      {
        "abbr": "CZ",
        "name": "Czech",
        "sentence": "Kdo ukradl mého jednorožce?"
      },
      {
        "abbr": "SK",
        "name": "Slovak",
        "sentence": "Kto ukradol môjho jednorožca?"
      },
      {
        "abbr": "GB",
        "name": "English",
        "sentence": "Who stole my unicorn?"
      },
      {
        "abbr": "DE",
        "name": "German",
        "sentence": "Wer hat mein Einhorn gestohlen?"
      },
      {
        "abbr": "SE",
        "name": "Swedish",
        "sentence": "Vem stol min enhörning?"
      },
      {
        "abbr": "FI",
        "name": "Finnish",
        "sentence": "Kuka varasti yksisarviseni?"
      },
      {
        "abbr": "NL",
        "name": "Dutch",
        "sentence": "Wie heeft mijn eenhoorn gestolen?"
      },
      {
        "abbr": "TW",
        "name": "Chinese (Traditional)",
        "sentence": "誰偷盗我的獨角獸 (Shuí tōudào wǒ de dú jiǎo shòu)"
      },
      {
        "abbr": "ES",
        "name": "Spanish",
        "sentence": "¿Quién robó mi unicornio?"
      },
      {
        "abbr": "FR",
        "name": "French",
        "sentence": "Qui a volé ma l'unicorne?"
      },
      {
        "abbr": "RU",
        "name": "Russian",
        "sentence": "Кто украл моего единорога?"
      },
      {
        "abbr": "PH",
        "name": "Philippines",
        "sentence": "Sino ang nagnakaww nang aking kabayong meysungay?"
      },
      {
        "abbr": "HU",
        "name": "Hungarian",
        "sentence": "Ki lopta el az egyszarvúmat?"
      },
      {
        "abbr": "IL",
        "name": "Hebrew",
        "sentence": "Mi ganav li et hachadkeren?",
        "not_right": true
      },
      {
        "abbr": "UA",
        "name": "Ukrainian",
        "sentence": "Хтось вкрав мою єдинорога?"
      },
      {
        "abbr": "ID",
        "name": "Indonesian",
        "sentence": "Siapa yang mencuri kuda bertandukku?"
      },
      {
        "abbr": "PT",
        "name": "Portugese",
        "sentence": "Quem roubou meu unicornio?"
      },
      {
        "abbr": "IE",
        "name": "Irish",
        "sentence": "Cé a ghoid mo unicorn?"
      },
      {
        "abbr": "EE",
        "name": "Estonian",
        "sentence": "Kes roovis mu uksiksarve?"
      },
      {
        "abbr": "NO",
        "name": "Norwegian",
        "sentence": "Vem stjal min enhjørning?"
      },
      {
        "abbr": "LT",
        "name": "Lithuanian",
        "sentence": "Kas pavoge mano vienaragi?"
      },
      {
        "abbr": "IS",
        "name": "Icelandic",
        "sentence": "Hver stal einhyrningnum mínum?"
      },
      {
        "abbr": "KR",
        "name": "Korean",
        "sentence": "누가 내 유니콘 훔쳤 (Duga de unicorn kumchanja)?"
      },
      {
        "abbr": "DK",
        "name": "Danish",
        "sentence": "Hvem stjal min enhjørning?"
      },
      {
        "abbr": "IT",
        "name": "Italian",
        "sentence": "Chi ha rubato íl mio unicorno?"
      },
      {
        "abbr": "GR",
        "name": "Greek",
        "sentence": "Pios eklepse ton monokero mu?"
      },
      {
        "abbr": "MY",
        "name": "Malaysian",
        "sentence": "Siapa curi kuda bertanduk saya?"
      },
      {
        "abbr": "SZ",
        "name": "Swazi",
        "sentence": "Ngubani lowebe i unicorn yami?"
      },
      {
        "abbr": "PL",
        "name": "Polish",
        "sentence": "Kto ukradł mojego jednorożca?"
      },
      {
        "abbr": "CN",
        "name": "Chinese",
        "sentence": "谁偷了我的独角兽? Shui2 tou1 le wo3 de du2 jiao3 shou4"
      },
      {
        "abbr": "BD",
        "name": "Bengali",
        "sentence": "আমার উনিকর্ন কে চুরি করলো (Amar unikorn ke chu ri kolo)?"
      },
      {
        "abbr": "TR",
        "name": "Turkish",
        "sentence": "Tek boynuzlu at kim Çaldı?"
      },
      {
        "abbr": "TH",
        "name": "Thai",
        "sentence": "ใครขโมยยูนิคอร์นของฉัน (Khır k̄hmoy yū ni khxr̒n k̄hxng c̄hạn)?"
      },
      {
        "abbr": "VN",
        "name": "Vietnamese",
        "sentence": "Ai đã ăn trộm con ngựa một sừng của tôi?"
      },
      {
        "abbr": "SI",
        "name": "Slovenian",
        "sentence": "Kdo je ukradel mojega samoroga?"
      },
      {
        "abbr": "IN",
        "name": "Hindu",
        "sentence": "मेरा यूनिकॉर्न किसने चुराया? (Meda unikorn kisni (chutijene) churaja he)?"
      },
      {
        "abbr": "ID",
        "name": "Balinese",
        "sentence": "Sira sane nyambel djaran tanduk tiane?",
        "not_right": true
      },
      {
        "abbr": "JP",
        "name": "Japanese",
        "sentence": "誰がユニコーンを盗んだ (Dare ga yunikoon o nusunda)?"
      },
      {
        "abbr": "_scotland",
        "name": "Scottish",
        "sentence": "Whae choried ma unicoarn?"
      },
      {
        "abbr": "_arab_league",
        "name": "Arabic",
        "sentence": "من سرق وحيد القرن الخاص بي؟"
      },
      {
        "abbr": "AM",
        "name": "Armenian",
        "sentence": "Ո՞վ է գողացել իմ միաեղջյուրը (Ov e gorracel im mya yerchjura)"
      },
      {
        "abbr": "LK",
        "name": "Tamil",
        "sentence": "Yaaru ennude unicorn thirundittan"
      },
      {
        "abbr": "PG",
        "name": "Tok Pisin",
        "sentence": "Husait stilim unicorn blo mi"
      },
      {
        "abbr": "IN",
        "name": "Marathi",
        "sentence": "Maza unicorn koni chori kela"
      },
      {
        "abbr": "ES",
        "name": "Galician",
        "sentence": "Quen roubou o meu unicornio"
      },
      {
        "abbr": "IN",
        "name": "Punjabi",
        "sentence": "Kauna mere unicorn cori kida"
      },
      {
        "abbr": "FR",
        "name": "Corsican",
        "sentence": "Qual'hè chì hà arrubatu u me unicorru"
      },
      {
        "abbr": "IN",
        "name": "Kannada",
        "sentence": "Yaaru nanna unicorn kaddidare"
      },
      {
        "abbr": "IR",
        "name": "Farsi",
        "sentence": "كى تك شاخ من رو دزديده؟ (Ki tak shoche manu dozdyde)"
      },
      {
        "abbr": "IN",
        "name": "Coorgi",
        "sentence": "Daaru naada unicorn kaddiyadu"
      },{
        "abbr": "ES",
        "name": "Bable",
        "sentence": "Quien robó el mio unicorniu"
      },
      {
        "abbr": "IN",
        "name": "Kashmir",
        "sentence": "Meyun unicorn kelm chun chur karith"
      },{
        "abbr": "AL",
        "name": "Albanian",
        "sentence": "Kush ma ka vjell kalin me stup"
      },
      {
        "abbr": "ES",
        "name": "Basque",
        "sentence": "Nork lapurtu zuen nire adarbakarra"
      },
      {
        "abbr": "IN",
        "name": "Tulu",
        "sentence": "Err yenna unicorn kannoni"
      },
      {
        "abbr": "BG",
        "name": "Bulgarian",
        "sentence": "кой ми открадна еднорока"
      },
      {
        "abbr": "_Wales",
        "name": "Welsh",
        "sentence": "Pwy dwyn fy unicorn"
      },
      {
        "abbr": "IN",
        "name": "Malayalam",
        "sentence": "Aaru kattu ente unicorn?"
      },
      {
        "abbr": "LU",
        "name": "Luxembourgish",
        "sentence": "Du hues main unicorne geklaut"
      },
     {
        "abbr": "PE",
        "name": "Quechua",
        "sentence": "Pitaj suwasha unicorniyuta"
      },
      {
        "abbr": "ES",
        "name": "Catalan",
        "sentence": "Qui va robar el meu unicorni"
      }
       
    ];


    var ul = $(".languages");
    $(".language-count").text(languages.length);
    
    var selected = Math.floor((Math.random() * (languages.length-1)));

    for (i in languages){
      language = languages[i];

      var li = $("<li><a  href='#' title='" + language.name + "'></a></li>");
      li.attr("data-id",i);

      
      li.find("a").css("background-image", "url(" + "img/flags/48/" +  language.abbr.toLowerCase() + ".png)");
      ul.append(li);

      if (i == selected){
        selectLanguage(i);
      }
    }

    $(".languages a").click(function(){
      var id = $(this).parent().data("id");
      selectLanguage(id);
      return false;
    });

    $(".languages li").mousemove(function( event ) {
      var $selected = $(".languages li.selected");
        
      getDistance($(this), $selected)
    });

    $(document).keydown(function(e) {
      if (e.which == 37 || e.which == 39 || e.which == 38 || e.which == 40){
        var $sel = $(".languages li.selected");
        if ($sel){
          var id = $sel.data("id");
          //Left
          if (e.which == 37){
            selectLanguage((id > 0) ? (id-1) : languages.length-1)
          //Right
          }else if (e.which == 39){
            selectLanguage((id+1)%(languages.length))
          }else{
            var siblings = $sel.siblings();
            var $closest 
            //Go through all siblings and find the one closest in the arrow direction
            siblings.each(function( index ) {
              var $el = $(this);

              if (e.which == 38 && $sel.offset().top <= $el.offset().top){
                return;
              }

              if (e.which == 40 && $sel.offset().top >= $el.offset().top){
                return;
              }

              if (!$closest){
                $closest = $el
                return
              }

              if (getDistance($sel, $el) < getDistance($sel, $closest)){
                $closest = $el
              }

            });
            
            if ($closest){
              selectLanguage($closest.data("id"))
            }
          }
        }
      }else{
        return;
      }

      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

    function getDistance($obj1, $obj2){
      var o1 = $obj1.offset();
      var o2 = $obj2.offset();
      var dx = o1.left - o2.left;
      var dy = o1.top - o2.top;
      var distance = Math.sqrt(dx * dx + dy * dy);
      return distance
    }

    function selectLanguage(id) {
      $(".languages li").removeClass("selected");
      $(".languages li[data-id='" + id + "']").addClass("selected");

      var language = languages[id];
      $(".language h3").text(language.name);

      $(".language code").remove();
      $(".language .clr").remove();

      if (language.not_right){
        $(".language h3").after($("<code>Not the actual spelling</code><br class='clr'>"));
      }
      $(".language img").attr("src", "img/flags/48/" +  language.abbr.toLowerCase() + ".png");
      $(".language span").text(language.sentence);
      
    }
});