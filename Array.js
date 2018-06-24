/*Array.prototype.indexOf 
- indexOf 메소드의 인자로 지정된 요소를 배열에서 검색하여 인데스를 반환한다.
  중복되는 요소가 있는 경우 첫번째 인덱스만 반환

  var arr = [1,2,3,4];
  console.log(arr.indexOf(2)); //1
  console.log(arr.indexOf(4)); //-1
  console.log(arr.indexOf(2,2)); //1
*/
//배열에 존재하는지 확인하고 뱌열을 업데이트 하는 방식
function updateVegetableCollection(veggies, veggie){
  if(veggies.indexOf(veggie) === -1){
    veggies.push(veggie);
    console.log('New veggies collection is: ' + veggies);
  }else if(veggies.indexOf(veggie) > -1){
    console.log(veggie + ' already exists in the veggies collection');
  }
}

var veggies = ['potato','tomato','chillies','green-pepper'];

updateVegetableCollection(veggies,'apple');
updateVegetableCollection(veggies,'apple');
updateVegetableCollection(veggies,'spinach');

/*Array.prototype.join
- 배열 요소 전체를 연결하여 생성한 문자열을 반환.구분자(separator)는 생략 가능하며 기본 구분자는 ','
*/
var arr = ['a','b','c','d'];

var x = arr.join();
console.log(x);

var y = arr.join('');
console.log(y);

var a = ['바람','비','불'];

var myVar1 = a.join();
var myVar2 = a.join(', ');
var myVar3 = a.join(' + ');
var myVar4 = a.join('');

console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log(myVar4);

/*Array.prototype.sort
- 배열의 내용을 적절하게 정렬,원본 배열을 직접 변경하며 정렬된 배열을 반환. 반환된 배열은 복사본이 아닌 원본 배열
  return 0;    //정상 종료
  return -1;   //에러 발생
  return 1이상; //정상 종료 되었으나 다른 무엇인가 있음을 나타냄 
  return -2같은 숫자; //에러 발생했으나 구체적으로 무엇이다를 나타냄
*/
var items = [
  {name: 'Edward', value:21},
  {name: 'Sharpe', value:37},
  {name: 'And', value:45},
  {name: 'The', value:-12},
  {name: 'Magnetic'},
  {name: 'Zeros', value:37}
];

//value 기준으로 정렬
items.sort(function(a,b){
  if(a.value > b.value){
    return 1;
  }
  if(a.value < b.value){
    return -1;
  }
  return 0;
})
console.log(items);

//name 기준으로 정렬
items.sort(function(a,b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if(nameA < nameB){
    return -1;
  }
  if(nameA > nameB){
    return 1;
  }
  return 0;
})

console.log(items);

var points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// compareFunction의 반환값이 0보다 작은 경우, a를 우선한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 2, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// compareFunction의 반환값이 0보다 큰 경우, b를 우선한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 2, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100

var todos = [
  { id: 4, content: 'JavaScript'},
  { id: 1, content: 'HTML'},
  { id: 2, content: 'CSS'}
];
//id를 기준으로 정렬
todos.sort(function(a,b){
  return (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0;
});
console.log(todos);

//content를 기준으로 정렬
todos.sort(function(a,b){
  return (a.content > b.content) ? 1: (a.content < b.content) ? -1 : 0;
});
console.log(todos);

/*Array.prototype.slice 
- 배열의 특정 부분에 대한 복사본을 생성
- 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사
*/
/*
slice는 myCar에서 newCar라는 새 배열을 만든다. 두 가지 모두 myHonda객체에 
대한 참조를 포함. myHonda의 색상이 자주색으로 변경되면 두 배열 모두 변경 사항을 반영
*/
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

// 내 자동차, 새 자동차 및 혼다의 색상 값을 표시합니다.
// 두 배열에서 모두 참조됩니다.
console.log(myCar);
console.log(newCar);
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

console.log(myCar);
console.log(newCar);

/*ㅣ
slice 메서드를 호출하여 Array와 유사한 객체/컬렉션을 새 Array로 변환 할 수도 있다.
메서드를 객체에 바인딩하면 된다.
*/
function list(){
  return Array.prototype.call(arguments);
  //[].slice.call(arguments); 을 사용하여 줄일 수 있다.
}

var list1 = list(1,2,3);

console.log(list1);
