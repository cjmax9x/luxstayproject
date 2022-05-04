/* Mục Lục
3.CÂU ĐIỀU KIỆN VÀ TOÁN TỬ SO SÁNH
4.HÀM VÀ THAM SỐ TRONG HÀM
5.LÀM VIỆC VỚI CHUỖI STRING
6. LÀM VIỆC VỚI SỐ Number
7. LÀM VIỆC VỚI MẢNG Array
8. LÀM VIỆC VỚI ĐỐI TƯỢNG - Object
9. ĐỐI TƯỢNG NGÀY THÁNG - Date
10. CÂU LỆNH RẼ NHÁNH - if - else, switch
11. TOÁN TỬ 3 NGÔI - Ternary operator
12. VÒNG LẶP - Loop
13. String/Array include() method
14. Callback - Gọi lại hàm
15. HTML DOM - HTML Documents object Model
16. JSON
17. Promise
18. fetch()
19. ES6 2015
*/


/*
Kiểu dữ liệu trong Javascript

1. DỮ LIỆU NGUYÊN THỦY - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. DỮ LIỆU PHỨC TẠP - Complex Data
    - Function
    - Object
*/

// Number stype
var a = 1;
var b = 2;
var c = 3;

// console.log(typeof a); Kiểm tra xem dạng dữ liệu gì.
//  String type
var fullName = 'Tung Bui';

// Undefined type
var age;

// Null type
var id = null;  // nothing

// Symbol: id và id 2 không giống nhau
var id = Symbol('id'); //unique
var id2 = Symbol('id') //unique

// Function 
var myFunction = function() {
    alert('Hi, Xin Chao Tung Bui')
}
// myFunction(); cần thêm câu lệnh này mới thực thi 

// Object types

var myObject = {
    name: 'Tung Bui',
    age: 30,
    address: 'Hai Phong',
    myfunction: function(){
    }
};


// -----------------------------------------------------------








/*  3.CÂU ĐIỀU KIỆN VÀ TOÁN TỬ SO SÁNH */

var result = 'A' && 'D' && 'C';
if ( result){
    // console.log('Dieu Kien Dung')
}
else{
    // console.log('Dieu Kien Sai')
}

/* 
_Trường hợp trên, sẽ lấy từng giá trị so sánh với 
6 giá trị fasle của boolean, nếu tất cả đều không tồn tại
thì biến result sẽ lấy giá trị CUỐI CÙNG LÀ C
để in ra kết quả trong cụm kết quả của if
_Còn xét một trong 3 giá trị trên thuộc 6 giá trị fasle của boolean 
thì biến result sẽ thực hiện in ra fasle và trả về kết quả
trong cụm else
*/


var result = undefined || null || 0;
if ( result){
    // console.log('Dieu Kien Dung')
}
else {
    // console.log('Dieu Kien Sai')
}

/* 
_Trường hợp trên, sẽ chỉ lấy 1 giá trị so sánh với 
6 giá trị fasle của boolean, nếu tất cả đều không tồn tại
thì biến result in ra kết quả trong cụm kết quả của if
_Còn xét cả 3 giá trị trên đều thuộc 6 giá trị fasle của boolean 
thì biến result sẽ thực hiện in ra fasle và trả về kết quả
trong cụm else
*/
// -----------------------------------------------------------








/* 4.HÀM VÀ THAM SỐ TRONG HÀM function */
function showType(changeType, changeType_1) {
        console.log(changeType)
        console.log(changeType_1)
};
// showType('Uhhh, Thấy sao', 'rô rộ');

/* changeType là tham số, hàm có thể chứa nhiều tham số,
cách nhau dấu phẩy. Uhh, thấy sao và rô rộ là đối số,
gọi tổng là tham số
*/

function showType_2() {
    console.log(arguments)
};
// showType_2('log 1', 'log 2', 'log 3');

// sử dụng arguments để in ra tất cả các đối số của showType
// arguments là từng tham số, chiều dai dài của tham số

function showType_3() {
    for(var param of arguments){
        console.log(param)
    }
};
// showType_3('log 1', 'log 2', 'log 3', 1 , 2, 3);

/*Vòng lặp sẽ lấy từng giá trị của arguments 
rồi gán cho param, lặp lại cho tới khi hết giá trị
của arguments (showType)
*/

function showType_1() {
    var myString = '';
    for(var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
};
// showType_1('log 1', 'log 2', 'log 3');

/* Tương ứng tường hợp trên, dùng `${param} - `
để cộng thêm log 1 và thêm dấu - đăng sau là thành
log 1 -
*/

// Return trong hàm

function test(a, b){
    return a + b
    // return '2' + '10'
}
var result = test(2, 10);
// console.log(result)

/* đằng sau câu lệnh return, sẽ không thực thi
bất kỳ câu lệnh nào thêm
*/

/* Hàm trùng tên, sẽ thực thi tên hàm viết cuối cùng
Có thể gọi hàm ở trong hàm, và chỉ có thể thực thi
trong tại hàm đó
Tên hàm chỉ có thể thực thi bên trong hàm, ra ngoài
không có hiệu lực 
*/

// Các loại hàm function cơ bản 

// showMessage();
function showMessage(){
    console.log('Declaration function');
}
var showMessage2 = function(){
    console.log('Expression function');
}
// showMessage2();

/* Declaration function có thể gọi trước khi đinh nghĩa
Expression function không thể gọi trước khi định nghĩa
*/
// -----------------------------------------------------------







/* 5.LÀM VIỆC VỚI CHUỖI STRING */
// Keyword Javascript string methods
// Có thể sử dụng vị trí - (âm) để xác định phần tử

// Ký tự hoặc dấu \ trong chuỗi 
var fullName = 'Bui Van \'Tung\'';
var fullName1 = 'Bui Van \\ Tung \\ Hung';
// console.log(fullName);
// console.log(fullName1)
// console.log(`Toi la: ${fullName} ${fullName1}`)
// Sử dụng `${fullName}` để nối chuỗi giá trị string

var myString = '  Dang o dau o the?  '
// I. Length - kiểm tra độ dài của chuỗi
    // console.log(myString.length)

// II. Find index - Tìm nội dung trong chuỗi
// console.log(myString.indexOf('o'))
// console.log(myString.lastIndexOf('o'))
// console.log(myString.indexOf('o', 6))

// III. Cut string - Cắt chuỗi
// console.log(myString.slice(5))
// console.log(myString.slice(5, 10))
// console.log(myString.slice(-6, -1))

// IV. Replace - Thay thế ký tự trong chuỗi
// console.log(myString.replace('o', 'Anh Hung'))
// console.log(myString.replace(/o/g, 'Anh Hung'))

// V. Convert to upper/lower case - chữ viết hoa/thường
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())

