var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "28526",
        "ok": "27118",
        "ko": "1408"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "230"
    },
    "maxResponseTime": {
        "total": "17566",
        "ok": "10151",
        "ko": "17566"
    },
    "meanResponseTime": {
        "total": "572",
        "ok": "486",
        "ko": "2226"
    },
    "standardDeviation": {
        "total": "944",
        "ok": "612",
        "ko": "2818"
    },
    "percentiles1": {
        "total": "397",
        "ok": "387",
        "ko": "906"
    },
    "percentiles2": {
        "total": "561",
        "ok": "531",
        "ko": "2497"
    },
    "percentiles3": {
        "total": "1099",
        "ok": "969",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "4297",
        "ok": "4216",
        "ko": "17381"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24627,
        "percentage": 86
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1848,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 643,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1408,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "792.389",
        "ok": "753.278",
        "ko": "39.111"
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
        "total": "28526",
        "ok": "27118",
        "ko": "1408"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "230"
    },
    "maxResponseTime": {
        "total": "17566",
        "ok": "10151",
        "ko": "17566"
    },
    "meanResponseTime": {
        "total": "572",
        "ok": "486",
        "ko": "2226"
    },
    "standardDeviation": {
        "total": "944",
        "ok": "612",
        "ko": "2818"
    },
    "percentiles1": {
        "total": "397",
        "ok": "387",
        "ko": "906"
    },
    "percentiles2": {
        "total": "561",
        "ok": "531",
        "ko": "2497"
    },
    "percentiles3": {
        "total": "1099",
        "ok": "969",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "4297",
        "ok": "4216",
        "ko": "17381"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 24627,
        "percentage": 86
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1848,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 643,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1408,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "792.389",
        "ok": "753.278",
        "ko": "39.111"
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
