sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"cicd/myapplication/test/integration/pages/testList",
	"cicd/myapplication/test/integration/pages/testObjectPage"
], function (JourneyRunner, testList, testObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('cicd/myapplication') + '/test/flpSandbox.html#cicdmyapplication-tile',
        pages: {
			onThetestList: testList,
			onThetestObjectPage: testObjectPage
        },
        async: true
    });

    return runner;
});

