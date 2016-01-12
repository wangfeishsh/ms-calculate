/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */
package com.project.service;


import com.project.model.User;

public interface UserService {

    User findUserByPhone(String phone);

    User updateUser(String phone, String name, String idCardNo, String birthday, String sex, String email);

    User changePassword(String phone, String currentPassword, String newPassword);

    User login(String phone, String smsCode, String password);

    void getSmsCode(String phone);

    User signUp(String phone, String smsCode, String password);
}
