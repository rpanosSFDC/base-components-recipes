import { createElement } from 'lwc';
import MockRecordHolder from 'lightningtest/mockRecordEditHolder';
const DEFAULT_RECORD_ID = 'a00R0000000jq5eIAA';
const DEFAULT_RECORD_TYPE_ID = '012000000000000AAA';

jest.mock('lightning/uiRecordApi', () => {
    const { createLdsTestWireAdapter } = require('@salesforce/wire-service-jest-util');
    return {
        getRecordUi: createLdsTestWireAdapter(jest.fn())
    }
});

jest.mock('lightning/uiRecordApi', () => {
    const { createLdsTestWireAdapter } = require('@salesforce/wire-service-jest-util');
    return {
        getRecordUi: createLdsTestWireAdapter(jest.fn())
    }
})

const mockRecordData = {
    beavis: 'such'
}
let getRecordUi;

describe('record view form', () => {
    beforeAll(() => {
        // todo why would this cause the pause????
        // jest.unmock('lightning/uiRecordApi');

        getRecordUi = require('../__raptorMocks__/lightning/uiRecordApi/uiRecordApi');
    });

    it('wires recordUi to input fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
        getRecordUi.emit(mockRecordData);
    });


});
