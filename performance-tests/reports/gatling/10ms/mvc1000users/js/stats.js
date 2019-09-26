var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "29559",
        "ok": "28030",
        "ko": "1529"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "13",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "43239",
        "ok": "43239",
        "ko": "19442"
    },
    "meanResponseTime": {
        "total": "710",
        "ok": "638",
        "ko": "2021"
    },
    "standardDeviation": {
        "total": "1247",
        "ok": "1183",
        "ko": "1602"
    },
    "percentiles1": {
        "total": "525",
        "ok": "484",
        "ko": "1875"
    },
    "percentiles2": {
        "total": "870",
        "ok": "812",
        "ko": "2523"
    },
    "percentiles3": {
        "total": "1880",
        "ok": "1518",
        "ko": "3995"
    },
    "percentiles4": {
        "total": "3912",
        "ok": "2838",
        "ko": "5505"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20845,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5529,
        "percentage": 19
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1656,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 1529,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "568.442",
        "ok": "539.038",
        "ko": "29.404"
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
        "total": "29559",
        "ok": "28030",
        "ko": "1529"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "13",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "43239",
        "ok": "43239",
        "ko": "19442"
    },
    "meanResponseTime": {
        "total": "710",
        "ok": "638",
        "ko": "2021"
    },
    "standardDeviation": {
        "total": "1247",
        "ok": "1183",
        "ko": "1602"
    },
    "percentiles1": {
        "total": "525",
        "ok": "484",
        "ko": "1875"
    },
    "percentiles2": {
        "total": "870",
        "ok": "812",
        "ko": "2523"
    },
    "percentiles3": {
        "total": "1880",
        "ok": "1518",
        "ko": "3995"
    },
    "percentiles4": {
        "total": "3912",
        "ok": "2838",
        "ko": "5505"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20845,
        "percentage": 71
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5529,
        "percentage": 19
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1656,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 1529,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "568.442",
        "ok": "539.038",
        "ko": "29.404"
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
