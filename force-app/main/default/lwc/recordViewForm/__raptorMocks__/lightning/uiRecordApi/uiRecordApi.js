/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// export { getRecordUi } from 'lwc-wire-service-sfdc-mocks';

const { createLdsTestWireAdapter } = require('@salesforce/wire-service-jest-util');

module.exports = {
    getRecordUi: createLdsTestWireAdapter(jest.fn())
};
