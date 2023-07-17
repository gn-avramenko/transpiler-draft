/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.web.ui

external interface MenuItem {
    var id: String
    var title: String
    var icon: String?
    var children: Array<MenuItem>
}

external class MainFrameConfigurator {
    fun setTitle(title:String)

    fun addMapping(path:String, component:WebComponent)

    fun addEntityEditorMapping(path:String, component:BaseEntityEditor)
}

open external class MainFrame: WebComponent{
    fun setLoading(value: Boolean)
    fun setMenu(menu: Array<MenuItem>)
    open fun configure(configurator: MainFrameConfigurator);
}

class MenuBuilder {
    private val items = arrayListOf<MenuItem>()
    fun item(id: String, title: String, icon: ICON?, childBuilder: ((builder:MenuBuilder) -> Unit)? = null){
        val item = object: MenuItem{
            override var id = id
            override var title = title;
            override var icon = icon?.name
            override var children = arrayOf<MenuItem>()
        }
        items.add(item);
        if(childBuilder !== null){
            val builder2 = MenuBuilder()
            childBuilder(builder2)
            val lst = item.children.toMutableList();
            lst.addAll(builder2.build().toList())
            item.children = lst.toTypedArray()
        }
    }
    fun build():Array<MenuItem>{
        return items.toTypedArray();
    }
}