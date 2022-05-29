/* const : 변수 재선언,재할당 모두 불가능*/
const a = 10;
const b = 2;

/* let : 번수 재할당이 가능 */
let c = 3;



console.log(a+b+c); //15
console.log(a*b*c); //60
console.log(a/b/c); // 1.66666666666667

c=2
console.log(a+b+c); //14



/* boolean */
/* boolean의 값은 true,false,null, undefined */
const amIFat = null;
let something;
console.log(something, amIFat);

/* Array 배열 */
const mon = "mon";
const tue = "tue";
const wen = "wen";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const days0fweek = ["mon" , "tue" , "wen" , "thu" , "fri" , "sta"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "hihi"];

// array에서 값 받아오기
console.log(days0fweek);
console.log(nonsense[2]);

// array 안에 요일 더 받아오기
days0fweek.push("sun");
console.log(days0fweek);