<style lang="less">
  @import "./login.less";
</style>
<template>
  <div class="login">
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          系统登陆
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
              <span slot="prepend">
                <Icon :size="16" type="person"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input :type="pwdType" v-model="form.password" placeholder="请输入密码">
              <span slot="prepend">
                <Icon :size="14" type="locked"></Icon>
              </span>
              <span slot="prepend" class="show-pwd" @click="showPwd">
                <Icon :size="14" type="eye"></Icon>
              </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" type="primary" long>登录</Button>
            </FormItem>
          </Form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      form: {
        userName: 'admin',
        password: '111111'
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      },
      pwdType: 'password'
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          Cookies.set('user', this.form.userName)
          Cookies.set('password', this.form.password)
          //  this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg')
          if (this.form.userName === 'iview_admin') {
            Cookies.set('access', 0)
          } else {
            Cookies.set('access', 1)
          }
          this.$router.push({
            name: 'home_index'
          })
        }
      })
    },
    showPwd () {
      this.pwdType = this.pwdType === 'password' ? 'text' : 'password'
    }
  }
}
</script>
