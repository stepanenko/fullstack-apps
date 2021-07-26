import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';


@Module({
  imports: [
    CarsModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbitmq:rabbitmq@localhost:5672',
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// More on Rabbit: https://github.com/golevelup/nestjs/tree/master/packages/rabbitmq
