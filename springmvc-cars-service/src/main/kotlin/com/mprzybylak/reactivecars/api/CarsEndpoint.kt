package com.mprzybylak.reactivecars.api

import com.mprzybylak.reactivecars.utils.logger
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
class CarsEndpoint {

    @PostMapping("/cars/delay")
    @ResponseStatus(CREATED)
    fun insertCarWithDelayWithoutMongo(): CarApi {
        logger.info("Inserting car with delay without mongo")
        Thread.sleep(DELAY)
        return CarApi(UUID.randomUUID().toString())
    }

    companion object {
        val logger by logger()
        const val DELAY : Long = 100
    }
}

data class CarApi(val id: String)