import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.Duration

class RegisterCarsLoadSimulation extends Simulation {

  private val baseUrl = "http://localhost:8090"
  private val endpoint = "/cars"

  private val users = System.getProperty("USERS", "1").toInt

  private val httpConfig = http
    .baseURL(baseUrl)

  private val registerCarTest = during(Duration.create(20, "s")) {
    exec(http("register-car-test")
      .post(endpoint)
      .check(status.is(201)))
  }
  private val scn = scenario("RegisterCarsLoadSimulation")
    .exec(registerCarTest)

  setUp(scn.inject(atOnceUsers(users))).protocols(httpConfig)
}
