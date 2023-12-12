/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.demo.app;

import com.gridnine.webpeer.core.ws.WebSocketConfig;
import com.gridnine.webpeer.core.ws.WebSocketMessageSender;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Timer;
import java.util.TimerTask;

@SpringBootApplication(scanBasePackages = {"com.gridnine.webpeer"})
public class DemoApp {

    public static void main(String[] args) {
        SpringApplication.run(DemoApp.class, args);
    }

}