/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

external class LoginFormConfigurator{

    fun setTitle(title:String)

    fun setSubTitle(subTitle:String)

    fun setLoginMethod(method:(login:String, password:String, rememberMe: Boolean) -> Unit)
}

open external class Login: WebComponent{
    open fun configure(rb:LoginFormConfigurator);
}
