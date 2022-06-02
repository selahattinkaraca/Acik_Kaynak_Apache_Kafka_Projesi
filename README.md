# Acik_Kaynak_Apache_Kafka_Projesi
Producer ve consumer arasında  kafka üzerinden mesajlaşmayı sağlayan bir projedir.
## Kullanımı
cd Acik_Kaynak_Apache_Kafka_Projesi

docker-compose up --build

curl -X POST  -d "[{\"id\":\"Selahattin\"}]" -H "Content-Type: application/json" localhost:3000/producer
