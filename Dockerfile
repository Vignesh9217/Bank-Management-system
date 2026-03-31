# Build Stage
FROM maven:3.8.4-openjdk-11-slim AS build
WORKDIR /app
COPY bank-management/pom.xml .
COPY bank-management/src ./src
RUN mvn clean package -DskipTests

# Run Stage
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]