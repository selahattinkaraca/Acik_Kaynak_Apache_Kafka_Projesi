const { Kafka } = require("kafkajs");

createConsumer();

async function createConsumer() {
    try {
        const kafka = new Kafka({
            clientId: "kafka_client",
            brokers: ["kafka:9092"]
        });

        const consumer = kafka.consumer({
            groupId: "consumer_group"
        });

        console.log("Consumer-bağlanılıyor");
        await consumer.connect();
        console.log("Bağlantı-başarılı");


        await consumer.subscribe({
            topic: "Topic",
            fromBeginning: true
        });

        await consumer.run({
            eachMessage: async result => {
                console.log(
                    `Alınan_Mesaj:=>${result.message.value}, Partition_Değeri:=> ${result.partition}`
                );
            }
        });
    } catch (error) {
        console.log("Hata Oluştu", error);
    }
}