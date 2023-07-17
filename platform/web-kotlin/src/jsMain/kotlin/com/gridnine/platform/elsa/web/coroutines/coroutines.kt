/*****************************************************************
 * Gridnine AB http://www.gridnine.com
 * Project: Lunda.ru Deployment Scripts
 *****************************************************************/
package com.gridnine.platform.elsa.web.coroutines

import kotlinx.coroutines.await
import kotlin.coroutines.Continuation
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.coroutines.startCoroutine
import kotlin.js.Promise


suspend fun <T> executeAndWait(executor: (resolve: (T) -> Unit) -> Unit): T {
    return Promise { r, _ ->
        executor(r)
    }.await()
}

suspend fun <T> executeAndWait(executor: (resolve: (T) -> Unit, reject: (Throwable) -> Unit) -> Unit): T {
    return Promise { r, e ->
        executor(r, e)
    }.await()
}

fun launch(block: suspend () -> Unit) {
    launchInternal {
        try {
            block()
        } catch (error: Throwable) {
            console.log(error)
        }
    }
}

fun launchAndHandleException(block: suspend () -> Unit, exceptionHandler: (Throwable) -> Unit) {
    launchInternal {
        try {
            block()
        } catch (error: Throwable) {
            exceptionHandler.invoke(error)
        }
    }
}

private fun launchInternal(block: suspend () -> Unit) {
    block.startCoroutine(object : Continuation<Unit> {
        override val context: CoroutineContext get() = EmptyCoroutineContext
        override fun resumeWith(result: Result<Unit>) {
            if (result.isFailure) {
                console.log("Unknown coroutine error")
            }
        }
    })
}