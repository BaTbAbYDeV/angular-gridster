'use strict';

/* global browser */
/* global element */
/* global by */

describe('Controller: GridsterCtrl', function() {
	var items,
		firstItem;

	beforeEach(function() {
		browser.get('overlap_test.html');
		browser.driver.manage()
			.window()
			.setSize(1000, 1000);
		items = element.all(by.css('[gridster-item]'));
		firstItem = items.get(0);
	});

	it('should have a page with elements', function() {
		element.all(by.repeater('item in standardItems')).then(function(items) {
			expect(items.length).toEqual(11);
		});

		browser.pause();

		browser.findElement(by.css('h2:first-child')).then(function(el) {
			return el.getText().then(function(text) {
				expect(text).toBe('Standard Items');
			});
		});
	});

});
