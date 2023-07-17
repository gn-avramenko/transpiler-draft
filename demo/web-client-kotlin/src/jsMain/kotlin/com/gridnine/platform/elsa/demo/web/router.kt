/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web;

import com.gridnine.platform.elsa.web.ui.*

val mainFrame = DemoMainFrame();

class DemoRouter : Router() {
    override fun configure(rb: RoutesBuilder) {
        rb.route("/", mainFrame)
        rb.route("/login", DemoLogin())
    }
}
