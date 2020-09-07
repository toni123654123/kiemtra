let arr =[9,8,7,6,4,3];

function Number(arr){

    let size = arr.length;
    let num = +document.getElementById("num").value;

    for (i=0;i<size;i++){

        if (arr[i] === num){

            document.getElementById("reslut").innerText = "Giá trị vừa nhập có nằm trong mảng";

            break;

        }else if (i === size-1) {

            document.getElementById("reslut").innerText = "Giá tri vừa nhập không nằm trong mảng";

        }

    }
}