var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "8480",
        "ok": "8480",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "505",
        "ok": "505",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1433",
        "ok": "1433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1398",
        "ok": "1398",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1415",
        "ok": "1415",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1421",
        "ok": "1421",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 225,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4262,
        "percentage": 50
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3993,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "385.455",
        "ok": "385.455",
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
        "total": "8480",
        "ok": "8480",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "505",
        "ok": "505",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1433",
        "ok": "1433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1233",
        "ok": "1233",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1161",
        "ok": "1161",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1398",
        "ok": "1398",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1415",
        "ok": "1415",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1421",
        "ok": "1421",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 225,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4262,
        "percentage": 50
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3993,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "385.455",
        "ok": "385.455",
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
