package com.mprzybylak.reactivecars

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringWebFluxClientPostgresCarsService

fun main(args: Array<String>) {
	runApplication<SpringWebFluxClientPostgresCarsService>(*args)
}
