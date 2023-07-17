/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web;

//import com.gridnine.platform.elsa.web.coroutines.executeAndWait
//import com.gridnine.platform.elsa.web.coroutines.launch
import com.gridnine.platform.elsa.web.ui.ICON
import com.gridnine.platform.elsa.web.ui.MenuBuilder
import com.gridnine.platform.elsa.web.ui.webFacade
import kotlinx.browser.window

//import kotlinx.browser.window


//suspend fun delay():Int {
//    console.log("inside delay")
//    val result = executeAndWait { r ->
//        window.setTimeout({
//            console.log("inside timeout")
//            r(1000)
//        }, 1000)
//    }
//    console.log("after wait")
//    console.log(result)
//    return result
//}

//fun main() {
//    launch {
//        println("inside launch 2")
//        val data = delay()
//        println("delay $data")
//    }
//    webFacade.showInfo("Hello world")
//    c
//    console.log("Hello world 2")
//}

fun main() {
    webFacade.renderWindow(DemoRouter())
    mainFrame.setLoading(true)
    window.setTimeout({
        mainFrame.setMenu(MenuBuilder().also {
            it.item("/item1", "Item 1", ICON.ChromeFilled)
            it.item("/item2", "Item 2", ICON.SmileFilled){b2 ->
                b2.item("/item2/item3", "Item 3", ICON.ChromeFilled)
            }
        }.build())
        mainFrame.setLoading(false)
    }, 1000)
}