//ข้อที่ 1

const showName = (firstname, lastname) => {
  if (firstname === "shippop") {
    console.log("Best Online Shipping Platform");
  } else {
    console.log("Hello Shippop, My name is " + firstname + " " + lastname);
  }
};
showName("shippop", "heavyday");
showName("pongpipat", "tawatchaidumrong");

//ข้อที่ 2

var object = {
  val1: 1,
  val2: 2,
  val3: 3,
};
var newobj = JSON.parse(JSON.stringify(object));
newobj.val2 = "test";
console.log(object.val2);
console.log(newobj.val2);

// ข้อที่ 3