/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web

import com.gridnine.platform.elsa.web.coroutines.launch
import com.gridnine.platform.elsa.web.ui.Login
import com.gridnine.platform.elsa.web.ui.LoginFormConfigurator

class DemoLogin : Login(){
    override fun configure(rb: LoginFormConfigurator) {
        rb.setTitle("Sete")
        rb.setSubTitle("admin")
        rb.setLoginMethod{login, password, rememberMe ->
            launch {
                println("login: ${login} password: ${password} rememberMe: ${rememberMe}")
            }
        }
    }
}