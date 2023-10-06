/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Electrade
 *****************************************************************/

package com.gridnine.webpeer.core.ws;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class WebSocketMessageSender {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    public void sendMessage(String user, String content){
        simpMessagingTemplate.convertAndSend("/ui/queue/%s".formatted(user), content);
    }
}