// VI. Trim - Loại bỏ khoảng trống ở đầu và cuối
// console.log(myString.trim())

// VII. Split - Cắt chuỗi thành hàm Array(Tìm điểm chung)
var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(', ')) 

// VIII. Get a character by index - lấy một ký tự từ nội dung
// console.log(languages.charAt(0))
// console.log(languages[0])
// -----------------------------------------------------------








/* 6. LÀM VIỆC VỚI SỐ Number */
    var age = 18;
    var PI = 3.14;
    var result = 20 / 'ABC';
    // console.log(isNaN(result))
    // console.log(age.toString())
    // console.log(PI.toFixed(1))


function isNumber(value){
    return typeof value === 'number' && !isNaN(value)
}
var result = isNumber(100 / 'ABC');
// console.log(result)
// -----------------------------------------------------------








/* 7. LÀM VIỆC VỚI MẢNG Array */
// Keyword Javascript Array methods
// Có thể sử dụng vị trí - (âm) để xác định phần tử
var myArray = [
    'Javascript',
    'PHP',
    'Rubby',
];
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
// console.log(Array.isArray(myArray));
// console.log(myArray[2])

var languages = [
    'Javascript',
    'PHP',
    'Rubby'
]
var languageGetOne = languages[1];
// console.log(languageGetOne) //lấy 1 dữ liệu từ mảng Array
// To string - Chuyển thành chuỗi string
// console.log(languages.toString())

// Join - Nối từng phần tử của mảng và chuyển thành string
// console.log(languages.join('-'))

// Pop - Xóa phần tử ở cuối
// console.log(languages.pop())

// Push - Thêm phần tử ở cuối
// console.log(languages.push('Hung'))

// Shift - lấy (copy) và xóa phần tử ở đầu
// console.log(languages.shift())

// Unshift - thêm phần tử ở đầu
// console.log(languages.unshift('Hung'))

// Splicing - Xóa và thay thế phần tử
// console.log(languages.splice(0, 2, 'men', 'Hung'))

// Concat - Nối 2 mảng lại với nhau
// console.log(languages.concat(age))

// Slicing - Sao chép phần tử của mảng, rồi giữ lại mảng gốc
// console.log(languages.slice(0, 1))

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 10
    },
    {
        id: 2,
        name: 'PHP',
        coin: 50
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 20
    }
]


function getName(){
    var result15 =[]
    for(var o = 0; o < courses.length; o++){
        result15.push(courses[o].name)
    }
    return result15
}
var abcv = getName();

// console.log(abcv)

function getId (){
        var cccc = []
    for(var mb = 0; mb < courses.length; mb++){
        if(courses[mb].id%2 !==0){
            cccc = cccc.concat(courses[mb])
        }
    }
    return cccc
}

var bbbb = getId()

// console.log(bbbb)

// Array methods:

// forEach() - duyệt qua, giống như console.log hoặc vòng for
courses.forEach(function (course, index){
    // console.log(course, index)
})

/* every() - chỉ cần 1 không đáp ứng, trả về false
tất cả đúng mới trả về true
*/
var isFree = courses.every(function (course, index){
    return course.coin == 20
})
// console.log(isFree);

// some() - chỉ cần 1 giá trị đáp ứng là true
var isFree = courses.some(function (course, index){
    return course.coin == 10
})
// console.log(isFree);

// find() - Tìm ra giá trị, thấy là dừng lại luôn
var isFree = courses.find(function (course, index){
    return course.coin == 10
})
// console.log(isFree);

// filter() - Lọc ra hết tất cả các mảng
var isFree = courses.filter(function (course, index){
    return course.coin === 10
})
// console.log(isFree);

/* map() - lấy tất cả dữ liệu từ biến courses rồi trả về
hàm courseHandler rồi trả về biến mới newCourses ( dạng Array)
nếu thêm lệnh return trong hàm, thì sẽ trả về newCourses
theo giá trị mới, xem video 79 hiểu hơn

*/
function courseHandler(course,index, originArray){
    return {
        id: `${course.id} + 1`,
        name: `Khóa học ${course.name}`,
        coin: `Giá là: ${course.coin}`,
        // index: index,
        // origin: originArray
    }
}
var newCourses = courses.map(courseHandler);
// console.log(newCourses)

// reduce() - Dùng cho cộng tổng

/* accumulator sẽ được gán là '0' nếu nhập
trong courses.reduce(coinHandler, '0'), và currentValue
sẽ là từ mảng hoặc giá trị đầu và lần lượt tới mảng hoặc
giá trị cuối cùng.
--> muốn lấy tổng coin thì accumulator + currentValue.coin
sẽ bằng số tổng. xem video 80 để hiểu thêm
nếu không nhập '0' thì accumulator nhận là mảng 
hoặc giá trị đầu và currentValue là mảng hoặc giá trị 2.
 */
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    return accumulator + currentValue.coin
}
var totalCoin = courses.reduce(coinHandler, 0)
// console.log(totalCoin)


