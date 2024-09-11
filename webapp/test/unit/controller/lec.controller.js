/*global QUnit*/

sap.ui.define([
	"lecturer/workflow-ui-module/controller/lec.controller"
], function (Controller) {
	"use strict";

	QUnit.module("lec Controller");

	QUnit.test("I should test the lec controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
