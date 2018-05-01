import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ShortenPipe
    ],
    exports: [
        CommonModule,
        ShortenPipe
    ]
})

export class SharedModule {}
