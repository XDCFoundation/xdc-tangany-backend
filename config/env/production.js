module.exports = {
  DB: process.env.DB || '',
  PORT: process.env.PORT || '3000',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true',
  NOTIFICATION_EXCHANGE: process.env.NOTIFICATION_EXCHANGE || "notification-exchange",
  NOTIFICATION_QUEUE: process.env.NOTIFICATION_QUEUE || 'notification-queue',
  AMQP_HOST_URL: process.env.AMQP_HOST_URL || '',
}
