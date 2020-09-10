$(function () {
    $('#link-reg').on('click', function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
    $('#link-login').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()

    })

    // 自定义规则
    // login的form的rule
    // window.$
    // var form=window.Layui.form
    layui.form.verify({
        //layui的验证写法有二：
        // 1.既支持上述函数式的方式
        // 2.也支持下述数组的形式
        // 数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
        password: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repassword: function (value, item) {
            //value：表单的值、item：表单的DOM对象
            var val2 = $('#reg-pwd').val()
            if (val2 !== value) {
                return '密码不一致'
            }
        },
    });


    // function==>
    // 1.形参->默认形参
    // 2.返回值->return->var 变量=fn()


    // 点击注册按钮，按照接口规则，发送注册的请求
    // 步骤
    // 找到代码位置->绑定submit事件
    // 看接口文档
    // 获取表单数据
    // 发送表单请求

    // 发送注册请求reg-btn
    // 1.绑定submit事件

    $('.layui-form').submit(function (e) {
        // 2.阻止默认行为
        e.preventDefault()
        // 3.获取表单数据
        // var username=$('.reg-box input [name=username]).val()
        var username = $('#reg-username').val()
        var password = $('#reg-pwd').val()
        console.log(username, password)
        // 4.看接口文档 发送ajax
        // 项目的请求根路径为http://ajax.frontend.itheima.net
        var formdata = {
            username: username,
            password: password,
        }
        $.post('http://ajax.frontend.itheima.net/api/reguser', formdata, function (res) {
            // 5.处理res响应
            // 请求是否成功 0:成功   1:失败
            if (res.status === 0) {
                console.log(res.message)
            } else {
                console.log(res.message)
            }
            // 进入登录页面index.html
            alert(1)

            // 跳转
            window.location.href = 'index.html'
        })
    })

})


