console.log("Server started and collections cleared.")
let list=[]
let editableIndex = null
let duplicateList=[]
let  bbb = null;

fn.onblur = function() {
  if (!fn.value){ // not email
    fn.classList.add('invalid');
   elmFNameError.innerHTML ="plz enter fname"
  }
};
fn.onfocus = function() {
 
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmFNameError.innerHTML =""
  }
};


lname.onblur = function() {
  if (!lname.value){ // not email
    lname.classList.add('invalid');
   elmLNameError.innerHTML ="plz enter lname"
  }
};

lname.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmLNameError.innerHTML =""
  }
};


number.onblur = function() {
  if (!number.value){ // not email
    number.classList.add('invalid');
   elmPhoneError.innerHTML ="plz enter number"
  }
};
number.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmPhoneError.innerHTML =""
  }
};


gen.onblur = function() {
  if (!gen.value){ // not email
    gen.classList.add('invalid');
   elmGenderError.innerHTML ="plz Select gender"
  }
};

gen.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmGenderError.innerHTML =""
  }
};


address.onblur = function() {
  if (!address.value){ // not email
    address.classList.add('invalid');
   elmAddressError.innerHTML ="plz enter address"
  }
};
address.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmAddressError.innerHTML =""
  }
};


country.onblur = function() {
  if (!country.value){ // not email
    country.classList.add('invalid');
   elmCountryError.innerHTML ="plz select country"
  }
};
country.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmCountryError.innerHTML =""
  }
};


state.onblur = function() {
  if (!state.value){ // not email
    state.classList.add('invalid');
   elmStateError.innerHTML ="plz  select state"
  }
};
state.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmStateError.innerHTML =""
  }
};


city.onblur = function() {
  if (!city.value){ // not email
    city.classList.add('invalid');
   elmCityError.innerHTML ="plz select city"
  }
};
city.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmCityError.innerHTML =""
  }
};


pincode.onblur = function() {
  if (!pincode.value){ // not email
    pincode.classList.add('invalid');
   elmPincode.innerHTML ="plz enter pincode"
  }
};

pincode.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
     elmPincode.innerHTML =""
  }
};


function deleteRecord(id) {
     document.getElementById("submit").innerHTML=  "  ";
    console.log("deleteRecord",{id,list})
     const i = list.findIndex( b => b.id == id)
     list.splice(i,1);
     console.log("deleteRecord",{i,list})
      localStorage.setItem('list', JSON.stringify(list));
    renderHtml()
   }

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


function Search(name){
    name =document.getElementById("search").value;
    
    let search = []
   
   if(name){
    var a =duplicateList.filter(b =>["fname","lname"].some(c => b[c] && b[c].toLowerCase().includes(name.toLowerCase())))
    var b = c.filter(b =>["fname","lname"].some(c => b[c] && b[c].toLowerCase().includes(name.toLowerCase())))
      list = a;
      list = b;
      }
     else{
      list =duplicateList;
      list = c;
      }
      console.log({list})

     renderHtml()
}
  

function edit(index){

        document.getElementById("fn").value = list[index].fname;  
        document.getElementById("lname").value = list[index].lname;  
        document.getElementById("number").value = list[index].number;  
        document.getElementById("address").value = list[index].address;  
            if(list[index].gender == "male"){
                document.getElementById('male').checked = true;
            }
            if(list[index].gender == "female"){
                document.getElementById('female').checked = true;
            }
        document.getElementById("country").value = list[index].country; 
        document.getElementById("state").value = list[index].state;  
        document.getElementById("city").value = list[index].city;  
        document.getElementById("pincode").value = list[index].pincode;  
   
        // let  bbb = list[index].photo.name;
        console.log(bbb)
        editableIndex = index;    
        renderHtml()
}

