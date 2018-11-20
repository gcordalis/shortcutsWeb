export const actions = [{
  icon: 'notes',
  name: 'Comment',
  actionName: 'comment',
  titleColor: 'background-color: rgb(246, 231, 198)',
  iconColor: 'background-color: rgb(251, 195, 6); color: #FFF',
  bodyColor: 'background-color: rgb(248, 242, 226)',
  text: ''
},
{
  icon: 'dialpad',
  name: 'Number',
  actionName: 'number',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)',
  bodyColor: 'background-color: #FFF',
  number: 0
},
{
  icon: 'dialpad',
  name: 'Calculate',
  actionName: 'calculate',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)',
  bodyColor: 'background-color: #FFF',
  operand: 0,
  operation: ''
},
{
  icon: 'settings',
  name: 'Show Result',
  actionName: 'showResult',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(118, 118, 123); color: #FFF',
  bodyColor: 'background-color: #FFF',
  text: ''
},
{
  icon: 'link',
  name: 'URL',
  actionName: 'url',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(25, 109, 242); color: #FFF',
  bodyColor: 'background-color: #FFF',
  url: ''
},
{
  icon: 'link',
  name: 'Get Contents of URL',
  actionName: 'getContentsOfUrl',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(32, 178, 6); color: #FFF',
  bodyColor: 'background-color: #FFF',
  headers: [],
  headersVisible: false,
  method: '',
  methodOptions: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  requestBodyType: '',
  requestBody: {},
  requestOptions: ['JSON', 'Form', 'File']
}
]

export default {
  actions
}