//--> Cách viết gộp
var totalCoin = courses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin
}, 0)
// console.log(totalCoin)


//-------------->> BÀI TẬP reduce <<-----------------

var numbers = [100, 200, 220, 200, 480];
var totalNumber = numbers.reduce(function(acr, ecr){
    return acr + ecr
})
// console.log(totalNumber)
/* Không cần giá trị khởi tạo ('0'), vì giá trị
muốn lấy là number, trùng với giá trị của mảng hiện tại */

var depthArray1 = [1, 2, 'Hung']

function testFlat (){
    var result55 = []
    for(h = 0; h < depthArray1.length; h++){
        result55.push(depthArray1[h])
    }
    return result55
}
var hhhh = testFlat()
// console.log(hhhh)


var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

function flatArray (input){
    var result50 = [];
    var result51 = [];
    for(var i = 0; i<input.length; i++){
        if(typeof input[i] == 'number'){
            result50 = result50.concat(input[i])
        }
        else{
            result51 = result51.concat(input[i])
        }
    }
    return result50.concat(result51)
}

var outPutFlat = flatArray (depthArray);

// console.log(outPutFlat) //-->>>> (9) [1, 2, 5, 6, 3, 4, 7, 8, 9]



var arrayOutput = depthArray.reduce(function(flatOutput, flatItem){
    return flatOutput.concat(flatItem);
}, [])
// console.log(arrayOutput)

var topics = [
    {
        topic: 'Front-End',
        courses: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }],
    },
    {
        topic: 'Back-End',
        courses:[
            {
                id: 2,
                title: 'PHP'
            },
            {
                id: 3,
                title: 'NodeJS'
            }
        ]
    }
]
var newCourses = topics.reduce(function(course, topic){
    return course.concat(topic.courses) 
}, [])
// console.log(newCourses)
var htmls = newCourses.map(function(newCourse){
    return `
        <div> 
            <h2>${newCourse.title}</h2>
            <h5>ID: ${newCourse.id}</h5>
        </div>
    `
})
// console.log(htmls.join(''))


// ------>>>> Tạo ra reduce (reduce1)<<<<---------
Array.prototype.reduce2 = function(callback, result) {
        var i = 0
        if(arguments.length < 2){
            i = 1;
            result = this[0]
        }
    for(;i < this.length; i++){
        result = callback(result, this[i])
    }
    return result
}

var number1 = [1, 2, 3, 4, 5];
var result = number1.reduce2((total, number) => {
    return total + number
})
// console.log(result)
// -----------------------------------------------------------







/*  8.LÀM VIỆC VỚI ĐỐI TƯỢNG - Object */
var locate = 'address';
var myName = 'name'
var addMore = 'add for test'

var myInfor = {
    name: 'Tung Bui',
    age: '31',
    'e-mail': 'cjmax9x@gmail.com',
    [locate]: 'Hai Phong, VN', // Thêm giá trị từ biến bên ngoài
    getAge: function (){
        return this.age;
    }
}
// delete myInfor.age;
// console.log(myInfor.name);
// console.log(myInfor[myName])
// console.log(myInfor['e-mail']);
// console.log(myInfor.getAge());
// console.log(myInfor);

// function --> method - Phương thức
// others --> property - Thuộc tính


// Object constructor - BẢN THIẾT KẾ ĐỐI TƯỢNG


// function User(firstName, lastName, address){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.address = address,
//     this.getName = function (){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var memtor = new User ('Tung', 'Bui', 'Hai Phong, VN');
// var member = new User ('Hung', 'Pham', 'Hai Phong, VN');
// memtor.title = 'Uh, dang o dau the';
// member.coment = 'Di ngoi';
// console.log(memtor);
// console.log(member);
// console.log(memtor.getName());
// console.log(member.getName());


/* Object prototype - THÊM PHƯƠNG THỨC VÀ
 THUỘC TÍNH VÀO Object constructor */
 function User(firstName, lastName, address){
    this.firstName = firstName,
    this.lastName = lastName,
    this.address = address
    this.getName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
}
User.prototype.skill = 'Javascript tranning'
User.prototype.getSkill = function(){
    return this.skill;
}
var memtor = new User ('Tung', 'Bui', 'Hai Phong, VN');
var member = new User ('Hung', 'Pham', 'Hai Phong, VN');
memtor.title = 'Uh, dang o dau the'; //thêm phương thức vào object constructor
member.coment = 'Di ngoi';  //thêm phương thức vào object constructor
// console.log(memtor.getName())
// console.log(member)
/* Match object - Toán trong object */
/* Keyword match object javascript */
// Math.PI - trả về số PI = 3.14......
// console.log(Math.PI)

// Math.round() - làm tròn số nguyên, dưới 5 xuống, ngược lại
// console.log(Math.round(1.5))

// Math.abs() - trả về giá trị tuyệt đối
// console.log(Math.abs(-4))

// Math.ceil() - làm tròn trên, dù thập phân nhỏ
// console.log(Math.ceil(4.1))

// Math.floor()  - làm tròn dưới, dù thập phân lớn
// console.log(Math.floor(5.9))

// Math.random() - trả về số ngẫu nhiên, luôn nhỏ hơn 1
var random = Math.floor(Math.random() * 5)

var bouns = [
    '1$',
    '4$',
    '6$',
    '12$',
    '9$'
]
// console.log(bouns[random])
var random1 = Math.floor(Math.random() * 100)

// if (random1 < 50){
//     console.log('Chúc mừng bạn đã trúng thưởng')
// }