function saveEdit(index){
     
      console.log("======saveEdit-----",{list})
      const fname   =  document.getElementById("fn").value
      const lname   =  document.getElementById("lname").value
      const number  =  document.getElementById("number").value
      const address =  document.getElementById("address").value 
      let g1;
          if(document.getElementById('male').checked){
              g1 = document.getElementById('male').value;
          }
          if(document.getElementById('female').checked){
              g1 = document.getElementById('female').value;
          }           
      const country =  document.getElementById("country").value        
      const state   =  document.getElementById("state").value        
      const city   =  document.getElementById("city").value    
      const pincode =  document.getElementById("pincode").value     
      const photos = document.getElementById("imgInp").files[0];
      document.getElementById("imgInp").returnvalue = list[index].photo.name;
        console.log(document.getElementById("imgInp").returnvalue )
      console.log(photos)
     
  
      if (photos == null){
        list[index].photo.name = list[index].photo.name;
      }
      else{
          const a = photos.name;
          list[index].photo.name = a
      }
      console.log(a);


      console.log("======save-----",{index})

        list[index].fname   =    fname;
        list[index].lname   =    lname; 
        list[index].number  =   number
        list[index].address =  address
        list[index].gender  =  g1
        list[index].country =  country
        list[index].state   =  state
        list[index].city    =  city
        list[index].pincode =  pincode
        // list[index].photo.name =  a
        
  
       localStorage.setItem('list', JSON.stringify(list));
       document.getElementById("elmFNameError").innerHTML=  ""; 
       document.getElementById("elmLNameError").innerHTML=  ""; 
       document.getElementById("elmPhoneError").innerHTML=  "";
       document.getElementById("elmGenderError").innerHTML=  "";
       document.getElementById("elmAddressError").innerHTML=  "";
       document.getElementById("elmCountryError").innerHTML=  ""; 
       document.getElementById("elmStateError").innerHTML=  ""; 
       document.getElementById("elmCityError").innerHTML=  ""; 
       document.getElementById("elmPincode").innerHTML=  ""; 
       document.getElementById('fn').value = "";
       document.getElementById('lname').value = "";
       document.getElementById('number').value = "";
       document.getElementById('address').value = "";
       document.getElementById('male').checked = false;
       document.getElementById('female').checked = false;
        var dropDown1 = document.getElementById("country");  
          dropDown1.selectedIndex = 0;  
        var dropDown2 = document.getElementById("state");  
          dropDown2.selectedIndex = 0;  
        var dropDown3 = document.getElementById("city");  
          dropDown3.selectedIndex = 0;  
       document.getElementById('pincode').value = "";
        document.getElementById("imgInp").value = ""
          editableIndex = null;
          document.getElementById("submit").innerHTML=  " Successfully Updated ";
          setTimeout(fade_out, 2000);
        function fade_out() {
        $("#submit").fadeOut().empty();
        }
          renderHtml()
}



