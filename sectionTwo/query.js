url = new URL(window.location.href);

function peramlink() {
if (url.searchParams.has('fish')) {
window.location.href("https://bwaf.github.io/testing/search/fish");
}
}


//function getQueryParams(){
  //  try{
    //    url = window.location.href;
      //  query_str = url.substr(url.indexOf('?')+1, url.length-1);
        //r_params = query_str.split('&');
        //params = {}
        //for( i in r_params){
          //  param = r_params[i].split('=');
            //params[ param[0] ] = param[1];
        //}
       // return params;
    //}
    //catch(e){
     //  return {};
    //}
//}