const {
    createLogger,
    format,
    transports
} = require('winston');

const logger = createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        //
        // - Write all logs to console (will be caught by Kubernetes logs)
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(
                    info => `${info.timestamp} ${info.level}: ${info.message}`
                )
            )
        })
    ]
});

process.on('uncaughtException', (error) => {
    logger.error('Uncaught exception: ', error);
});

//
// Logs are written like this:
// logger.info('Hello log');
// logger.error('This is an error');
module.exports = logger;
