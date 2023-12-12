plugins {
    java
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework:spring-websocket:6.0.12")
    implementation("org.springframework:spring-messaging:6.0.12")
    implementation("jakarta.servlet:jakarta.servlet-api:6.0.0")

}