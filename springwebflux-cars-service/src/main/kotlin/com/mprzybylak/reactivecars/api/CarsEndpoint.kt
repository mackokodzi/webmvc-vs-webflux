package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.time.Duration
import java.util.UUID

@RestController
class CarsEndpoint {

    @PostMapping("/cars/delay")
    fun insertCarWithDelayWithoutMongo(): Mono<CarApi> {
        return Mono.fromCallable { logger.info("Inserting car with delay without mongo") }
            .flatMap { Mono.just(CarApi(UUID.randomUUID().toString())) }
            .delaySubscription(Duration.ofMillis(DELAY))
    }

    companion object {
        val logger by logger()
        const val DELAY : Long = 100
    }
}

data class CarApi(val id: String)