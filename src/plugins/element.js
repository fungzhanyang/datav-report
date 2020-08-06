import { Button, Card, Row, Col } from 'element-ui'

const components = [Button, Card, Row, Col]

const install = Vue => {
  components.forEach(component => {
    Vue.use(component)
  })
}

export default { install }
