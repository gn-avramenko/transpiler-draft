plugins {
    kotlin("multiplatform") version "1.9.0"
}

repositories {
    mavenCentral()
}

kotlin {
    js{
        browser {
        }
        binaries.executable()
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile> {
    kotlinOptions.useEsClasses = true
}

dependencies {
    commonMainImplementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.0")
    commonMainImplementation(project(":platform:web-kotlin"))
}