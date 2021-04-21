exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    host: 'hub.browserstack.com',
    specs: ['test/*.js'],
    logLevel: 'error',
    capabilities: [{
        'platformName': 'Android',
        "os_version": "9.0",
        "device": "Samsung Galaxy S10",
        "app": process.env.BROWSERSTACK_APP_ID,
        "browserstack.appium_version": "1.17.0"
    }],
    reporters: ['browserstack'],
    reporterOptions: {
        browserstack: {
            outputDir: './'
        }
    },
    mochaOpts: {
        timeout: 0
    }
}
