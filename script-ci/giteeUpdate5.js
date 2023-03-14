// require('child_process').exec('start https://gitee.com/pengchenggang/fastwork/pages')
let exec = require('child_process').exec
// import { exec } from 'child_process'
// import async from 'async'
let async = require('async')
// const { readFileSync, writeFileSync } = require('fs')
const fs = require('fs-extra')

// 获取当前日期函数
// function getNowFormatDate () {
//   let date = new Date(),
//     s = '-', // 格式分隔符
//     year = date.getFullYear(), // 获取完整的年份(4位)
//     month = date.getMonth() + 1, // 获取当前月份(0-11,0代表1月)
//     strDate = date.getDate(), // 获取当前日(1-31)
//     hour = date.getHours(), // 获取当前小时(0 ~ 23)
//     minute = date.getMinutes(), // 获取当前分钟(0 ~ 59)
//     second = date.getSeconds() // 获取当前秒数(0 ~ 59)
//   if (month >= 1 && month <= 9) month = '0' + month // 如果月份是个位数，在前面补0
//   if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0

//   let currentdate = year
//     + s + month
//     + s + strDate
//     + s + hour
//     + s + minute
//     + s + second
//   return currentdate
// }

async.series([
  // next => {
  //   fs.copyFileSync('public/data/naviData.js', 'build/data/naviData.js')
  //   // const appDirectory = fs.realpathSync(process.cwd())
  //   // const path = resolve(appDirectory, "build/index.html")
  //   const path = 'build/index.html'
  //   const data = readFileSync(path, { encoding: 'utf-8' })
  //   const data2 = data.replace(/\d\d\d\d-\d\d-\d\d-\d\d-\d\d-\d\d/g, getNowFormatDate())

  //   writeFileSync(path, data2)

  //   next()
  // },
  next => {
    fs.copyFileSync('dist/index.html', 'dist/404.html')
    next()
  },
  next => { exec('git add .', () => next()) },
  next => { exec('git push', () => next()) },
  next => { exec('git commit -m buildFastByGiteeUpdate', () => next()) },
  next => { exec('git push -u origin master', () => next()) },
  next => {
    console.info('git is over')
    next()
  },
  next => { exec('start https://gitee.com/pengchenggang/fastwork/pages', () => next()) },
])
