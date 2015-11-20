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

function get_url(keyword, date){
  date = date.split('-').join('.');
  var host_link = 'http://news.search.naver.com/search.naver?where=news&se=0&query=';
  var encoding_link = '&ie=utf8&sm=tab_opt&sort=0&photo=0&field=0&reporter_article=&pd=3';
  var ds_link = '&ds=';
  var de_link = '&de=';
  var last = '&mson=0&refresh_start=0&related=0';

  return host_link+keyword+encoding_link+ds_link+date+de_link+date+last;
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
