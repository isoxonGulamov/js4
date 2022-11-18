let son1 = prompt("Birinchi sonni kritimg")*1
let amal = prompt("amalni kriting")
let son2 = prompt("Ikkinchi sonni kiriting")*1
function x(a,b,c) {
  if (b == "+") {
    return a + c
  }else if(b == "-"){
    return a - c
  }else if(b == "*"){
    return a * c
  }else if(b == "/"){
    return a / c
  }else(
    document.write("Kechirasan brat ozroq kallangni ishlat")
  )
}
x(son1,amal,son2)
document.write(x(son1,amal,son2))

// switch calculator 

// let son1 = prompt("Birinchi sonni kritimg")*1
// let amal = prompt("amalni kriting")
// let son2 = prompt("Ikkinchi sonni kiriting")*1
// switch (amal) {
//   case "+":
//      document.write(son1 + son2)
//     break;

//     case "-":
//       document.write(son1 - son2)
//      break;
    
//      case "*":
//       document.write(son1 * son2)
//      break;
//      case "/":
//       document.write(son1 / son2)
//      break;
//   default:
//     document.write("Ey ahmoq o'zing ishmasang ham kallangni ozroq ishlat" )
// }
