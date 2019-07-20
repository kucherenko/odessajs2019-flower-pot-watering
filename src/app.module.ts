import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowerPotModule } from './flower-pot/flower-pot.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    FlowerPotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
