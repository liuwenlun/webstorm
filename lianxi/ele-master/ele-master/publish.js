var ghpages = require('gh-pages');
var path = require('path');
// 将build文件推送到github仓库的gh-pages分支
ghpages.publish('dist', function(err) {
  if(err) {
    console.log('发布失败')
  } else {
    console.log('发布成功')
  }
})