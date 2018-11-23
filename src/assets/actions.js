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
  icon: 'notes',
  name: 'Text',
  actionName: 'text',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(251, 195, 6); color: #FFF',
  bodyColor: 'background-color: #FFF',
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
  icon: 'settings',
  name: 'Wait',
  actionName: 'wait',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(118, 118, 123); color: #FFF',
  bodyColor: 'background-color: #FFF',
  text: ''
},
{
  icon: 'settings',
  name: 'Wait to Return',
  actionName: 'waitToReturn',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(118, 118, 123); color: #FFF',
  bodyColor: 'background-color: #FFF',
  text: ''
},
{
  icon: 'category',
  name: 'View Content Graph',
  actionName: 'viewContentGraph',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(41, 88, 212); color: #FFF',
  bodyColor: 'background-color: #FFF',
  text: ''
},
{
  icon: 'lens',
  name: 'Vibrate Device',
  actionName: 'vibrateDevice',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 37, 37); color: #FFF',
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
  icon: 'flash_on',
  name: 'Set Torch',
  actionName: 'setTorch',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(4, 95, 254); color: #FFF',
  bodyColor: 'background-color: #FFF'
},
{
  icon: 'settings',
  name: 'Set Name',
  actionName: 'setName',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(118, 118, 123); color: #FFF',
  bodyColor: 'background-color: #FFF'
},
{
  icon: 'battery_full',
  name: 'Set Low Power Mode',
  actionName: 'setLowPowerMode',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(63, 215, 82); color: #FFF',
  bodyColor: 'background-color: #FFF'
}
]

export default {
  actions
}

// Actions to be added later

// {
//   icon: 'link',
//   name: 'Get Contents of URL',
//   actionName: 'getContentsOfUrl',
//   titleColor: 'background-color: #F2F3F5',
//   iconColor: 'background-color: rgb(32, 178, 6); color: #FFF',
//   bodyColor: 'background-color: #FFF',
//   headers: [],
//   headersVisible: false,
//   method: '',
//   methodOptions: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   requestBodyType: '',
//   requestBody: {},
//   requestOptions: ['JSON', 'Form', 'File']
// }
