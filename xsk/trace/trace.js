/*
 * Copyright (c) 2019-2020 SAP SE or an SAP affiliate company and XSK contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Apache License, v2.0
 * which accompanies this distribution, and is available at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-FileCopyrightText: 2019-2020 SAP SE or an SAP affiliate company and XSK contributors
 * SPDX-License-Identifier: Apache-2.0
 */
exports.debug = function(message) {
	console.debug(message);
}

exports.error = function(message) {
	console.error(message);
}

exports.fatal = function(message) {
	console.error(message);
}

exports.info = function(message) {
	console.info(message);
}

exports.warning = function(message) {
	console.warn(message);
}

exports.isDebugEnabled = function(message) {
	return true;
}

exports.isErrorEnabled = function(message) {
	return true;
}

exports.isFatalEnabled = function(message) {
	return true;
}

exports.isInfoEnabled = function(message) {
	return true;
}

exports.isWarningEnabled = function(message) {
	return true;
}

