define({ "api": [
  {
    "type": "put",
    "url": "/v1/user/password",
    "title": "更新用户登录密码",
    "description": "<p>更新用户登录密码</p>",
    "version": "1.0.0",
    "name": "changePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentPassword",
            "description": "<p>原密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>SUCCESS:请求成功,FAIL:请求失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP应答状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "f:/stash/ms-calculate/src/main/java/com/project/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/v1/user:id",
    "title": "使用手机号查询用户信息",
    "description": "<p>使用手机号查询用户信息</p>",
    "version": "1.0.0",
    "name": "findUserByPhone",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>SUCCESS:请求成功,FAIL:请求失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP应答状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>系统自增ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.userCode",
            "description": "<p>业务主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idCardNo",
            "description": "<p>身份证号（经模糊处理）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>注册日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>手机号（经模糊处理）</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.status",
            "description": "<p>用户状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.source",
            "description": "<p>用户来源</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n\"status\":\"SUCCESS\",\n\"responseCode\":200,\n\"message\":\"查询成功!\",\n\"data\": {\n\"id\": \"L_11\",\n\"userCode\": \"TODO TBD\",\n\"name\": \"张三\",\n\"idCardNo\": \"310***********099\",\n\"sex\": \"男\",\n\"birthday\": \"1980-2-22\",\n\"registerDate\": \"2015-2-34\",\n\"phone\": \"139*****888\",\n\"status\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "f:/stash/ms-calculate/src/main/java/com/project/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/v1/user/login",
    "title": "使用手机号、短信验证码或密码登录系统",
    "description": "<p>使用手机号、短信验证码或密码登录系统</p>",
    "version": "1.0.0",
    "name": "loginByPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "smsCode",
            "description": "<p>短信验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>SUCCESS:请求成功,FAIL:请求失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP应答状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "f:/stash/ms-calculate/src/main/java/com/project/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/v1/user",
    "title": "更新用户资料",
    "description": "<p>更新用户资料</p>",
    "version": "1.0.0",
    "name": "updateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用户手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>SUCCESS:请求成功,FAIL:请求失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "responseCode",
            "description": "<p>HTTP应答状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>系统自增ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.userCode",
            "description": "<p>业务主键</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idCardNo",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.registerDate",
            "description": "<p>注册日期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.status",
            "description": "<p>用户状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.source",
            "description": "<p>用户来源</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: HTTP/1.1 200 OK",
          "content": "{\n\"status\":\"SUCCESS\",\n\"responseCode\":200,\n\"message\":\"查询成功!\",\n\"data\": {\n\"id\": \"L_11\",\n\"userCode\": \"TODO TBD\",\n\"name\": \"张三\",\n\"idCardNo\": \"350000199412049099\",\n\"sex\": \"男\",\n\"birthday\": \"1980-2-22\",\n\"registerDate\": \"2015-2-34\",\n\"phone\": \"13908888888\",\n\"status\":1\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "f:/stash/ms-calculate/src/main/java/com/project/controller/UserController.java",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "f:/stash/ms-calculate/api-doc-template/main.js",
    "group": "f__stash_ms_calculate_api_doc_template_main_js",
    "groupTitle": "f__stash_ms_calculate_api_doc_template_main_js",
    "name": ""
  }
] });
