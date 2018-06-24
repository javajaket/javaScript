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

