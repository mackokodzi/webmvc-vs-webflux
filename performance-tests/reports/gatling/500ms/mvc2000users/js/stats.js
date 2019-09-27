var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10109",
        "ok": "10109",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5339",
        "ok": "5339",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4502",
        "ok": "4502",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5090",
        "ok": "5090",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5170",
        "ok": "5170",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5225",
        "ok": "5225",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5283",
        "ok": "5283",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 200,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 282,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9627,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "374.407",
        "ok": "374.407",
        "ko": "-"
    }
},
contents: {
"req_register-car-te-ceeeb": {
        type: "REQUEST",
        name: "register-car-test",
path: "register-car-test",
pathFormatted: "req_register-car-te-ceeeb",
stats: {
    "name": "register-car-test",
    "numberOfRequests": {
        "total": "10109",
        "ok": "10109",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "504",
        "ok": "504",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5339",
        "ok": "5339",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4502",
        "ok": "4502",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1273",
        "ok": "1273",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5090",
        "ok": "5090",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5170",
        "ok": "5170",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5225",
        "ok": "5225",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5283",
        "ok": "5283",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 200,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 282,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 9627,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "374.407",
        "ok": "374.407",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