// Math.min() - trả về số thấp nhất
// console.log(Math.min(50, 60, 20, 10))

// Math.max() -trả về số cao nhất
// console.log(Math.max(50, 60, 20, 10))
// -----------------------------------------------------------








/* 9. ĐỐI TƯỢNG NGÀY THÁNG - Date */
/* Tìm hiểu thêm :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=vi
*/

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
// console.log(`${day}/${month}/${year}`)
// -----------------------------------------------------------------




/* 10. CÂU LỆNH RẼ NHÁNH - if - else, switch */
var TungAge = 30;
// if(TungAge === 31){
//     console.log('Trả lời đúng')
// } else if (TungAge === 32){
//     console.log('Trả lời đúng lần 2')
// } else if (TungAge === 34){
//     console.log('Trả lời đúng lần 3')
// } else {
//     console.log('Sai rồi')
// }
/* --> Xét từ trên xuống dưới, nếu đúng thì dừng lại
nếu sai thì xét tiếp, không còn thì trả về else */

var HungAge = 30;
// switch(HungAge){
//     case 30: console.log('Đúng rồi')
//     break;
//     case 35: console.log('Đúng theo')
//     break;
//     case 38: console.log('Đúng theo')
//     break;
//     case 40: console.log('Đúng theo')
//     break;
//     default: console.log('không đúng')
// }
/* --> Khi bỏ từ khóa break, giá trị sẽ lọt xuống case
bên dưới, cho tới khi thấy break thì thôi.
Giá trị không tìm thấy sẽ xuống default */



/* --> Nên sử dụng if else khi dạng so sánh 
toán tử như < > !==...
Nên sử dụng switch khi có sẵn giá trị &
nhiều case, 3 hoặc cao hơn */ 
//-----------------------------------------------------



// 11. TOÁN TỬ 3 NGÔI - Ternary operator
var d = 40
var fullName = {
    name: 'Tung Bui',
    age: -31,
    adress: 'Hai Phong, VN'
}
var result = fullName.age > 0 ? 'Đúng rồi' : d
// console.log(result)
/*--> giá trị khớp thì kết quả sẽ sau dấu ?, 
còn lại sẽ sau dấu : */
//-------------------------------------------------------------------



// 12. VÒNG LẶP - Loop
/* 
1. for - lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng --> array,obj,string....
3. for/of - lặp qua value của đối tượng --> array,string...
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần, 
sau đó lặp khi điều kiện đúng 
*/

for (var h = 1; h <= 100; h++ ){
    // console.log(h)
}
/* --> gán h bằng 1, kiểm tra h nhỏ hơn 100
thì lệnh chạy h++ và thực thi vào trong {} */


var g = 20;
for (;g >= 0;) {
    g--;
    // console.log(g);
}
/* có thể cú pháp như trên, nhưng g sẽ trừ 1
rồi mới in */
var stringTestForIn = 'javascript';
var testForIn = {
    name: 'Tram Anh',
    age: 5,
    address: 'Hai Phong, VN'
};
var testFor = [
    'Tung Bui',
    'Hung Pham',
    'Tuan Khoi',
    'Khanh Lam'
];
var testForLength = testFor.length ; 
for (i = 0; i < testForLength; i++){
    // console.log(testFor[i])
}


for(var key in testFor){
    // console.log(key)
    // console.log(testFor[key]);
    // console.log(testFor[1]);
}

for(var key in testForIn){
    // console.log(key)
    // console.log(testForIn[key]);
    // console.log(testForIn['name']);
}


for (var key in stringTestForIn){
    // console.log(key)
    // console.log(stringTestForIn[key])
    // console.log(stringTestForIn[0])
}

for(var value of testFor){
    // console.log(value)
}
for(var value of stringTestForIn){
    // console.log(value)
}

// console.log(Object.keys(testForIn))
for(var value of Object.keys(testForIn)){
    // console.log(value)
    // console.log(testForIn[value])
    // console.log(testForIn['name'])
}
// console.log(Object.values(testForIn))
for(var value of Object.values(testForIn)){
    // console.log(value)
    // console.log(testForIn['name'])
}

var r = 0
while (r <= 100){
    // console.log(r)
    r++
}
while (r < testForLength){
    // console.log(testFor[r])
    r++
}




var e = 0;
do {
    // e++
    // console.log(e)
} while (e > 10);
/* vòng lặp luôn chạy ít nhất 1 lần,
dù điều kiện while sai, lần 2 mới kiểm tra
điều kiện rồi mới hủy */
var isSuccess = true;
var sosanh = 2;
do {
    e++
    // console.log('Nạp thẻ lần ' + e);
    if(sosanh < 1){
    isSuccess = false;
    }
} while (isSuccess && e < 10)
/* 
-Trường hợp trên, trong điều kiện
while ( giá trị boolean là true) thì
sẽ thực hiện vòng lặp. Vì vậy, câu lệnh
if bên trong là false, thì !false thì sẽ là đúng,
vòng lặp lại 3 lần. Ngược lại, câu if bên trong
là true thì !true sẽ là false, thì vòng lặp dừng lại lần 1

-Còn lệnh if(sosanh) nếu đúng thì là true của boolean
thì biến isSuccess = false; sẽ có hiệu lực. ngược lại
nếu là sai thì fasle, isSuccess = fasle không có hiệu lực
*/

for(var m = 0; m < 10; m++){
    // console.log(m);
    if(m >= 5){
        break;
    }
}
/* --> thêm một điều kiện if bên trong,
break thực thi việc dừng lại ngay, nếu if đúng. */

for(var m = 0; m <= 10; m++){
    if(m%2 == 0){
        continue;
    }
    // console.log(m)
}
/* --> thêm một điều kiện if bên trong,
continue sẽ bỏ qua (skip) giá trị, nếu if đúng. */

