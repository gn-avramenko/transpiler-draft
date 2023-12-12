/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.core.servlet;

import java.io.File;
import java.util.List;

public class CoreWebAppModule extends WebAppModule{
    public CoreWebAppModule() throws Exception{
        super(List.of(new HtmlScriptWrapper("webpeer-core.js",
                new File("/home/avramenko/projects/playground/webpeer/web/webpeer-core/build/webpeer-core.js")
                .toURI().toURL(),
                "webpeer-core.js.map",
                new File("/home/avramenko/projects/playground/webpeer/web/webpeer-core/build/webpeer-core.js.map")
                        .toURI().toURL()
        )), List.of());
    }
}
