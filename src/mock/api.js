import mock from 'mockjs'
let api = () => {
  let constellations = [
    '白羊座',
    '金牛座',
    '双子座',
    '巨蟹座',
    '狮子座',
    '处女座',
    '天秤座',
    '天蝎座',
    '射手座',
    '摩羯座',
    '水瓶座',
    '双鱼座'
  ]
  // 使用正则表达式匹配url ！！！！
  mock.mock(/http\:\/\/localhost\:36742\/api\/getUser/, function (opt) {
    // 获取传递过来的参数，传统方法
    // const querystring = require('querystring')
    // const originUrl = opt.url
    // let newUrl = originUrl.split('?')
    // const url = querystring.parse(newUrl[1], '&')
    // let num = url.num
    const myURL = new URL(opt.url)
    let num = myURL.searchParams.get('num')
    return mock.mock({
      // es6中的属性名表达式
      ['list|' + num]: [
        {
          name: '@cname',
          created: mock.Random.date(),
          age: mock.Random.integer(18, 26),
          city: '@city',
          constellations: mock.Random.pick(constellations),
          'constellations|1': constellations,
          email: mock.Random.email(),
          user: {
            "avatar": mock.Random.image('200x100'),
            "name": mock.Random.cword(0,4) + mock.Random.word(0,4),
            "isVip": mock.Random.boolean(),
            "level": mock.Random.natural( 1, 12 )
          }
        }
      ]
    })
  })
}
export default api
