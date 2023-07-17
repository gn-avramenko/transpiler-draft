/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

enum class ColumnDataType {
    STRING, NUMBER
}
external class EntityListBuilder{

    fun column(id:String, title:String, type:String, sortable:Boolean);

    fun setSearchMethodUrl(url:String);
}

open external class EntityList: WebComponent{
    open fun configure(rb:EntityListBuilder);
}
