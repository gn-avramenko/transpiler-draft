/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.demo.app;

import com.gridnine.webpeer.core.servlet.BaseWebAppServlet;
import com.gridnine.webpeer.core.servlet.CoreWebAppModule;
import com.gridnine.webpeer.core.servlet.WebAppModule;

import java.net.URL;
import java.util.List;

public class DemoRootWebAppServlet extends BaseWebAppServlet {
    @Override
    protected List<WebAppModule> getModules() throws Exception {
        return List.of(new CoreWebAppModule());
    }

    @Override
    protected URL getFaviconUrl() {
        return getClass().getClassLoader().getResource("favicon.ico");
    }

    @Override
    protected String getTitle() {
        return "Demo App";
    }


}
