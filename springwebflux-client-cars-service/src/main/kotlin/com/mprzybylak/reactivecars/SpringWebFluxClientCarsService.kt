package com.mprzybylak.reactivecars

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringWebFluxClientCarsService

fun main(args: Array<String>) {
	runApplication<SpringWebFluxClientCarsService>(*args)
}