var nestedLoop = [
    10,
    [1, 2],
    [3, 4],
    [5, 6],
    12
];
var nestedLoopLength = nestedLoop.length;
for(q = 0; q < nestedLoopLength; q++){
    // console.log(nestedLoop[q])
    for(w = 0; w < nestedLoop[q].length; w++){
        // console.log(nestedLoop[q][w]);
    }
}
/* --> vòng lặp nồng nhau - Nested Loop
vòng cha 3 giá trị, mỗi giá trị có 2 giá trị con
vòng lặp con sẽ lấy 2 giá trị con trong 3 giá trị
cha -->> thành 6 giá trị con */

for (var o = 100; o > 0; o -= 5){
    // console.log(o)
}
for(var y = 100; y >= 0; y--){
    // console.log(y)
}
//-----------------------------------------------------------



// 13. String/Array include() method
//Tìm kiếm ra phần tử trong chuỗi hoặc mảng của dữ liệu

var include = 'Web responsive made';
// console.log(include.includes('responsive'));
// console.log(include.includes('responsive', 4));

var include1 = ['Web', 'responsive', 'made'];
// console.log(include1.includes('responsive'))
// console.log(include1.includes('responsive', 0))

//-----------------------------------------------------------



// 14. Callback - Gọi lại hàm
//Là Hàm và được truyền quá đối số của hàm khác
function myFunction1(testCallBack){
    if(typeof myFunction2 === 'function'){
     var result20 = testCallBack(20)
    }
    return result20 + 20
}
function myFunction2(value1){
    return value1  + 15
}
var testCallBack = myFunction1(myFunction2)
// console.log(testCallBack)

var menOfWar = ['Javascript', 'PHP', 'NodeJS']

Array.prototype.map2 = function(callback){
    var menOfWarLength = this.length, output1 = []
    for(var i = 0; i < menOfWarLength; ++i){
        output1.push(callback(this[i]))
    }
    return output1
}

var html1 = menOfWar.map2(function(hip){
    return `<h2> ${hip} </h2>`
})
// console.log(html1)

Array.prototype.forEarch2 = function(callback){
    for(index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}
var menOfWar1 = ['Javascript', 'PHP', 'NodeJS']

var result20 = menOfWar.forEarch2(function(hop, hip, hat){
    // console.log(hop, hip, hat)
})

Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result7 = callback(this[index])
            if(result7){
                output.push(this[index])
            }
        }
    }
    return output
}
var filterCourse = [
    {name: 'Javascript', coin: 700},
    {name: 'PHP', coin: 700},
    {name: 'NodeJS', coin: 700}
]
var htmls4 =  filterCourse.filter2(function(course){
    return course.coin <= 700
})
// console.log(htmls4)


Array.prototype.some2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
           if (callback(this[index])){
               return true
           }
        }
    }
    return false
}
var html6 = filterCourse.some2(function(course){
    return course.coin == 700
})
// console.log(html6)




Array.prototype.every2 = function(callback){
    for (var index in this){
        if(this.hasOwnProperty(index)){
            var result6 = callback(this[index])
           if (!result6){
               return false
           }
        }
    }
    return true
}
var html3 = filterCourse.every2(function(course){
    return course.coin == 700
})
// console.log(html3)

// every3()
var coiOfFrend = [
    {name: 'hieu', coin: 40},
    {name: 'hung', coin: 40},
    {name: 'tien', coin: 40},
    {name: 'lam', coin:  40},
    {name: 'hieu', coin: 40}
    ], coiOfFrendLength = coiOfFrend.length

function every3(callback){
    for(i=0; i<coiOfFrendLength; i++){
        var result20 = callback(coiOfFrend[i])
        if(!result20){
            return false
        }
    }
    return true
}
function every4(acb){
    return acb.coin == 40
}
var resultTotalCoin = every3(every4)
// console.log(resultTotalCoin)


//-----Bài Tập callback

var myArray = [1,2,3,4,5,6,7,8,9,10], twoLengt = myArray.length;
function testOne(one, callback) {
    var two = [11,12,13];
    for(var i= 0; i < twoLengt; i++){
        two.push(one[i])
    }
    return callback(two, one)
}  
function testTwo(two, one){
    var result20 =  one.concat(two)
    return result20
}

var result19 =  testOne(myArray, testTwo)
// console.log(result19)

//-------------------------------------------------------------




// 15. HTML DOM - HTML Documents object Model
/* 
-- Element
-- Attribute
-- Text 
*/

// Get element & attribute methods:
/*
1.getElementByID - lhỉ Lấy 1 ID
2.getElementsByClassName - Chỉ lấy số nhiều class
3.getElementsByTagName  - Chỉ lấy số nhiều tag name
4.querySelector - Chỉ lấy 1 
5.querySelectorAll - Chỉ lấy số nhiều

6.HTML collection

*/
// var testDom = document.querySelector('.heading__svg-image') //lấy phần tử (element) từ class
// testDom.className = 'heading__svg-image heading__svg-image-1' //thêm class vào phần tử (elements)
// testDom.setAttribute('href', 'menofwan') //thêm thuộc tính (attribute) vào phần tử (elements)
// var testGetAttribute = testDom.getAttribute('href') // đắt biến và lấy ra thuộc tính (attribute ) từ phần tử (element)
// console.log(testGetAttribute)

//--------------->Get Text methods
/*
-- innerText - nằm trên element - chỉ lấy text node

-- textContent - nằm trên element và text node lấy hết nội dung text node,
 gồm cả khoảng trống, trắng và nội dung đã ẩn

 --innerHTML - lấy ra và thay đổi cả element, attribute, text, chỉ thẻ con
 --innerHTML - lấy ra và thay đổi cả element, attribute, text, nhưng gồm cả thẻ cha
*/

