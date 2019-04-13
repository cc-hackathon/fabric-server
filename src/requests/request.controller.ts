import { Body, Controller, Get, NotFoundException, Param, Post, Req } from '@nestjs/common';
import { RequestService } from './request.service';
import {CreateRequest, QueryRequest} from './request.model';
import { ApiOAuth2Auth, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { InvokeResult } from '../common/utils/invokeresult.model';

@ApiUseTags('requests')
@Controller('requests')
export class RequestController {

    /**
     * Creates an instance of RequestController.
     * @memberof RequestController
     * @param {RequestService} requestService
     */
    constructor(private requestService: RequestService) {
    }

    /**
     * Get all requests
     *
     * @returns {Promise<QueryRequest[]>}
     * @memberof RequestController
     */
    @Get()
    @ApiOperation({title: 'Get all requests'})
    @ApiOAuth2Auth(['read'])
    @ApiResponse({
        status: 200,
        description: 'Returns a list of request objects',
        type: QueryRequest,
        isArray: true
    })
    getAll(): Promise<QueryRequest[]> {
        return this.requestService.getAll();
    }

    /**
     * Get request by id
     *
     * @returns {Promise<QueryRequest[]>}
     * @memberof RequestController
     * @param id
     */
    @Get(':id')
    @ApiOperation({title: 'Get a request by id'})
    @ApiOAuth2Auth(['read'])
    @ApiResponse({
        status: 200,
        description: 'Returns a Request object',
        type: QueryRequest,
    })
    @ApiResponse({
        status: 404,
        description: 'Request does not exist!',
        type: NotFoundException
    })
    getById(@Param('id') id: string): Promise<QueryRequest> {
        return this.requestService.getById(id);
    }

    /**
     * Create new request
     *
     * @param {QueryRequest} createRequest
     * @returns {*}
     * @memberof RequestController
     */
    @Post()
    @ApiOperation({title: 'Create new request'})
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiOAuth2Auth(['write'])
    create(@Body() createRequest: CreateRequest): Promise<InvokeResult> {
        return this.requestService.create(createRequest);
    }
}
