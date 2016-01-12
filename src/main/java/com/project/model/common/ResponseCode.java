/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */

package com.project.model.common;

/**
 * Created by Gong Bin at 10:14 2015/12/28.
 */
@SuppressWarnings("unused")
public class ResponseCode {
    public static final String OK = "200",
    CREATED = "201",
    NO_CONTENT = "204",
    BAD_REQUEST = "400",
    NOT_FOUND = "404";

    private ResponseCode() {
    }
}
