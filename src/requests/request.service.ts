import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {CreateRequest, QueryRequest} from './request.model';
import { RequestHelper } from '../core/chain/requesthelper';
import { InvokeResult } from '../common/utils/invokeresult.model';
import { ChainMethod } from '../chainmethods.enum';

@Injectable()
export class RequestService {
    /**
     * Creates an instance of RequestService.
     * @param {RequestHelper} requestHelper
     * @memberof RequestService
     */
    constructor(private requestHelper: RequestHelper) {
    }

    /**
     * Get all requests
     *
     * @returns {Promise<QueryRequest[]>}
     * @memberof RequestService
     */
    getAll(): Promise<QueryRequest[]> {
        return this.requestHelper.queryRequest(ChainMethod.queryAllRequests).catch((error) => {
            throw new InternalServerErrorException(error);
        });
    }

    /**
     * Get request by id
     *
     * @returns {Promise<QueryRequest>}
     * @memberof RequestService
     */
    getById(id: string): Promise<QueryRequest> {
        return this.requestHelper.queryRequest(ChainMethod.queryRequest, {requestId: id}).then(
            (request) => {
                if (!request) {
                    throw new NotFoundException('Request does not exist!');
                }
                return request;
            },
            (error) => {
                throw new InternalServerErrorException(error);
            },
        );
    }

    /**
     * Create new request
     *
     * @param {QueryRequest} createRequest
     * @returns {Promise<InvokeResult>}
     * @memberof RequestService
     */
    create(createRequest: CreateRequest): Promise<InvokeResult> {
        return this.requestHelper.invokeRequest(ChainMethod.createRequest, createRequest, '', true)
            .catch((error) => {
                throw new InternalServerErrorException(error);
            });
    }
}
