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
const mon = "월";
const tue = "화";
const wen = "수";
const thu = "목";
const fri = "금";
const sat = "토";
const sun = "일";

const days0fweek = [mon , tue , wen , thu , fri , sat];

const nonsense = [1, 2, "hello", false, null, true, undefined, "hihi"];

// array에서 값 받아오기
console.log(days0fweek);
console.log(nonsense[2]);

// array 안에 요일 더 받아오기
days0fweek.push(sun);
console.log(days0fweek);

/* Object */
const player = {
    name : "안정환",
    points : 300,
    fat : true,
};
console.log(player);
console.log(player.name);


/* function 계속 반복해서 사용할 수 있는 코드*/
function sayHello(nameOfPerson, age){
    console.log("안녕 내이름은 " + nameOfPerson + "나이는 " + age + "살이야.");
}

sayHello("하나", 20);
sayHello("두울", 28);
sayHello("세엣", 30);

const player1 = {
    name : "홍길동",
    sayHello : function(otherPersonName) {
        console.log("Hello" + otherPersonName);
    } ,
};

console.log(player.name);
player1.sayHello("배추도사");
