/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */
package com.project.model;

import lombok.Data;

@Data
public class User {
    private String name;
    private String userCode;
    private String id;
    private String idCardNo;
    private String sex;
    private String birthday;
    private String registerDate;
    private String phone;
    private String status;
    private String email;

}
