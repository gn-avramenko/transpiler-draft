/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

external class SimpleFormBuilder{
    fun addTextField(id:String, title:String);
}

external class UiBuilder{
    fun simpleForm(configurator:(builder: SimpleFormBuilder) -> Unit)
}

