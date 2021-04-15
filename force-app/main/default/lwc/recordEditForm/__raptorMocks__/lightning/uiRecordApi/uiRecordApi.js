/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const { createLdsTestWireAdapter } = require('@salesforce/wire-service-jest-util');
const lightningUiRecordApi = {
    getRecordCreateDefaults: createLdsTestWireAdapter(),
    getRecordUi: createLdsTestWireAdapter(),
};

module.exports = lightningUiRecordApi;