// --------------->Dom style

// var testDomStyle = document.querySelector('.container__contain');
// testDomStyle.style.backgroundColor = 'red'

// Object.assign(testDomStyle.style, {
//     backgroundColor: 'green'
// })
// console.log(testDomStyle.style.backgroundColor)


//--------------->ClassList property

// var testDomStyle = document.querySelector('.container__contain');
//add - thêm class
// testDomStyle.classList.add('add_class')

//contains - kiểm  tra có class không?
// console.log(testDomStyle.classList.contains('add_class'))

//remove - xóa bỏ class
// testDomStyle.classList.remove('add_class')

//toggle - nếu có thì xóa, nếu không thì thêm
// testDomStyle.classList.toggle('add_class')


//--------------> Dom Events
/*
1. Attribute events - thêm luôn sự kiện bằng thuộc tính của element

2. Assign event using the Element node - thêm sự kiện
bằng element node
*/


// var  clickElement = document.querySelectorAll('.container__header');
// clickElementLength = clickElement.length;
// for (var i = 0; i < clickElementLength; i++ ){
//     clickElement[i].onclick = function(e){
//         console.log(e.target)
//     }}


//---------------------------------------------------------------------------


// 16. JSON
/* 
1. Là một định dạng dữ liệu, và thể hiện dạng (Chuỗi)
2. JavaScript Object Notation
3. JSON: Number, String, Boolean, Null, Array, Object
*/

// stringify: Từ Javascript types -> JSON
// parse: Từ JSON -> Javascript types

var json = '1';
var json1 = '"Tung Bui"';
var json2 = 'True';
var json3 = 'Null';
var json4 = '["Javacript", "PHP"]';
var json5 = '{"name": "Tung", "age": 31}';

// console.log(JSON.parse(json1))

//----------------------------------------------------------------------------







// 17. Promise
/* Để xử lý các thao tác bất động bộ (Async)
trước khi dùng promise thường sẽ dùng Callback
nhưng quá sâu, nhiều Callback thì thành Callback Hell, gây khó hiểu
khắc phục tình trạng Callback Hell.
*/
/* Lưu ý: Nếu chuỗi nhiều then, trả về một hàm promise thì
then tiếp theo sẽ đợi then đầu tiên chạy song, rồi mới được
lọt vào then thứ 2, nếu trả về không phải promise, thì
then thứ 2 sẽ được lọt vào và chạy luôn cùng then thứ 1

-->> nếu trong chuỗi then có 1 then bị reject, 
sẽ bị lọt vào catch
*/

// 3 trạng thái 
// Pending
// Fulfield
// Rejected



// var promise = new Promise(
//     // Executor
//     function(resolve, reject){
//         // Logic
//         // Thành Công: resolve()
//         // Thất bại: reject()
//         resolve({name: 'Tung', age: 31})
//         // reject('Không tìm thấy')
//     }
// );

// promise
//     .then(function(){
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([1,2,3])
//             }, 2000)
//         })
//     })
//     .then(function(object){
//         console.log(object)
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([4,5,6])
//             }, 1000)
//         })
//     })
//     .then(function(object){
//         console.log(object)
//         return new Promise(function(resolve){
//             setTimeout(function(){
//                 resolve([7,8,9])
//             }, 500)
//         })
//     })
//     .then(function(object){
//         console.log(object)
//     })
//     .catch(function(string){
//         console.log(string)
//     })
//     .finally(function(){
//         console.log('Done')
//     })

// function sleep(ms){
//     return new Promise(
//         function(resolve, reject){
//             setTimeout(resolve, ms)
//         }
//     )
// }

// sleep(2000)
//     .then(function(){
//         console.log(1)
//         return sleep(2000)
//     })
//     .then(function(){
//         console.log(2)
//         return sleep(2000)
//     })
//     .then(function(){
//         console.log(3)
//         return sleep(2000)
//     })
//     .then(function(){
//         console.log(4)
//     })
//     .catch(function(){
//         console.log('failed')
//     })





// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all


// var promise = Promise.resolve('Success')
// var promise = Promise.reject('Err')
// promise
//     .then(function(result){
//         console.log('result: ', result)
//     })
//     .catch(function(err){
//         console.log('err: ', err)
//     })

// var promise1 = new Promise(function(resolve){
//     setTimeout(function() {
//         resolve([1])
//     }, 1000);
// })
// var promise2 = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve([2,3])
//     }, 2000);
// })

// Promise.all([promise1, promise2])
//     .then(function(result){
//         var result1 = result[0]
//         var result2 = result[1]
//         console.log(result1.concat(result2))
//     })
//     .catch(function(){
//         console.log('err')
//     })


//----Bài tập Promise

var users = [
    {
        id: 1,
        name: 'Tung'
    },
    {
        id: 2,
        name: 'Hung Pham'
    },
    {
        id: 3,
        name: 'Khoi'
    },
    {
        id: 4,
        name: 'Hung'
    }
];
var comments = [
    {
        id: 1,
        user_id:1,
        content: 'Anh Tùng học chưa hiểu bài'
    },
    {
        id: 2,
        user_id:2,
        content: 'Cứ học mãi sẽ hiểu'
    }
]

// 1 Lấy comments
// 2 từ comments lấy ra user_id,
// 3 từ user_id lấy ra user tương ứng

//Fake API

function getComments(){
    return new Promise(function(resolve){
        resolve(comments)
    })
}

function getUserbyIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        });
        resolve(result);
    })
}

getComments()
    .then(function(comments){
        var userIds = comments.map(function(comment){
            return comment.user_id;
        });
        return getUserbyIds(userIds)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data){
        // console.log(data)
    })

