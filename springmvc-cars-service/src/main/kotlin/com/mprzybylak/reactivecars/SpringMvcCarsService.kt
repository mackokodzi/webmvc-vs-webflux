package com.mprzybylak.reactivecars

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringMvcCarsService

fun main(args: Array<String>) {
	runApplication<SpringMvcCarsService>(*args)
}
