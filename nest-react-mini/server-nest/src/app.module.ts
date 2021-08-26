import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    CarsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../assets')
    })
    // RabbitMQModule.forRoot(RabbitMQModule, {
    //   exchanges: [
    //     {
    //       name: 'exchange1',
    //       type: 'topic',
    //     },
    //   ],
    //   uri: 'amqp://rabbitmq:rabbitmq@localhost:5672',
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// More on Rabbit: https://github.com/golevelup/nestjs/tree/master/packages/rabbitmq
