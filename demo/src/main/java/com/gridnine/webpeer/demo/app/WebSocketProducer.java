/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.demo.app;

import com.gridnine.webpeer.core.ws.WebSocketMessageSender;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.atomic.AtomicInteger;

@Component
public class WebSocketProducer {

    @Autowired
    private WebSocketMessageSender sender;

    private final AtomicInteger counter = new AtomicInteger(0);
    @PostConstruct
    void init(){
        var timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                sender.sendMessage("1", "Hello-%s".formatted(counter.incrementAndGet()));
            }
        }, 1000L, 1000L);

    }
}
