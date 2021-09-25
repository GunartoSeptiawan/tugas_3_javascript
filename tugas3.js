function masuk(){
  var dalam = "lari";
  return dalam;
}
var jalan = masuk();
console.log(jalan);


function mintadata(y){

  console.log(y);

}
mintadata(20);

function mintadata(a,b,c){
  console.log(a);
  console.log(b);
  console.log(c);
}
mintadata("oke","kamu","dimana");

function mintadata(x = 200){
  console.log(x);
}
mintadata();