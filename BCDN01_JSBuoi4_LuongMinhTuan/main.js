//Bài 1
function rankNumb(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var result ="";
    if(n1>n2){
        if(n2>n3){
            result = n3+"<"+n2+"<"+n1;
        }else if(n1>n3){
            result = n2+"<"+n3+"<"+n1;
        }else{
            result = n2+"<"+n1+"<"+n3;
        };
    }else if(n2>n3){
        if(n1>n3){
            result = n3+"<"+n1+"<"+n2;
        }else{
            result = n1+"<"+n3+"<"+n2;
        };
    }else{
        result = n1+"<"+n2+"<"+n3;
    };
    document.getElementById("txtRank").innerHTML=result;
};
document.getElementById("btnRank").onclick = rankNumb;
//Bài 2
function sayHello(){
    var B = document.getElementById("B");
    var M = document.getElementById("M");
    var A = document.getElementById("A");
    var E = document.getElementById("E");
    var chao = ""
    if(B.checked){
        console.log("B");
        chao = "Chào bố";
    }else if(M.checked){
        chao = "Chào mẹ";
    }else if(A.checked){
        chao = "Chào anh trai";
    }else if(E.checked){
        chao = "Chào em gái";
    }else{
        chao = "chưa chọn thành viên"
    }
    document.getElementById("loiChao").innerHTML = chao;
}
document.getElementById("btnHello").onclick = sayHello;

//Bài 3
function countNumb(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var even = 0;
    var odd = 0;
    if(num1 % 2 == 0){
        even++;
        if(num2%2 == 0){
            even++;
            if(num3%2 == 0){
                even++;
            }
        }
    };
    odd = 3 - even;
    console.log(even);
    console.log(odd);
    document.getElementById("txtCount").innerHTML="Có "+odd+" số lẻ và "+even+" số chẵn." 
};
document.getElementById("btnCount").onclick = countNumb;

//Bài 4
function typeTriangle(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = document.getElementById("c3").value;
    var type = "";
    if(a==b && b==c){
        type = "Tam giác đều";
    }else if(a==b || b==c || a==c){
        type = "Tam giác cân";
    }else if(a*a==b*b+c*c || b*b==a*a+c*c || c*c==a*a+b*b){
        type = "Tam giác vuông";
    }else{
        type = "Tam giác thường";
    }
    document.getElementById("txtTriangle").innerHTML=type
};
document.getElementById("btnTriangle").onclick = typeTriangle;
