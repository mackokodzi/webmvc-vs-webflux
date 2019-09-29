package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.beans.factory.annotation.Value
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.repository.reactive.ReactiveCrudRepository
import org.springframework.http.HttpStatus.CREATED
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono

@RestController
class CarsEndpoint(
    private val carsRegistration: CarsRegistration,
    private val mongoCarRepository: MongoCarRepository
) {

    @PostMapping("/cars")
    @ResponseStatus(CREATED)
    fun registerCar(): Mono<CarApi> =
        Mono.fromCallable { logger.info("Registering car") }
            .flatMap { carsRegistration.registerCar() }
            .doOnError { logger.error("Processing error $it") }

    @PostMapping("/cars/mongo")
    @ResponseStatus(CREATED)
    fun registerCarMongo(): Mono<CarApi> =
        Mono.fromCallable { logger.info("Registering car") }
            .flatMap { carsRegistration.registerCar() }
            .flatMap { carApi ->
                mongoCarRepository.save(CarEntity(carApi.id))
                    .map { carApi }
            }
            .doOnError { logger.error("Processing error $it") }

    companion object {
        val logger by logger()
    }
}

@Component
class CarsRegistration(
    @Value("\${services.cars.url}")
    private val url: String
) {

    private val webClient = WebClient.builder().baseUrl(url).build()

    fun registerCar() : Mono<CarApi> =
            webClient.post()
                .uri("/cars")
                .exchange()
                .flatMap { it.bodyToMono(CarApi::class.java) }
}

data class CarApi(val id: String)

@Document(collection = "Car")
data class CarEntity(val id: String)

interface MongoCarRepository : ReactiveCrudRepository<CarEntity, String>
