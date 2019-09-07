import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RegisterCarsLoadSimulation extends Simulation {

  private val baseUrl = "http://localhost:8090"
  private val endpoint = "/cars"
  private val requestCount = 3

  private val users = System.getProperty("USERS", "1").toInt

  private val httpConfig = http
    .baseURL(baseUrl)

  private val registerCarTest = repeat(requestCount) {
    exec(http("register-car-test")
      .post(endpoint)
      .check(status.is(201)))
  }
  private val scn = scenario("RegisterCarsLoadSimulation")
    .exec(registerCarTest)

  setUp(scn.inject(atOnceUsers(users))).protocols(httpConfig)
}