// getUserbyIds([1,2])
//     .then(function(user){
//         // console.log(user)
//     })




var newmembers = [
    {
        id: 1,
        name: 'Tung'
    },
    {
        id: 2,
        name: 'Hung Pham'
    },
    {
        id: 3,
        name: 'Khoi'
    },
    {
        id: 4,
        name: 'Lam'
    }
];

var conversations = [
    {
        id: 1,
        user_id:1,
        content: 'Anh Tùng học chưa hiểu bài'
    },
    {
        id: 2,
        user_id:2,
        content: 'Cứ học mãi sẽ hiểu'
    },
    {
        id: 3,
        user_id:3,
        content: 'Bố đang làm gì đó?'
    },
    {
        id: 4,
        user_id:4,
        content: 'Chú học bài song chưa?'
    },
    {
        id: 5,
        user_id:1,
        content: 'Đang làm gì thế anh Hưng'
    }
]

function getConversations(){
    return new Promise(function(resolve){
        resolve(conversations)
    })
}
function getMembers(memberIds){
    return new  Promise(function(resolve){
        var result = newmembers.filter(function(newmember){
            return memberIds.includes(newmember.id)
        })
        resolve(result)
    })
}

getConversations()
    .then(function(conversations){
        var userIDs = conversations.map(function(conversation){
            return conversation.user_id
        })
        return getMembers([userIDs])
                .then(function(){
                    return {
                        users: newmembers,
                        chats: conversations
                    }
    })
    .then(function(data){
        var conversationBlock = document.getElementById('test-javascript');
        var html20 = '';
        data.chats.forEach(function(chat){
            var oldmember = data.users.find(function(user){
                return user.id === chat.user_id
            });
            html20 += `<li>${oldmember.name}: ${chat.content}</li>`
        })
        // conversationBlock.innerHTML = html20;
    })
})
//---------------------------------------------------------------------------------------





//18. fetch()

var postAPI = 'https://jsonplaceholder.typicode.com/posts'

fetch(postAPI)
    .then(function(response){
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts){
        var html115 = posts.map(function(post){
            return `<li>
                <h2> ${post.title} </h2>
                <p> ${post.body} </p>
            </li>`;
        });
        // var htmlFnish = html115.join('');
        // document.getElementById('test-javascript-1').innerHTML = htmlFnish
    })
    .catch(function(error){
        console.log('Có lỗi')
    })



    
    // var coursesApi = 'http://localhost:3000/courses'
    // fetch(coursesApi)
    //     .then(function(response){
    //     return response.json();
    //     })
    //     .then(function(courses){
    //         // console.log(courses)
    //     })

/* CRUD
        - Create: Tạo mới -> POST
        - Read: Lấy dữ liệu -> GET
        - Update: Chỉnh sửa -> PUT / PATCH
        - Delete: Xóa -> DELETE
*/



// 19. ES6+
// ---------------------var let const---------------------
/* 
1. var / let, const: scope, hosting
2. const / var, let: assignment
Giống nhau: Đều giống nhau để định nghĩa ra biến
Khác nhau: var truy cập rộng ngoài (scope), và có hỗ trợ hosting.
và const không gán lại được. let gán lại được

Code thuần: var

Thưr viện như: babel: const, let
Khi định nghĩa không cần gán lại biến đó const
Khi định nghĩa cần gán lại biến đó let
*/

// ---------------------Template string---------------------
const nameTemplate = 'Javascript';
const nameTemplate2 = `Courses ${nameTemplate}` 
const nameTemplate3 = `Courses \${}` 


const lines = 'line 1\nline 2\nLine 3'
const lines1 = 'Line 1\n' + 'Line 2\n' + 'Line 3\n'
const line2 = `Line 1
Line 2
Line 3`


// ---------------------Arrow function-------------------------
/* arrow funtion không có 'this' là (context) 
và object instructor
*/
const sum = (a, b) => a+b; // không có dấu { } tương đương return

const sum1 = (a,b) => ({c: a, d: b}) // có {} phải có dấu () bao quanh

const sum2 = log => console.log(log) // 1 tham số, bỏ luôn ()
// sum2('message')

const course1 = {
    name: 'javascript',
    getName: function(){ // arrow funtion không có this (context)
        return this.name // this là context
    }
}

//--------------------- Classes---------------------
// Tương đương object constructor, nhưng viết gọn hơn,
//gộp được giá trị tương đương vào khối

// function Courses(name, price, ){
//     this.id = name;
//     this.cost = price;
//     this.getName = function(){
//         return this.name
//     }
// }

class Courses {
    constructor(name, price){
        this.id = name;
        this.cost = price
    }
    getName(){
        return `${this.id} : có giá là ${this.cost}`;
    }
    getPrice(){
    return this.id;
    }
    run(){
        const isSuccess = false
        
        if(!isSuccess){
            isSuccess = true
        }
    }
}
const jsCourse = new Courses ('Javascript', '100 USD')
const phpCourse = new Courses ('PHP', '200 USD')
// console.log(jsCourse)
// console.log(phpCourse)
// console.log(jsCourse.getName())
// console.log(phpCourse.getName())

//---------------------Default parameter values---------------------

/* giá trị mặc định tham số:
Nếu không nhập đối số thì tham số sẽ là undefined.
và giá trị undefined có thể thay đổi thành giá trị
 => nếu không nhập đối số thì lúc này giá trị tham số
 sẽ là giá trị đã thay đổi & viết ngắn gọn hơn
*/

function phep_chia(a = 6, b = 3) {
    return a / b;
}
// console.log(phep_chia(4, 2));
// console.log(phep_chia(9));
// console.log(phep_chia());


