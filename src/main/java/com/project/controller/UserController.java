/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */
package com.project.controller;

import com.project.model.User;
import com.project.model.common.Response;
import com.project.model.common.ResponseStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SuppressWarnings("unused")
public class UserController {


    /**
     * @api {get} /v1/user:id  使用手机号查询用户信息
     * @apiDescription 使用手机号查询用户信息
     * @apiVersion 1.0.0
     * @apiName findUserByPhone
     * @apiGroup User
     * @apiParam {String} phone 用户手机号
     * @apiSuccess {String} status SUCCESS:请求成功,FAIL:请求失败
     * @apiSuccess {Integer} responseCode HTTP应答状态码
     * @apiSuccess {String} message 提示信息
     * @apiSuccess {Object} data 用户信息对象
     * @apiSuccess {String} data.id 系统自增ID
     * @apiSuccess {String} data.userCode 业务主键
     * @apiSuccess {String} data.name 姓名
     * @apiSuccess {String} data.idCardNo 身份证号（经模糊处理）
     * @apiSuccess {String} data.sex 性别
     * @apiSuccess {String} data.birthday 生日
     * @apiSuccess {String} data.registerDate 注册日期
     * @apiSuccess {String} data.phone 手机号（经模糊处理）
     * @apiSuccess {Integer} data.status 用户状态
     * @apiSuccess {String} data.source 用户来源
     * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
     * {
     * "status":"SUCCESS",
     * "responseCode":200,
     * "message":"查询成功!",
     * "data": {
     * "id": "L_11",
     * "userCode": "TODO TBD",
     * "name": "张三",
     * "idCardNo": "310***********099",
     * "sex": "男",
     * "birthday": "1980-2-22",
     * "registerDate": "2015-2-34",
     * "phone": "139*****888",
     * "status":1
     * }
     * }
     */
    @RequestMapping(value = "/v1/user", method = RequestMethod.GET)
    public Response<User> findUserByPhone(@RequestParam("phone") String phone) {
//        User User = userService.findUserByPhone(phone);
        User User = new User();
        if (null == User) {
            return new Response<>(ResponseStatus.FAIL,"结果为空或超时" , null);
        }
        return new Response<>(ResponseStatus.SUCCESS, "查询成功", User);
    }

    /**
     * @api {put} /v1/user  更新用户资料
     * @apiDescription 更新用户资料
     * @apiVersion 1.0.0
     * @apiName updateUser
     * @apiGroup User
     * @apiParam {String} phone 用户手机号
     * @apiSuccess {String} status SUCCESS:请求成功,FAIL:请求失败
     * @apiSuccess {Integer} responseCode HTTP应答状态码
     * @apiSuccess {String} message 提示信息
     * @apiSuccess {Object} data 用户信息对象
     * @apiSuccess {String} data.id 系统自增ID
     * @apiSuccess {String} data.userCode 业务主键
     * @apiSuccess {String} data.name 姓名
     * @apiSuccess {String} data.idCardNo 身份证号
     * @apiSuccess {String} data.sex 性别
     * @apiSuccess {String} data.birthday 生日
     * @apiSuccess {String} data.registerDate 注册日期
     * @apiSuccess {String} data.phone 手机号
     * @apiSuccess {Integer} data.status 用户状态
     * @apiSuccess {String} data.source 用户来源
     * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
     * {
     * "status":"SUCCESS",
     * "responseCode":200,
     * "message":"查询成功!",
     * "data": {
     * "id": "L_11",
     * "userCode": "TODO TBD",
     * "name": "张三",
     * "idCardNo": "350000199412049099",
     * "sex": "男",
     * "birthday": "1980-2-22",
     * "registerDate": "2015-2-34",
     * "phone": "13908888888",
     * "status":1
     * }
     * }
     */
    @RequestMapping(value = "/v1/user", method = RequestMethod.PUT)
    public Response updateUser(@RequestParam("phone") String phone,
                               @RequestParam(value = "name", required = false) String name,
                               @RequestParam(value = "idCardNo", required = false) String idCardNo,
                               @RequestParam(value = "birthday", required = false) String birthday,
                               @RequestParam(value = "sex", required = false) String sex,
                               @RequestParam(value = "email", required = false) String email) {
//        User User = userService.updateUser(phone, name, idCardNo, birthday, sex, email);
        User User = new User();
        if (User != null) {
            return new Response<>(ResponseStatus.SUCCESS,  "用户资料更新成功", User);
        }
        return new Response<>(ResponseStatus.FAIL, "结果为空或超时");
    }

    /**
     * @api {put} /v1/user/password  更新用户登录密码
     * @apiDescription 更新用户登录密码
     * @apiVersion 1.0.0
     * @apiName changePassword
     * @apiGroup User
     * @apiParam {String} phone 用户手机号
     * @apiParam {String} currentPassword 原密码
     * @apiParam {String} newPassword 新密码
     * @apiSuccess {String} status SUCCESS:请求成功,FAIL:请求失败
     * @apiSuccess {Integer} responseCode HTTP应答状态码
     * @apiSuccess {String} message 提示信息
     * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
     * {
     * }
     */
    @RequestMapping(value = "/v1/user/password", method = RequestMethod.PUT)
    public Response changePassword(@RequestParam("phone") String phone,
                                   @RequestParam("currentPassword") String currentPassword,
                                   @RequestParam("newPassword") String newPassword) {
//        userService.changePassword(phone, currentPassword, newPassword);
//        User User = userService.changePassword(phone, currentPassword, newPassword);

        User User = new User();
        if (User != null) {
            return new Response<>(ResponseStatus.SUCCESS, "密码修改成功", User);
        }
        return new Response<>(ResponseStatus.FAIL, "密码修改失败或超时");
    }


    /**
     * @api {post} /v1/user/login  使用手机号、短信验证码或密码登录系统
     * @apiDescription 使用手机号、短信验证码或密码登录系统
     * @apiVersion 1.0.0
     * @apiName loginByPassword
     * @apiGroup User
     * @apiParam {String} phone 用户手机号
     * @apiParam {String} smsCode 短信验证码
     * @apiParam {String} password 密码
     * @apiSuccess {String} status SUCCESS:请求成功,FAIL:请求失败
     * @apiSuccess {Integer} responseCode HTTP应答状态码
     * @apiSuccess {String} message 提示信息
     * @apiSuccessExample {json} Success-Response: HTTP/1.1 200 OK
     * {
     * }
     */
    @RequestMapping(value = "/v1/user/login", method = RequestMethod.POST)
    public Response<User> login(@RequestParam("phone") String phone,
                          @RequestParam(value = "smsCode", required = false) String smsCode,
                          @RequestParam(value = "password", required = false) String password) {
//        User User = userService.login(phone, smsCode, password);
        User User = new User();
        User.setId("123456");
        User.setIdCardNo("321321198707107419");
        User.setName("baocy");
        if (User != null) {
            return new Response<>(ResponseStatus.SUCCESS,  "查询成功", User);
        }
        return new Response<>(ResponseStatus.FAIL,  "登录失败或超时");
    }
}
