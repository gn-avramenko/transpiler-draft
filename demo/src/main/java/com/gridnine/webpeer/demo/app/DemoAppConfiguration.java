/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.demo.app;

import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DemoAppConfiguration {
    //@Bean
    public ServletRegistrationBean<DemoLoginWebAppServlet> demoLoginWebAppServletServletRegistrationBean(){
        return new ServletRegistrationBean<>(new DemoLoginWebAppServlet(), "/login/*");
    }

    //@Bean
    public ServletRegistrationBean<DemoRootWebAppServlet> demoRootWebAppServletServletRegistrationBean(){
        return new ServletRegistrationBean<>(new DemoRootWebAppServlet(), "/*");
    }
}
