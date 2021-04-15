/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const { createTestWireAdapter } = require('@salesforce/wire-service-jest-util');
console.warn(createTestWireAdapter(jest.fn()))
console.warn(createTestWireAdapter(jest.fn()).emit())

module.exports = {
    getRecordUi: createTestWireAdapter(jest.fn())
};
