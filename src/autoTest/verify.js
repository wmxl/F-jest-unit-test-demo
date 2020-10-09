function verifyPassword(password) {
  const regexExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
  return regexExp.test(password);
}

function testVerifyPassword() {
  //准备特定的输入
  const password = "12345";

  //执行方法，获取结果
  const result = verifyPassword(password);

  //验证结果是否和你的期望想符合
  if (result === true) {
    console.log(`the result is: true and the password is valid`);
  } else {
    console.log("the result is: false and the password is invalid");
  }
}

export { verifyPassword };
