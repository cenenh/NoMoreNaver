function check_keyword_index(res){
  var result = 0;
  var index = Math.max(res.tf1, res.tf2, res.tf3);
  if(index === res.tf1){
    result = 1;
  }
  else if(index === res.tf2){
    result = 2;
  }
  else {
    result = 3;
  }
  return result;
}

function get_keyword(res, index){
  var keyword;
  if(index === 1){
    keyword = res.keyword1;
  }
  else if(index === 2){
    keyword = res.keyword2;
  }
  else{
    keyword = res.keyword3;
  }
  return keyword;
}

var data = {
  category: "사회",
  date: "2015-11-17",
  keyword1: "글로벌",
  keyword2: "가치 화제",
  keyword3: "해외취업",
  tf1: "23",
  tf2: "26",
  tf3: "28",
}

var index = check_keyword_index(data);
console.log(index);
console.log(get_keyword(data, index));
