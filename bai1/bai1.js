function Equation(){
    let a = 5;
    let b = 8;
    let equation = (-b)/a;
    if(a!=0){
        document.write("kết quả: "+ equation);
    }else if (a==0 && b!=0){
        document.write('Phương trình vô nghiệm');
    }if (a==0 && b==0) {
        document.write('Phương trình vô số nghiệm')
    }
}