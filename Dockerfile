FROM openjdk:11-jre-slim
WORKDIR /app
COPY bank-management/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]