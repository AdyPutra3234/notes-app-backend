const amqp = require('amqplib');

const ProducerService = {
  sendMessage: async (excange, routingKey, message) => {
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
    const channel = await connection.createChannel();

    await channel.publish(excange, routingKey, Buffer.from(message));

    await channel.close();
    await connection.close();
  },
};

module.exports = ProducerService;
