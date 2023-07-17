/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.user;

import com.gridnine.platform.elsa.demo.entityList.EntityListRequest;
import com.gridnine.platform.elsa.demo.entityList.EntityListResponse;
import com.gridnine.platform.elsa.demo.entityList.EntityListSortOrder;
import com.gridnine.platform.elsa.demo.model.UserListItem;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    private final List<UserListItem> users;

    public UserController(){
        users = new ArrayList<>();
        for(int n =0; n < 50; n++){
            UserListItem item = new UserListItem();
            item.setId("item"+n);
            item.setEmail(String.format("user_%s@yandex.ru", n));
            item.setName(String.format("User %s", n));
            item.setLogin(String.format("user_%s", n));
            item.setPhone(String.format("8-936-987-01-%s", n));
            item.setWorkPlace(String.format("Gridnine office %s", n));
            item.setEntityType("user");
            item.setCaption(item.getName());
            users.add(item);
        }
    }

    private String getValue(UserListItem item, String fieldName){
        return switch (fieldName) {
            case "email" -> item.getEmail();
            case "name" -> item.getName();
            case "login" -> item.getLogin();
            case "phone" -> item.getPhone();
            case "workPlace" -> item.getWorkPlace();
            default -> "";
        };
    }
    @PostMapping("/api/users")
    @ResponseBody
    public EntityListResponse getUsers(@RequestBody EntityListRequest request) {
        String keyword = request.getParams().getKeyword();

        List<UserListItem> list = users.stream().filter((u) -> keyword == null || u.getName().toLowerCase().contains(keyword.toLowerCase())).sorted((a, b) -> {
            if (request.getSort().isEmpty()) {
                return a.getName().toLowerCase().compareTo(b.getName().toLowerCase());
            }
            Map.Entry<String, EntityListSortOrder> it =
                    request.getSort().entrySet().iterator().next();
            String value1 = getValue(a, it.getKey());
            String value2 = getValue(b, it.getKey());
            if (it.getValue() == EntityListSortOrder.ascend) {
                return value1.toLowerCase().compareTo(value2.toLowerCase());
            }
            return value2.toLowerCase().compareTo(value1.toLowerCase());
        }).toList();
        list = list.subList((request.getParams().getCurrent() -1)*request.getParams().getPageSize(), Math.min(list.size(), request.getParams().getCurrent()*request.getParams().getPageSize()));
        EntityListResponse response = new EntityListResponse();
        response.getData().addAll(list);
        response.setSuccess(true);
        response.setTotal(users.size());
        return response;
    }

    @GetMapping("/api/users/load")
    @ResponseBody
    public UserListItem load(@RequestParam String id) {
        UserListItem item = users.stream().filter((u) -> u.getId().equals(id)).findFirst().orElseThrow();
        return item;
    }
}
