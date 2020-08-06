import { Button } from 'element-ui'

const components = [Button]

const install = (Vue) => {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default { install }
