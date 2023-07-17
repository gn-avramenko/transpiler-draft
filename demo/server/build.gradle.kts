plugins{
    java
}

repositories{
    mavenCentral()
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
}

sourceSets.main {
    java.srcDirs("src/main/java", "src/main/java-gen")
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web:3.0.6")
    implementation("org.springframework.boot:spring-boot-starter-security:3.0.6")
}