function insertRecord() {
    var fname=document.getElementById("fn").value;
      var lname=document.getElementById("lname").value;
       var number=document.getElementById("number").value;
        let gen;
            if(document.getElementById('male').checked){
                gen = document.getElementById('male').value;
            }
            if(document.getElementById('female').checked){
                gen = document.getElementById('female').value;
            }
            var address=document.getElementById("address").value;
              var country=document.getElementById("country").value;
                var state=document.getElementById("state").value;
                  var city=document.getElementById("city").value;
                    var pincode=document.getElementById("pincode").value;
                      var phoneno = /^[0-9]+$/;
  
          
                    if(!fname){
                          document.getElementById("elmFNameError").innerHTML=  " Please enter your fname "; 
                    }
                    else{
                          document.getElementById("elmFNameError").innerHTML=  ""; 
                          renderHtml();
                    }

                  if(!lname){
                    document.getElementById("elmLNameError").innerHTML=  " Please enter your lname "; 
                  }
                  else{
                    document.getElementById("elmLNameError").innerHTML=  ""; 
                    renderHtml();
                  }

                  if(!number || !number.match(phoneno) || number.length<10 ||number.length>10){
                     document.getElementById("elmPhoneError").innerHTML=  " Please enter your valid phone no "; 
                  }
                  else{
                    document.getElementById("elmPhoneError").innerHTML=  ""; 
                    renderHtml();
                  }

                  if(!address){
                     document.getElementById("elmAddressError").innerHTML=  " Please enter your address "; 
                  }
                  else{
                    document.getElementById("elmAddressError").innerHTML=  ""; 
                    renderHtml();
                  }

                  if(!country ){
                     document.getElementById("elmCountryError").innerHTML=  " Please Select Country ";
                  }
                  else{
                    document.getElementById("elmCountryError").innerHTML=  ""; 
                    renderHtml();
                  }


                  if(!state ){
                     document.getElementById("elmStateError").innerHTML=  " Please Select state ";
                  }
                  else{
                    document.getElementById("elmStateError").innerHTML=  ""; 
                    renderHtml();
                  }


                  if(!city ){
                     document.getElementById("elmCityError").innerHTML=  " Please Select city ";
                  }
                  else{
                    document.getElementById("elmCityError").innerHTML=  ""; 
                    renderHtml();
                  }

                  if(!pincode || !pincode.match(phoneno) || pincode.length<6 ||pincode.length>6){
                     document.getElementById("elmPincode").innerHTML=  " Please valid pincode ";
                  }
                  else{
                    document.getElementById("elmPincode").innerHTML=  ""; 
                    renderHtml();
                  }

                 if(!gen){
                   document.getElementById("elmGenderError").innerHTML=  " Please Select Gender";
                   
                 }
                 else{
                    document.getElementById("elmGenderError").innerHTML=  ""; 
                    renderHtml();
                  }

                  if(!fname || !lname || !number  || !number.match(phoneno) ||number.length>10 || number.length<10|| !address || !country || !state || !city || !pincode || !pincode.match(phoneno)  || pincode.length<6 ||pincode.length>6 || !gen ){
                    return
                  }


  if(editableIndex !== null){
      console.log("119")
      saveEdit(editableIndex)

      document.getElementById("submit").innerHTML=  " Successfully Updated ";
      setTimeout(fade_out, 2000);
        function fade_out() {
          $("#submit").fadeOut().empty();
        }
        }
  else{  
        document.getElementById("elmFNameError").innerHTML=  ""; 
        document.getElementById("elmLNameError").innerHTML=  ""; 
        document.getElementById("elmPhoneError").innerHTML=  "";
        document.getElementById("elmAddressError").innerHTML=  "";
        document.getElementById("elmCountryError").innerHTML=  ""; 
        document.getElementById("elmStateError").innerHTML=  ""; 
        document.getElementById("elmGenderError").innerHTML=  "";
        document.getElementById("elmCityError").innerHTML=  ""; 
        document.getElementById("elmPincode").innerHTML=  ""; 

        console.log("123")

        const id = list.length+1
        const fname = document.getElementById("fn").value;
        const lname = document.getElementById("lname").value; 
        const number = document.getElementById("number").value; 
        let gender;
        if(document.getElementById('male').checked){
          gender = document.getElementById('male').value;
        }
        if(document.getElementById('female').checked){
           gender = document.getElementById('female').value;
        }
       const address = document.getElementById("address").value; 
       const country = document.getElementById("country").value;  
       const state = document.getElementById("state").value; 
       const city = document.getElementById("city").value; 
        const pincode = document.getElementById("pincode").value; 
        const photos = document.getElementById("imgInp").files[0];
            console.log(photos)
      
        const photo = { name: photos.name, size: photos.size, type: photos.type }
     
       const form={id, fname, lname, number, gender,address, country, state, city, pincode,photo } 
       list.push(form)

       console.log(form)
       console.log(list)
       setTimeout(fade_out, 2000);
          function fade_out() {
              $("#submit").fadeOut().empty();
          }
      
            localStorage.setItem('list', JSON.stringify(list));
         
     
            duplicateList = list
            document.getElementById('fn').value = "";
            document.getElementById('lname').value = "";
            document.getElementById('number').value = "";
            document.getElementById('address').value = "";
            document.getElementById('male').checked = false;
            document.getElementById('female').checked = false;
            var dropDown1 = document.getElementById("country");  
              dropDown1.selectedIndex = 0;  
            var dropDown2 = document.getElementById("state");  
              dropDown2.selectedIndex = 0;  
            var dropDown3 = document.getElementById("city");  
              dropDown3.selectedIndex = 0;  
            document.getElementById('pincode').value = "";
              // document.getElementById("imgInp").value = "";
                    renderHtml()
            }
 }  

