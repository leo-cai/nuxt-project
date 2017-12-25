/**
 * 公共方法js
 */
// 错误处理
export function errorHandle (error) {
  if (error.response) {
    // 捕获非2xx异常
    alert('Error:获取请求失败！')
  } else {
    // 网络错误触发
    alert('Error:' + error.message)
  }
}

// 防止页面刷新或关闭导致验证码倒计时失效
// 设置localDelay
export function setLocalDelay (delay) {
  localStorage.setItem('delay_' + location.href, delay)
  localStorage.setItem('time_' + location.href, new Date().getTime())
}

// 获取localDelay
export function getLocalDelay () {
  let localDelay = {}
  localDelay.delay = localStorage.getItem('delay_' + location.href)
  localDelay.time = localStorage.getItem('time_' + location.href)
  return localDelay
}

// 清除localDelay
export function clearLocalDelay () {
  localStorage.clear()
}

// 随机获取四位验证码
export function createImgCode () {
  let code = ''
  // 随机码数组 去除1，0，l，o，O
  let selectChar = [
    2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  let codeLength = 4
  // 随机遍历数组,拼接验证码
  for (let i = 0; i < codeLength; i++) {
    let charIndex = Math.floor(Math.random() * selectChar.length)
    code += selectChar[charIndex]
  }
  return code
}
