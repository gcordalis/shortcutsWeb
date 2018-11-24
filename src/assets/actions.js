export const actions = [{
  icon: 'extension',
  name: 'Add to Variable',
  actionName: 'addToVariable',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 116, 15); color: #FFF',
  bodyColor: 'background-color: #FFF'
},
{
  icon: 'settings',
  name: 'Ask for Input',
  actionName: 'ask',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(118, 118, 123); color: #FFF',
  bodyColor: 'background-color: #FFF'
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
  icon: 'notes',
  name: 'Comment',
  actionName: 'comment',
  titleColor: 'background-color: rgb(246, 231, 198)',
  iconColor: 'background-color: rgb(251, 195, 6); color: #FFF',
  bodyColor: 'background-color: rgb(248, 242, 226)',
  text: ''
},
{
  icon: 'input',
  name: 'Continue Shortcut in App',
  actionName: 'continueShortcutInApp',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 116, 15); color: #FFF',
  bodyColor: 'background-color: #FFF'
},
{
  icon: 'dialpad',
  name: 'Count',
  actionName: 'count',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(201, 201, 200); color: rgb(21, 21, 21)',
  bodyColor: 'background-color: #FFF',
  countOptions: ['Items', 'Characters', 'Words', 'Sentences', 'Lines']
},
{
  icon: 'extension',
  name: 'Get Variable',
  actionName: 'getVariable',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 116, 15); color: #FFF',
  bodyColor: 'background-color: #FFF'
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
  icon: 'battery_full',
  name: 'Set Low Power Mode',
  actionName: 'setLowPowerMode',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(63, 215, 82); color: #FFF',
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
  icon: 'flash_on',
  name: 'Set Torch',
  actionName: 'setTorch',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(4, 95, 254); color: #FFF',
  bodyColor: 'background-color: #FFF'
},
{
  icon: 'extension',
  name: 'Set Variable',
  actionName: 'setVariable',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 116, 15); color: #FFF',
  bodyColor: 'background-color: #FFF'
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
  icon: 'notes',
  name: 'Text',
  actionName: 'text',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(251, 195, 6); color: #FFF',
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
  icon: 'lens',
  name: 'Vibrate Device',
  actionName: 'vibrateDevice',
  titleColor: 'background-color: #F2F3F5',
  iconColor: 'background-color: rgb(248, 37, 37); color: #FFF',
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
