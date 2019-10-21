package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.async.DeferredResult
import java.util.UUID
import java.util.concurrent.ForkJoinPool

@RestController
class CarsEndpoint {

    @PostMapping("/cars")
    @ResponseStatus(CREATED)
    fun insertCarWithDelay(): CarApi {
        logger.info("Inserting car with delay $DELAY")
        Thread.sleep(DELAY)
        return CarApi(UUID.randomUUID().toString())
    }

    /**
     * Works really slow 😢
     */
    @PostMapping("/cars/deferred")
    @ResponseStatus(CREATED)
    fun insertCarWithDelayDeferred(): DeferredResult<CarApi> {
        logger.info("Inserting car with delay $DELAY")
        val deferredResult = DeferredResult<CarApi>()

        ForkJoinPool.commonPool().submit {
            logger.info("Processing in separate thread")
            Thread.sleep(DELAY)
            deferredResult.setResult(CarApi(UUID.randomUUID().toString()))
        }

        return deferredResult
    }

    companion object {
        val logger by logger()
        const val DELAY : Long = 500
    }
}

data class CarApi(val id: String)