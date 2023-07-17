/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web

import com.gridnine.platform.elsa.demo.UserList
import com.gridnine.platform.elsa.web.ui.Div
import com.gridnine.platform.elsa.web.ui.MainFrame
import com.gridnine.platform.elsa.web.ui.MainFrameConfigurator

class Div1 : Div(){
    override fun getText(): String {
        return "kotlin 1"
    }
}

class DemoMainFrame: MainFrame(){
    override fun configure(configurator: MainFrameConfigurator) {
        configurator.setTitle("Demo App")
        configurator.addMapping("/item1", Div1())
        configurator.addMapping("/item2/item3", UserList())
        configurator.addEntityEditorMapping("user", UserEditor())
    }
}