package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.http.HttpEntity
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import java.lang.RuntimeException
import java.util.UUID

@RestController
class CarsEndpoint {

    @PostMapping("/cars")
    @ResponseStatus(CREATED)
    fun registerCar(): CarApi {
        logger.info("Registering car")
        return CarApi(UUID.randomUUID().toString())
    }

    companion object {
        val logger by logger()
    }
}

class CarsRegistrationRepository(
    private val restTemplateBuilder: RestTemplateBuilder,
    @Value("\${services.cars.url}")
    private val url: String) {

    private val restTemplate = restTemplateBuilder.build()

    fun registerCar() : CarApi =
            restTemplate.postForEntity("$url/cars/delay", null, CarApi::class.java).body
                ?: throw RuntimeException("Body cannot be null")
}

data class CarApi(val id: String)