for(let i = 0; i < 5; i++){
    console.log('*'.repeat(i+1));
}
/*

*
**
***
****
*****

*/

for(let i = 5; i>=0; i--){
    console.log('*'.repeat(i));
}

/*

*****
****
***
**
*

*/

// 변수가 고정값일 때
for(let i = 0; i < 5; i++){
    console.log('*'.repeat(5-i));
}

/*

*****
****
***
**
*

*/

for(let i = 0; i < 10; i++){
    if(i % 2 === 1){
        console.log('*'.repeat(10-i));
    }
}
/*

*********
*******
*****
***
*

*/