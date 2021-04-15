/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// export { getRecordUi } from 'lwc-wire-service-sfdc-mocks';

// const { createLdsTestWireAdapter } = require('@salesforce/wire-service-jest-util');
// console.warn(createLdsTestWireAdapter(jest.fn()))
// console.warn(createLdsTestWireAdapter(jest.fn()).emit())
//
// module.exports = {
//     getRecordUi: createLdsTestWireAdapter(jest.fn())
// };

// import { createTestWireAdapter } from '@salesforce/wire-service-jest-util';
// export const getTodo = createTestWireAdapter();


const { createTestWireAdapter } = require('@salesforce/wire-service-jest-util');
console.warn(createTestWireAdapter(jest.fn()))
console.warn(createTestWireAdapter(jest.fn()).emit())

// module.exports = createTestWireAdapter(jest.fn());

module.exports = {
    getRecordUi: createTestWireAdapter(jest.fn())
};
