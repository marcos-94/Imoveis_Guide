function screenshot(){
    html2canvas(document.getElementById("photo")).then(function(canvas){
      document.body.appendChild(canvas);
    });
};