/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.entityList;

import java.util.ArrayList;
import java.util.List;

public class EntityListResponse {

    private boolean success;
    private int total;
    private final List<Object> data = new ArrayList<>();

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public List<Object> getData() {
        return data;
    }
}
