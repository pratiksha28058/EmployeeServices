FROM openjdk:11
EXPOSE 8001
ARG APM_SERVICE_URL
ENV APM_SERVICE_URL = ${APM_SERVICE_URL}
ADD target/spring-boot-producer.jar spring-boot-producer.jar
ENTRYPOINT ["java","-jar","spring-boot-producer.jar"]