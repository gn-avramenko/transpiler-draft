/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web

import com.gridnine.platform.elsa.web.ui.ColumnDataType
import com.gridnine.platform.elsa.web.ui.EntityList
import com.gridnine.platform.elsa.web.ui.EntityListBuilder

class UserList: EntityList() {
    override fun configure(rb: EntityListBuilder) {
        rb.setSearchMethodUrl("/api/users")
        rb.column("login", "Login", ColumnDataType.STRING.name, true);
        rb.column("name", "Name", ColumnDataType.STRING.name, true);
        rb.column("email", "Email", ColumnDataType.STRING.name, true);
        rb.column("phone", "Phone", ColumnDataType.STRING.name, true);
        rb.column("workPlace", "Work place", ColumnDataType.STRING.name, true);
    }
}