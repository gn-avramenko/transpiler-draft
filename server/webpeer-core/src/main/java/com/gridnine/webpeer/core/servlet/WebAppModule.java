/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.core.servlet;

import java.util.List;

public class WebAppModule {
    public final List<HtmlScriptWrapper> scripts;
    public final List<HtmlLinkWrapper> links;

    public WebAppModule(List<HtmlScriptWrapper> scripts, List<HtmlLinkWrapper> links) {
        this.scripts = scripts;
        this.links = links;
    }
}
