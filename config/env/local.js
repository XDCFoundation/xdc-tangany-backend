module.exports = {
  DB: process.env.DB || 'mongodb://localhost:27017/clinic',
  PORT: process.env.PORT || '3001',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true',
  NOTIFICATION_EXCHANGE: process.env.NOTIFICATION_EXCHANGE || "notification_exchange",
  NOTIFICATION_QUEUE: process.env.NOTIFICATION_QUEUE || 'notification_queue_dev',
  AMQP_HOST_URL: process.env.AMQP_HOST_URL || 'amqp://user:bitnami@54.91.115.9:5672',
}
