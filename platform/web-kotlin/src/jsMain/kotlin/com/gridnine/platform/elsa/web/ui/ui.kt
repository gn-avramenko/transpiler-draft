/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

external interface WebComponent;

external interface WebFacade {
    fun showInfo(info:String, title: String = definedExternally)
    fun renderWindow(component: WebComponent)
}

external val webFacade: WebFacade = definedExternally