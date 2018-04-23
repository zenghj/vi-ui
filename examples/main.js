// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VVUI from '../src/index'
import demoBlock from './components/demo-block.vue'
// import '../lib/index.css'
import '../packages/theme-default/index.less'
import iconsInfo from '../packages/theme-default/fonts/selection.json'
import router from './router/index'

Vue.use(VueRouter)
Vue.use(VVUI)
Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

// for test convinience
window.iconsInfo = iconsInfo

let demoMethods = {
  submitForm (formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  },
  resetForm (formName) {
    this.$refs[formName].resetFields()
  },
  validatePass (rule, value, callback) {
    if (value === '') {
      callback(new Error('不能为空'))
    } else {
      callback()
    }
  },
  addDomain () {
    this.formPage.form6.domains.push({
      value: '',
      key: Date.now()
    })
  },
  removeDomain (item) {
    var domains = this.formPage.form6.domains
    var index = domains.indexOf(item)
    if (index !== -1) {
      domains.splice(index, 1)
    }
  },
  tabsHandleClick1 (e) {
    console.log('tabsHandleClick1')
  }
}

let demoData = {
  radio1: '男',
  radio2: '',
  radio3: '',
  checkbox: {
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    checkList: ['选中且禁用', '复选框 A']

  },
  formPage: {
    form1: {
      name: '',
      gender: '',
      interests: []
    },
    form2: {
      name: '',
      education: ''
    },
    labelPosition: 'right',
    form3: {
      name: '',
      education: '',
      interest: ''
    },
    form4: {
      name: '',
      gender: '',
      interests: [],
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        interests: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ]
      }
    },
    form5: {
      name: '',
      rules: {
        name: [
          { validator: demoMethods.validatePass, trigger: 'blur' }
        ]
      }
    },
    form6: {
      name: '',
      domains: [{
        value: ''
      }]
    },
    form7: {
      age: ''
    },
    form8: {
      name: '',
      resource: ''
    }
  },
  tabsPage: {
    activeName: 'second',
    activeName2: 'first',
    tabPosition: 'top'
  }
}

Vue.mixin({
  data () {
    return Object.assign({}, demoData)
  },
  methods: demoMethods
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



