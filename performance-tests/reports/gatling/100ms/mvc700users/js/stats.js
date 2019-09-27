var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18965",
        "ok": "17416",
        "ko": "1549"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "186"
    },
    "maxResponseTime": {
        "total": "3808",
        "ok": "2279",
        "ko": "3808"
    },
    "meanResponseTime": {
        "total": "760",
        "ok": "703",
        "ko": "1397"
    },
    "standardDeviation": {
        "total": "473",
        "ok": "394",
        "ko": "745"
    },
    "percentiles1": {
        "total": "764",
        "ok": "718",
        "ko": "1120"
    },
    "percentiles2": {
        "total": "1004",
        "ok": "985",
        "ko": "1817"
    },
    "percentiles3": {
        "total": "1516",
        "ok": "1386",
        "ko": "3138"
    },
    "percentiles4": {
        "total": "2276",
        "ok": "1694",
        "ko": "3406"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9681,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5861,
        "percentage": 31
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1874,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 1549,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "729.423",
        "ok": "669.846",
        "ko": "59.577"
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
        "total": "18965",
        "ok": "17416",
        "ko": "1549"
    },
    "minResponseTime": {
        "total": "103",
        "ok": "103",
        "ko": "186"
    },
    "maxResponseTime": {
        "total": "3808",
        "ok": "2279",
        "ko": "3808"
    },
    "meanResponseTime": {
        "total": "760",
        "ok": "703",
        "ko": "1397"
    },
    "standardDeviation": {
        "total": "473",
        "ok": "394",
        "ko": "745"
    },
    "percentiles1": {
        "total": "764",
        "ok": "718",
        "ko": "1120"
    },
    "percentiles2": {
        "total": "1004",
        "ok": "985",
        "ko": "1817"
    },
    "percentiles3": {
        "total": "1516",
        "ok": "1386",
        "ko": "3138"
    },
    "percentiles4": {
        "total": "2276",
        "ok": "1694",
        "ko": "3406"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9681,
        "percentage": 51
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5861,
        "percentage": 31
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1874,
        "percentage": 10
    },
    "group4": {
        "name": "failed",
        "count": 1549,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "729.423",
        "ok": "669.846",
        "ko": "59.577"
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
