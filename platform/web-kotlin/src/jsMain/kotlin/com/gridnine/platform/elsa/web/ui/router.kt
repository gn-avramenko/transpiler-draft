/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

external class RoutesBuilder{
    fun route(path:String, component:WebComponent, configure: ((rb:RoutesBuilder) -> Unit)? = definedExternally);
}

open external class Router: WebComponent{
    open fun configure(rb:RoutesBuilder);
}
