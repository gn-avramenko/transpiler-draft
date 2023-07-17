/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru 2
 *****************************************************************/

package com.gridnine.platform.elsa.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    protected PasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
    }

    @Bean
    protected SecurityFilterChain defaultFilterChain(final HttpSecurity http) throws Exception {
	http.authorizeHttpRequests().anyRequest().permitAll();
	http.csrf(CsrfConfigurer::disable);
	http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	return http.build();
    }
}
