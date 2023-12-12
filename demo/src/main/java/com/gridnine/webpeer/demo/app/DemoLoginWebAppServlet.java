/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.demo.app;

import com.gridnine.webpeer.core.servlet.BaseWebAppServlet;
import com.gridnine.webpeer.core.servlet.WebAppModule;

import java.net.URL;
import java.util.List;

public class DemoLoginWebAppServlet extends BaseWebAppServlet {
    @Override
    protected List<WebAppModule> getModules() throws Exception {
        return List.of();
    }

    @Override
    protected URL getFaviconUrl() {
        return null;
    }

    @Override
    protected String getTitle() {
        return "Demo App Login";
    }
}