function defaultParameter(log){
    if(typeof log === 'undefined'){
        log = 'Giá trị mặc định'
    }
    console.log(log)
}
// defaultParameter()


function defaultParameter1(log = 123){
    console.log(log)
}

// defaultParameter1()

function logger (log, type = 'log'){
    console[type](log)
}
// logger('message')
// logger('message', 'error')
// logger('message', 'warn')


//----------------Enhanced object literals-----------------
//1. Định nghĩa key: value cho object
//2. Định nghĩa method cho object
//3. Định nghĩa key cho object dưới dạng biến

var name2 = 'javascript'
var price2 = 1000

var course2 = {
    name: name2,
    price: price2,
    getName: function(){
        return name2
    }
}
// console.log(course2)
// console.log(course2.getName())

var course3 = {
    name2,
    price2,
    getName() {
        return name2
    }
}
// console.log(course3)
// console.log(course3.getName())


var fieldName = 'name';
var fieldPrice = 'price';

const course4 = {
    name3: 'Javascript',
    [fieldName]: 'PHP',
    [fieldPrice]: 1000
};
// console.log(course4)

//-------------------Destructuring & rest-----------------
/* Destructuring bóc tách mảng và object
    rest những phần tử còn lại chưa được tách ra
    rest dùng trong tham số, spread dùng trong đối số

    Và cả 2 đều dùng được cho cả Hàm function
*/
var array = ['Javascript', 'PHP', 'Ruby'];
var a5 = array[0], b5 = array[1], c5 = array[2]
// console.log(a5, b5, c5)

var [a6, , c6] = array;
// console.log(a6, c6)

var [a7,...rest] = array;
// console.log(rest)

var objectTest = {
    skill: 'Javascipt',
    test10: 'one',
    move: {
        skill: 'let'
    },
    // goOne: 'men'
}

var {skill : skillParent,test10, move:{skill:skillChildren}, goOne='Default goOne'} = objectTest
// console.log(skillParent)
//-----Có thể dùng ...rest tương ứng aray bên trên

function restTest(a,b,...params){
    console.log(a,b)
    console.log(params);
}
// restTest(1,2,3,4,5,6)

function testES({skill, move,...rest}){
    console.log(skill, move,rest) 
}

// testES(objectTest = {
//     skill: 'Javascipt',
//     test10: 'one',
//     move: {
//         skill: 'let'
//     },
// })

function testES1([skill,...rest]){
    console.log(skill, rest) 
}
// testES(['Javascript', 'PHP', 'Ruby'])


//---------------------------Spread------------------------------
/* spread dùng trong đối số, rest dùng trong tham số
    spread có chức năng loại bỏ ngoặc arry và object
    để nối array và object hoạc để lấy  giá tị bên trong làm đối số
    trùng tên sẽ bị ghi đè, bởi thằng sau cùng.
 */

var arraySpread = ['javascript', 'PHP', 'Ruby']
var arraySpread1 = ['reactJS', 'dark1']
var arraySpread2 = [...arraySpread, ...arraySpread1]
// console.log(arraySpread2)

var objectSpread = {
    name:'Javascript',
    id:1
};
var objectSpread1 = {
    name2:'PHP',
    id2:2
}
var objectSpread2 = {...objectSpread, ...objectSpread1}
// console.log(objectSpread2)

var arraySpread3 = ['javascript', 'PHP', 'Ruby'];
function arraySpread3F (a,b,c){
    console.log(a,b,c)
}

// arraySpread3F(...arraySpread3) // sẽ là spread

function arrayRest3F (...rest){ // tham số ở đây sẽ là rest
    console.log(rest)
}

// arrayRest3F(...arraySpread3) // sẽ là spread


//----------------------Tagged template literals-------------------------

function taggedTL ([first,...string], ...value){
    // console.log('first :', first)
    // console.log('string :', string)
    // console.log('value :', value)
    return value.reduce((acc, curr) => [...acc, `<span>${curr}</span>`,
            string.shift()],[first]
        ).join('')
}

var brand = 'F8';
var course19 = 'Javascript'
const html21 = taggedTL`Học lập trình ${course19} tại ${brand}!`

// console.log(html21)


//--------------------Modules----------------------
/*
import:
export:
Cach 1 và 2 cần thêm file modules.js, 
cách 3 và 4 cần cả 2 file modules.js, constants.js.
*/

//Cách 1;
// import loggerTest from './modules.js'

// loggerTest('Message', 'log')


//Cách 2:

// import loggerTest,{
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './modules.js'

// loggerTest('Message', TYPE_LOG)

//Cách 3: Gồm cả file constants.js

// import loggerTest from './modules.js'
// import {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './constants.js'

// loggerTest('Message', TYPE_WARN)

// Cách 4:
// import loggerTest from './modules.js'

// import * as constants from './constants.js'

// console.log(constants)










//--------------------Optional chaining (?.)-------------------
/* Dùng để tìm thử xem có dữ liệu obj hay array hoặc
function không? nếu không có thì không thực thi,
và không bị lỗi.
nếu không dùng, đoạn mã không tìm thấy, sẽ bị báo lỗi
ngay lập tức.
 */


const chaining = {
            guest: 'Hung',
            // member: {
            //     cat: 'Tung',
            //     member2:{
            //         cat2: 'Khoi'
            //     }
            // },
            // getTwo: function(a){
            //     console.log(a)
            // }

}

// console.log(chaining.member.member2.cat2)
//=>> không optional chaining sẽ lỗi

if(chaining?.member?.member2?.cat2){
    console.log(chaining.member.member2.cat2)
}
if(chaining?.['member']?.['member2']?.['cat2']){
    console.log(chaining.member.member2.cat2)
} //Cách viết khác

if(chaining.getTwo?.(2)){
    console.log(chaining.getTwo)
}



