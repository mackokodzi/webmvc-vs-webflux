package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.http.HttpStatus.CREATED
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.async.DeferredResult
import java.util.concurrent.ForkJoinPool

@RestController
class CarsEndpoint(private val carsRegistrationRepository: CarsRegistrationRepository) {

    @PostMapping("/cars")
    @ResponseStatus(CREATED)
    fun registerCar(): CarApi =
        logger.info("Registering car")
            .let { carsRegistrationRepository.registerCar() }

    /**
     * Works really slow 😢
     */
    @PostMapping("/cars/deferred")
    @ResponseStatus(CREATED)
    fun registerCarDeferred(): DeferredResult<CarApi> {
        logger.info("Registering car")

        val deferredResult = DeferredResult<CarApi>()

        ForkJoinPool.commonPool().submit {
            logger.info("Processing in separate thread")
            val car = carsRegistrationRepository.registerCarDeferred()
            deferredResult.setResult(car)
        }

        return deferredResult
    }

    companion object {
        val logger by logger()
    }
}

@Component
class CarsRegistrationRepository(
    restTemplateBuilder: RestTemplateBuilder,
    @Value("\${services.cars.url}")
    private val url: String
) {

    private val restTemplate = restTemplateBuilder.build()

    fun registerCar(): CarApi =
        restTemplate.postForEntity("$url/cars", null, CarApi::class.java).body
            ?: throw RuntimeException("Body cannot be null")

    fun registerCarDeferred(): CarApi =
        restTemplate.postForEntity("$url/cars/deferred", null, CarApi::class.java).body
            ?: throw RuntimeException("Body cannot be null")
}

data class CarApi(val id: String)