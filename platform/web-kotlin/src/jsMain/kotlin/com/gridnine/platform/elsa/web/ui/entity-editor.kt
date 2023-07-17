/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

abstract external class BaseEntityEditor(loadDataUrl: String) {
    open fun configure(builder:UiBuilder)
}
