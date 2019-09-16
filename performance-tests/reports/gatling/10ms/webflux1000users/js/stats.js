var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "74551",
        "ok": "74551",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "266",
        "ok": "266",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "percentiles2": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "688",
        "ok": "688",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 74121,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 388,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 42,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2662.536",
        "ok": "2662.536",
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
        "total": "74551",
        "ok": "74551",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1613",
        "ok": "1613",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "266",
        "ok": "266",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "percentiles2": {
        "total": "323",
        "ok": "323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles4": {
        "total": "688",
        "ok": "688",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 74121,
        "percentage": 99
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 388,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 42,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2662.536",
        "ok": "2662.536",
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