function renderHtml(){ 
  $("#tbody").empty()
  list.forEach((form,index) => {
     let row = "<tr>"

        row+="<td>" + "<img   src='"+form.photo.name+"' alt='pic' height='50' width='50'>"+  "</td>"
        row += "<td>"+form.fname+"</td>"
        row += "<td>"+form.lname+"</td>"
         row += "<td>"+form.number+"</td>"
          row += "<td>"+form.address+"</td>"
           row += "<td>"+form.gender+"</td>"
           row += "<td>"+form.country+"</td>"
            row += "<td>"+form.state+"</td>"
             row += "<td>"+form.city+"</td>"
              row += "<td>"+form.pincode+"</td>"
        row += "<td>"
          row += "<input type=\"button\" value=\"delete\" onclick='deleteRecord("+form.id+")'></input>"
          row += "<input type='button' value='edit' onclick='edit("+index+")'></input>"

        row += "</td>"
    row += "</tr>"
    $("#tbody").append(row)    

  })
}




function sortTable(f,n){
    var rows = $('#list tbody  tr').get();

    rows.sort(function(a,b) {

        var A = getVal(a);
        var B = getVal(b);

        if(A < B) {
            return -1*f;
        }
        // if(A > B) {
        //     return 1*f;
        // }
        return 0;
    });

function getVal(elm){
        var v = $(elm).children('td').eq(n).text().toUpperCase();
        if($.isNumeric(v)){
            v = parseInt(v,10);
        }
        return v;
}

    $.each(rows, function(index, row) {
        $('#list').children('tbody').append(row);
    });
}
var f_sl = 1; // flag to toggle the sorting order
var f_nm = 1; // flag to toggle the sorting order
$("#f").click(function(){
    f_sl *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_sl,n);
});
$("#l").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#pn").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#ad").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#g").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#co").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#s").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#c").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 
$("#p").click(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    sortTable(f_nm,n);
}); 

function unsortTable(f,n){
    var rows = $('#list tbody  tr').get();

    rows.sort(function(a,b) {

        var A = getVal(a);
        var B = getVal(b);

        // if(A < B) {
        //     return -1*f;
        // }
        if(A > B) {
            return 1*f;
        }
        return 0;
});

function getVal(elm){
        var v = $(elm).children('td').eq(n).text().toUpperCase();
        if($.isNumeric(v)){
            v = parseInt(v,10);
        }
        return v;
}

    $.each(rows, function(index, row) {
        $('#list').children('tbody').append(row);
    });
}
var f_sl = 1; // flag to toggle the sorting order
var f_nm = 1; // flag to toggle the sorting order
$("#f").dblclick(function(){
    f_sl *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_sl,n);
});
$("#l").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
});
$("#pn").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#ad").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#g").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#co").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#s").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#c").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 
$("#p").dblclick(function(){
    f_nm *= -1; // toggle the sorting order
    var n = $(this).prevAll().length;
    unsortTable(f_nm,n);
}); 

console.log("Page refresh")
 const txt = localStorage.getItem("list")
 const c = JSON.parse(txt);
 console.log(txt)
 console.log(c)
  if(c.length !== 0){
   list = c;
  }
  renderHtml()

