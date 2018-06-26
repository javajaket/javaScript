/*
call function 
- 다른 객체 대신 메소드를 호출하는데 사용.
  이 메소드를 사용하여 함수의 this객체를 원래 컨텍스트에서 thisObj로 지정된 새 객체로
  변경할 수 있다.
*/
fun.call([thisObj[,arg[,arg2[, ...]]]]);
// fun: 가져다 쓸 메소드
// thisObj(선택사항): 현재 객체로 사용될 객체
// arg1,arg2,argN(선택사항): 메소드에 전달될 인수 목록
/*
apply function
- call 메소드와 동일하나, call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달한다.
*/
fun.apply([thisObj[,argArray]]);
// fun: 가져다 쓸 메소드
// thisObj(선택사항): 현재 객체로 사용될 객체
// argArray: 함수에 전달될 인수 집합

/* 익명함수에 call 사용
Product 객체의 생성자는 name 및 price 두 매개변수로 정의된다.
다른 두 함수 Food 및 Toy는 this 및 name과 price를 전달하는 Product를 호출
Product는 name 및 price속성을 초기화하고, 특수한 두 함수(Food 및 Toy)는 category를 정의
*/
function Product(name, price){
  this.name = name;
  this.price = price;

  if(price < 0){
    throw RangeError('cannot create producr ' + 
  this.name + ' with a negatice price');
  }
}

function Food(name, price){
  Product.call(this,name,price);
  this.category = 'food';
}

function Toy(name,price){
  Product.call(this,name,price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log(cheese);
console.log(fun);
/*함수 호출 및 'this'를 위한 문맥 지정에 call사용
greet을 호출하면 this값은 객체 obj에 바인딩
*/
function greet(){
  var reply = [this.animal, ' typically sleep between ', 
  this.sleepDuration].join('');
  console.log(reply);
};

var obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hurs'
};

greet.call(obj);

/*첫번째 인수 지정 없이 ㅎ마수 호출에 call사용
- display함수에 첫번째 인수를 전달하지 않고 호출.첫번째 인자를 전달하지 않으면,
  this의 값은 전역 객체 바인딩
*/
var sData = 'Wisen';            
function display(){
  console.log('sData value is ' + this.sData);
}

display.call(); 