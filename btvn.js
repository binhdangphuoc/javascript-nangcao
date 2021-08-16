//Cau 1
function reset1(){
    document.getElementsByClassName("result1")[0].innerHTML = "Result: "
}
function cau1(){
    let s=document.getElementById("para1").value
    document.getElementsByClassName("result1")[0].innerHTML += isPalindrome(s)

}
function isPalindrome(s){
    s = s.toLowerCase()
    console.log(s)
    s = s.replace(/[\.,\?/:;{}[\]()!\s]/g,'')
    console.log(s)
    let s2=""
    for(let i= s.length-1;i>=0;i--) s2 += s[i]
    console.log(s2)
    if(s==s2) return true
    else return false
}

//Cau 2
function cau2(){
    let p1 = document.getElementById("para2-1").value.split(" ")
    let p2 = document.getElementById("para2-2").value.split(" ")
    let p3 = document.getElementById("para2-3").value.split(" ")
    let p4 = document.getElementById("para2-4").value.split(" ")
    let p5 = document.getElementById("para2-5").value.split(" ")
    uniqueUnion(p1,p2,p3)
}
function uniqueUnion(...args){
    let ans = new Set()
    for(let i in args){
        for(let j in args[i]){
            ans.add(args[i][j])
        }
    }
    console.log(ans)
}

//Cau 3
function cau3(){
    arr = [1,1,2,3,4,2]
    ans = seekAndDestroy(arr, 2,3)
    console.log(ans)
}
function seekAndDestroy(arr, ...args){
    for(i in args){
        while((index = arr.indexOf(args[i]))!=-1){
            arr.splice(index,1)
        }
    }
    return arr
    
}

//Cau 5
function cau5(){
    spinal("aaa00DDang4543PhuocBinh")
}
function spinal(s){

    var reg1 = /[^a-zA-Z]/g
    s = s.replace(reg1,"-")

    var reg3 = /[A-Z]/
    while((x = reg3.exec(s))!=null){
        console.log(x.index)
        s = s.substring(0,x.index)+"-"+s[x.index].toLowerCase()+s.substring(x.index+1,s.length)
        console.log(s)
    }

    var reg2 = /--/g
    s = s.replace(reg2,"")
    
    
    console.log(s)
  
}

//Cau 6
function cau6(){
    arr=[2,3,1,0,1,0]
    arr = drop(arr)
    console.log(arr)
}
function drop(arr){
    // console.log(arr)
    while(!check(arr[0])){
        arr.splice(0,1)
    }
    return arr
}
function check(n) {
    if(n==1) return true
    return false
}