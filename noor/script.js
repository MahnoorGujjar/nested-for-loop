// NESTED FOR LOOP

// for (let i = 1 ; i <= 10 ; i++){
//     for (let j = 1 ; j <= 5 ; j++){
//         document.write(i , j, "</br>")
//     }
// }


 // 11 12 13 14 15 21 22 23 24 25  31 32 33 34 35................. 105 


 // outer foor loop inner for loop pe depend krta he its mean k inner loop 5 tk chlega then jse hi hmri condtion false
 // hgi tb outer for loop 1 se 2 hga


                 //////////////................../////////////////.....................///////////////////




// PATERN THROUGH NESTED FOR LOOP


// for (let k= 1 ; k <= 5 ; k++){
//     for (let m = 1 ; m <= k ; m++){
//         document.write(k)
//     }
    
// document.write("<br>")
// }

// 1
// 22
// 333
// 4444
// 55555



                 //////////////................../////////////////...................../////////////////// 



// for (let k= 1 ; k <= 5 ; k++){
//     for (let m = 1 ; m <= k ; m++){
//         document.write(m)
//     }
    
// document.write("<br>")
// }

// 1
// 12
// 123
// 1234
// 12345



                 //////////////................../////////////////...................../////////////////// 




// for (let i = 5 ; i >= 1; i--){
//     for (let j =i ; j >= 1 ; j--){
//         document.write(i)
//     }
//     document.write("<br>")
// }


// 55555
// 4444
// 333
// 22
// 1



                 //////////////................../////////////////...................../////////////////// 



// let firstName = ["BlueRay" , "Upchuck" , "Lojack", "Gizmo" , "Do-Rag"];
// let lastName = [" Zzz ", " Burp " , " Dogbone " , " Droop " , " john "]
// let fullName = []

// for (let i = 0 ; i < firstName.length ; i++){
//     for (let j = 0 ; j < lastName.length ; j++){
//         fullName.push(firstName[i] + lastName[j] + "<br>")
//     }
  
// }
// for (let k =0 ; k < fullName.length; k++){
//     document.write(fullName[k]+ "<br>")
// }

// OUTPUT

// BlueRay Zzz

// BlueRay Burp

// BlueRay Dogbone

// BlueRay Droop

// BlueRay john

// Upchuck Zzz

// Upchuck Burp

// Upchuck Dogbone

// Upchuck Droop...............


                 //////////////................../////////////////...................../////////////////// 

// JOIN METHOD 



// let fruits = ["banana" , "apple" , "orange" , "cherry"]
// document.write(fruits)

//banana,apple,orange,cherry



// let fruits = ["banana" , "apple" , "orange" , "cherry"]
// document.write(fruits.join(" "))

// banana apple orange cherry

// COMMA WILL BE REMOVE BY JOIN METHOD



                 //////////////................../////////////////...................../////////////////// 



//  let items = ["concealer" , "foundation" , "compack" , " mascara" , "eyeshaddow" , "blush"] //6
//  let price = [1800 , 3800 , 2500 , 1200 , 7000 , 2200]
//  let discount = ['12%' , "18%"]

//  for (let i = 0 ; i < items.length ; i ++){
//     document.write(items[i] , "<br>")
//  }
 
//  for (let k = 0; k < price.length ; k++){
//     document.write(price[k] , "<br>")
//  }

 // LOOP OUTPUT

//  concealer
// foundation
// compack
// mascara
// eyeshaddow
// blush
// 1800
// 3800
// 2500
// 1200
// 7000
// 2200


//OUTPUT WITH DOCUMENT 


// document.write('ITEMS' + ':' + ' PRICE <br>');
// document.write("============ ")

// document.write("<br>" ,items[0] + "   :   " + price[0])
// document.write("<br>" ,items[1] + "   :   " + price[1])
// document.write("<br>" ,items[2] + "   :   " + price[2])
// document.write("<br>" ,items[3] + "   :   " + price[3])
// document.write("<br>" ,items[4] + "   :   " + price[4])
// document.write("<br>" ,items[5] + "   :   " + price[5])

// document.write (" <br> TOTAL BILL " , 1800 + 3800+  2500 + 1200 + 7000 + 2200 )

// document.write (" <br> TOTAL BILL " ,price[0] + price[1] + price[2] + price[3] + price[4] + price[5] )



//OUTPUT 

// ITEMS: PRICE
// ============
// concealer : 1800
// foundation : 3800
// compack : 2500
// mascara : 1200
// eyeshaddow : 7000
// blush : 2200
// TOTAL BILL 18500