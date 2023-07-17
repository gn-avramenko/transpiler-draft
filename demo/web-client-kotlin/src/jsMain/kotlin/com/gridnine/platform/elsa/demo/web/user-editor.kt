/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/

package com.gridnine.platform.elsa.demo.web

import com.gridnine.platform.elsa.web.ui.BaseEntityEditor
import com.gridnine.platform.elsa.web.ui.UiBuilder

class UserEditor : BaseEntityEditor("/api/users/load"){

   override fun configure(builder: UiBuilder) {
     builder.simpleForm {fb ->
       fb.addTextField("login", "Login");
       fb.addTextField("name", "Name");
       fb.addTextField("email", "Email");
       fb.addTextField("phone", "Phone");
       fb.addTextField("workPlace", "Work place");
     }
   }
 }
