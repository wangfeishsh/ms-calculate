/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */
package com.project.service.impl;

import com.project.model.User;
import com.project.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@SuppressWarnings("unused")
public class UserServiceImpl implements UserService {


    @Override
    public User findUserByPhone(String phone) {
        return null;
    }

    @Override
    public User updateUser(String phone, String name, String idCardNo, String birthday, String sex, String email) {
        return null;
    }

    @Override
    public User changePassword(String phone, String currentPassword, String newPassword) {
        return null;
    }

    @Override
    public User login(String phone, String smsCode, String password) {
        return null;
    }

    @Override
    public void getSmsCode(String phone) {

    }

    @Override
    public User signUp(String phone, String smsCode, String password) {
        return null;
    }
}
