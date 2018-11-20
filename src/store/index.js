import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from '@/assets/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    actions,
    actionsUsed: [
    ],
    shortcutColors: [
      {
        'rgb': 'rgb(252, 17, 57)',
        'workflowColor': '4282601983'
      },
      {
        'rgb': 'rgb(239, 95, 62)',
        'workflowColor': '4251333119'
      },
      {
        'rgb': 'rgb(255, 127, 35)',
        'workflowColor': '4271458815'
      },
      {
        'rgb': 'rgb(236, 181, 0)',
        'workflowColor': '4274264319'
      },
      {
        'rgb': 'rgb(90, 206, 58)',
        'workflowColor': '4292093695'
      },
      {
        'rgb': 'rgb(75, 209, 169)',
        'workflowColor': '431817727'
      },
      {
        'rgb': 'rgb(69, 209, 206)',
        'workflowColor': '1440408063'
      },
      {
        'rgb': 'rgb(79, 162, 240)',
        'workflowColor': '463140863'
      },
      {
        'rgb': 'rgb(46, 101, 220)',
        'workflowColor': '946986751'
      },
      {
        'rgb': 'rgb(108, 62, 231)',
        'workflowColor': '2071128575'
      },
      {
        'rgb': 'rgb(174, 56, 219)',
        'workflowColor': '3679049983'
      },
      {
        'rgb': 'rgb(243, 89, 165)',
        'workflowColor': '3980825855'
      },
      {
        'rgb': 'rgb(109, 110, 115)',
        'workflowColor': '255'
      },
      {
        'rgb': 'rgb(146, 145, 136)',
        'workflowColor': '3031607807'
      },
      {
        'rgb': 'rgb(134, 143, 169)',
        'workflowColor': '2846468607'
      }
    ]
  },
  mutations: {
    addAction (state, { name, icon, actionName, titleColor, bodyColor, iconColor, iconBgColor, methodOptions, requestOptions }) {
      console.log('Added ', name)
      // console.log('Action Name: ', name, '\nAction Icon: ', icon, '\nTitle Color: ', titleColor, '\nBody Color: ', bodyColor)
      state.actionsUsed.push({
        name,
        actionName,
        iconColor,
        iconBgColor,
        icon,
        titleColor,
        bodyColor,
        text: '',
        number: null,
        operand: null,
        operation: '',
        id: (new Date()).getTime() + name,
        isVisible: true,
        url: '',
        headers: [{key: '', value: ''}],
        headersVisible: false,
        method: 'GET',
        methodOptions,
        requestBodyType: '',
        requestBody: {},
        requestOptions
      })
    },
    removeAction (state, id) {
      Vue.set(state, 'actionsUsed', state.actionsUsed.filter((action) => action.id !== id))
    }
  }
})

export default store
