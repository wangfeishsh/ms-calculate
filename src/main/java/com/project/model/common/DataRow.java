/*
 * Copyright (c) 2015. 上海趣医网络科技有限公司 版权所有
 * Shanghai QuYi Network Technology Co., Ltd. All Rights Reserved.
 *
 * This is NOT a freeware,use is subject to license terms.
 */

package com.project.model.common;

import lombok.Data;

import java.util.List;

/**
 * Created by Gong Bin at 10:54 2015/12/25.
 */
@Data
@SuppressWarnings("unused")
public class DataRow<T> {

    /**
     * total
     */
    private String total;

    /**
     * rows
     */
    private List<T> rows;
}
