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




describe('record view form', () => {
    it('wires recordUi to input fields', () => {
        const element = createElement('lightningtest-mock-record-edit-holder', {
            is: MockRecordHolder
        });

        element.recordId = DEFAULT_RECORD_ID;
        element.objectApiName = 'Bad_Guy__c';
        document.body.appendChild(element);
    });


});
