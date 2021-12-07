const path = require('path');
const glob = require('glob');

const getPath = (path) => path.replace(/.*components\//, '')

const getDocs = (dir = 'basic') => {
  const docs = glob
    .sync(path.resolve(__dirname, `../components/${dir}/*.md`))
    .map(p => getPath(p))
  console.log('docs', docs)
  return docs
}

module.exports = {
  title: 'vox-ui',
  base: `/vox-ui/`,
  dest: 'dist',
  description: '个人，中台研发,组件库',
  port: 8080,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/components/guide/introduction' },
      { text: 'GitHub', link: 'https://github.com/yanjiFan1/vox-design.git' },
    ],
    sidebar: {
      '/components/': [
        {
          title: '开发指南',
          collapsable: false,
          children: getDocs('guide')
        },
        {
          title: '基础组件',
          collapsable: false,
          children: getDocs('basic')
        },
        {
          title: '表单',
          collapsable: false,
          children: getDocs('form')
        },
        {
          title: '数据',
          collapsable: false,
          children: getDocs('data')
        },
      ]
    }
  },
};
