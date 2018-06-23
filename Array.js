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