package com.ownpedia

import io.javalin.Javalin
import io.javalin.staticfiles.Location
import java.nio.file.Paths


const val VUE_JS_DIST_DIR = "/fe/dist"
const val JAVALIN_PORT_NUMBER = 7000


fun main(args: Array<String>) {
    val vueJsDistDir = getVueJsDistPath()

    val app = Javalin.create().apply {
        port(JAVALIN_PORT_NUMBER)
        enableStaticFiles(vueJsDistDir, Location.EXTERNAL)
    }.start()
}


fun getVueJsDistPath(): String {
    var vueJsDistPath = Paths.get("").toAbsolutePath().toString()

    if (!vueJsDistPath.endsWith("/")) {
        vueJsDistPath += "/"
    }

    vueJsDistPath += VUE_JS_DIST_DIR
    return vueJsDistPath

}