/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.entityList;

import java.util.Map;

public class EntityListRequest {

    private EntityListQueryParams params;

    private Map<String,EntityListSortOrder> sort;

    public EntityListQueryParams getParams() {
        return params;
    }

    public void setParams(EntityListQueryParams params) {
        this.params = params;
    }

    public Map<String, EntityListSortOrder> getSort() {
        return sort;
    }

    public void setSort(Map<String, EntityListSortOrder> sort) {
        this.sort = sort;
    }
}
