import { ApiModelProperty } from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';

export class QueryRequest {
    @IsString()
    @ApiModelProperty()
    readonly requestId: string;
    @IsString()
    @ApiModelProperty()
    readonly blockstackUserId: string;
    @IsString()
    @ApiModelProperty()
    readonly fabricParticipantId: string;
    @IsString()
    @ApiModelProperty()
    readonly fabricParticipantType: number;
    @IsString()
    @ApiModelProperty()
    readonly requestedDataHash: string;
    @IsString()
    @ApiModelProperty()
    readonly requestTimestamp: number;
}

export class CreateRequest {
    @IsString()
    @ApiModelProperty()
    readonly blockstackUserId: string;
    @IsString()
    @ApiModelProperty()
    readonly fabricParticipantId: string;
    @IsNumber()
    @ApiModelProperty()
    readonly fabricParticipantType: number;
    @IsString()
    @ApiModelProperty()
    readonly requestedDataHash: string;
}
