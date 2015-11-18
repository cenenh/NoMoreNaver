

$( document ).ready(function() {
  console.log("document ready!")
  var words = [];
  $.ajax({
    url: 'http://localhost:3333/getKeywords',
    type: 'GET',
    dataType: "json",
    error : function(){
      alert("ajax HTTP GET error!");
      alert();
    },
    success : function(response){
      //console.log(response);
      var responses = response.data;
      console.log(responses);
      for(var i = 0; i < responses.length; i++){
        var word = {
          text : responses[i].keyword1 + " / " + responses[i].keyword2 + " / " + responses[i].keyword3,
          //text : responses[i].keyword1,
          weight : Math.max(responses[i].tf1, responses[i].tf2, responses[i].tf3) / 10
        };
        words.push(word);
        word = {};
        //console.log(responses[i]);
        //console.log(responses[i].keyword1 + " with tf1 : " + responses[i].tf1);
        //console.log(responses[i].keyword2 + " with tf2 : " + responses[i].tf2);
        //console.log(responses[i].keyword3 + " with tf3 : " + responses[i].tf3);
      }
      $('#wordcloud').jQCloud(words,{
        autoResize: true,
        fontSize: {
            from: 1.0,
            to: 0.02
        }
      });
    },
  });
});

/*var words = [
  { text: "자취", weight: 10 },
  { text: "배달", weight: 9 },
  { text: "밥", weight: 9 },
  { text: "음식물 쓰레기", weight: 8 },
  { text: "일반 쓰레기", weight: 8 },
  { text: "쓰레기 봉투", weight: 7 },
  { text: "약", weight: 7 },
  { text: "아플때 외로움", weight: 6 },
  { text: "돈이 부족함", weight: 5 },
  { text: "아르바이트", weight: 4 },
  { text: "공과금", weight: 4 },
  { text: "안전", weight: 7 },
  { text: "데이트 폭력", weight: 10 },
  { text: "부동산 중계 수수료", weight: 6 },
  { text: "월세", weight: 8 },
  { text: "치킨", weight: 9 },
  { text: "대량구매", weight: 8 },
  { text: "인터넷쇼핑", weight: 8 },
  { text: "1인가구", weight: 6 },
  { text: "게으름", weight: 6 }
];
//show wordcloud
$('#wordcloud').jQCloud(words);*/
