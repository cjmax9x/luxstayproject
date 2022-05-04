
// 15. HTML DOM - HTML Documents object Model ( file bên index phân biệt dấu gạch--)
//-----------------------------------------------------------------------
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

//----------------------------------------------------------------------------------

// 3. input / select
// 4. key up / key down

var inputElement = 
    document.querySelector('input[type="text"]')
inputElement.onchange = function(e){
    // console.log(e.target.value)// nội dung thay đổi mới lấy, và chỉ chuột ra ngoài
}
inputElement.oninput = function(e){
    // console.log(e.target.value)// nhập đến đâu lấy đến đó
}

var inputElement = 
    document.querySelector('input[type="checkbox"]')
inputElement.onchange = function(e){
    // console.log(e.target.checked) // check là true, không check là false
}

var inputElement = 
    document.querySelector('select')
inputElement.onchange = function(e){
    // console.log(e.target.value) // check là true, không check là false
}


var inputElement = 
    document.querySelector('input[type="text"]')
inputElement.onkeyup = function(e){
    // console.log(e.target.value)// nội dung thay đổi mới lấy, và chỉ chuột ra ngoài
}



// 5. preventDefault - Ngăn chặn tính năng mặc định
// 6. stopPropagation

var aElement = document.links
for (var i = 0; i<aElement.length; i++){
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith('https://fullstack.edu.vn/')){
            e.preventDefault();
        }
    }
}
/*-- trường hợp trên, nếu href không phải là https://fullstack.edu.vn/
thì sẽ bị chặn
*/

var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e){
    e.preventDefault()
}
//- chặn không cho thẻ ul ẩn ( mặc định) khi không focus vào thẻ input

var divElement = document.querySelector('div')
divElement.onclick = function(e){
    console.log('clickme')
}

var btnElement = document.querySelector('button')
btnElement.onclick = function(e){
    e.stopPropagation();
    console.log('True')
}
// --Nổi bọt. thẻ con không thể nhận onclick của thẻ cha khi bấm vào


// 7. addEventListener() Events Listener

/* Lắng nghe sự kiện, tương tự Dom events, nhưng phức tạp hơn
thực kiện nhiều việc trong sự kiện, có thể hủy 1 trong các
việc đó lại, những việc khác vẫn làm */

var TungBuiElement = document.querySelector('.TungBui')
// TungBuiElement.addEventListener('click', function(e){
//     console.log('Viec 1')
// })
function viec1 ( ){
    console.log('Viec1')
}
function viec2 ( ){
    console.log('Viec2')
}function viec3 ( ){
    console.log('Viec3')
}
TungBuiElement.addEventListener('click', viec1)
TungBuiElement.addEventListener('click', viec2)
TungBuiElement.addEventListener('click', viec3)

setTimeout(() => {
    TungBuiElement.removeEventListener('click', viec3)
}, 3000);

//--------------------------------------------------------------------------



var coursesApi = 
    'http://localhost:3000/courses'

function start(){
    getCourses(function(courses){
        renderCourses(courses)
    });
    handleCreateForm()
}
start();

// 1.1 Lấy dữ liệu từ json về
function getCourses(callback){
    fetch(coursesApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

// 1.2.Xuất ra trình duyệt
function renderCourses(courses){ 
    var listCoursesBlock = 
        document.getElementById('list-courses');
    var html = courses.map(function(course){
        return `<li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <h3>${course.description}</h3>
            <button onclick="handleCoursesDelete(${course.id})">Xóa</button>
            <button onclick="handleUpdateCourse(${course.id})">Sửa</button>
        </li>`
        
    })
    listCoursesBlock.innerHTML = html.join('')
}   

// 2.1 Tạo mô hình JSON server hình thức POST - Create
function createCourses(one, callback){
    var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(one)
    }
    fetch(coursesApi, options)
        .then(function(respone){
           return respone.json();
        })
        .then(callback)
}
// 2.2Nhận dữ liệu từ thẻ input để đưa nên json
function handleCreateForm(){
    var createBtn = document.querySelector('#creat-Courses')
    createBtn.onclick = function(){
        var inputName = 
            document.querySelector('input[name="name"]').value;
        var inputDescription  = 
            document.querySelector('input[name="description"]').value;
        var formData = {
            name: inputName,
            description: inputDescription
        }
        createCourses(formData, function(){
            getCourses(function(courses){
                renderCourses(courses)
            });
        })
    }
}

// 3.Tạo mô hình JSON server hình thức DELETE - DELETE
function handleCoursesDelete(id){
    var options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }
    fetch(coursesApi + '/' + id , options)
        .then(function(respone){
            return respone.json();
        })
        .then(function(){
            var courseItem = document.querySelector('.course_item_' + id)
            if(courseItem){
                courseItem.remove()
            }
        })
    }

// 4.1 Tạo mô hình JSON server hình thức PUT - Update
function updateCourse(id, formData, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    fetch(coursesApi + '/' + id, options)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}
// 4.2 Tạo hàm lấy dữ liệu và cập nhật lên json
function handleUpdateCourse(id) {
    var name = document.querySelector(`.course-item-${id} h4`).textContent;
    var description = document.querySelector(`.course-item-${id} h3`).textContent;
    var nameEdit = document.querySelector('input[name = "name"]').value = name;
    var descriptionEdit = document.querySelector('input[name = "description"]').value = description;
    var btnEdit = document.querySelector('#creat-Courses')
    btnEdit.setAttribute('id', "btn-edit")
    btnEdit.textContent = 'edit'
        btnEdit.onclick = function() {
        var nameEdit2 = document.querySelector('input[name = "name"]').value
        var descriptionEdit2 = document.querySelector('input[name = "description"]').value
        var formData = {
                name: nameEdit2.trim(),
                description: descriptionEdit2.trim(),
            }
            updateCourse(id, formData, function(){
                getCourses(function(courses){
                    renderCourses(courses)
                });
            })
        btnEdit.setAttribute('id', "creat-Courses")
        btnEdit.textContent = 'create'
        nameEdit2.textContent = ''
        descriptionEdit2.textContent = ''

    }
}





