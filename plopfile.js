module.exports = function (plop) {
  // controller generator
  plop.setGenerator('create', {
    description: '创建一个组件页面',
    prompts: [
      {
        type: 'input',
        name: 'eName',
        message: '请输入页面英文名字（key):'
      },
      {
        type: 'input',
        name: 'cName',
        message: '请输入页面中文名字:'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/views/components/{{eName}}Page/{{eName}}Page.vue',
        templateFile: 'plop-templates/compTemplate.hbs'
      },
      {
        type: 'add',
        path: 'src/views/components/{{eName}}Page/{{eName}}Page.md',
        templateFile: 'plop-templates/compMarkdown.md'
      },
      {
        type: 'modify',
        path: 'src/router/componentsList.js',
        pattern: /\/\/ ---ROUTER_IMPORT---/g, // ---ROUTER_IMPORT--- // 这个是查找文件插入位置的标识
        templateFile: 'plop-templates/componentsListTemplate.hbs'
      }
    ]
  })
}
