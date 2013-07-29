// Classes to test
/// <reference path="/Scripts/App/application.js"/>
// The Jasmine Test Framework
/// <reference path="/Scripts/App/Tests/lib/jasmine-1.3.1/jasmine.js"/>
/// <reference path="/Scripts/jquery-1.8.2.js"/>
/// <reference path="/Scripts/App/Tests/lib/jasmine-1.3.1/jasmine-html.js"/>
/// <reference path="/Scripts/App/Tests/lib/jasmine-jquery.js"/>

beforeEach(function () {
    window.Feminists.listing = {};
});

describe("Application", function () {
    it("should have an empty listing", function() {
        expect(window.Feminists.listing).toEqual([]);
    });
});

describe("populating the list", function () {
    it("should be able to test fixture html", function() {
        setFixtures("<div id='target'>boom</div>");
        expect($('#target')).toContainText('boom');
    });

    it("should cope with an empty list", function() {
        setFixtures("<div id='result-container'>contents</div>");
        window.Feminists.populateList();
        expect($('#result-container')).not.toContainText('contents');
        expect($('#result-container')).toBeEmpty();
    });

    it("should load items when they are in the listing", function() {
        setFixtures("<div id='result-container'>contents</div>");
        var expected = ['first', 'second', 'third'];
        window.Feminists.listing = expected;
        window.Feminists.populateList();
        expect($('#result-container li')).toHaveLength(3);
        var listItems = $("#result-container li");
        listItems.each(function (idx, li) {
            var item = $(li);
            var expectedItem = expected[idx];
            expect(item).toContainText(expectedItem);
        });    
    });
});

describe("shuffling the list", function() {
    it("should cope with an empty list", function() {
        setFixtures("<div id='result-container'>contents</div>");
        window.Feminists.shuffle();
        expect($('#result-container')).not.toContainText('contents');
        expect($('#result-container')).toBeEmpty();
    });
    

    it("should shuffle items when they are in the listing", function () {
        setFixtures("<div id='result-container'>contents</div>");
        var expected = ['first', 'second', 'third'];
        window.Feminists.listing = expected.slice(0);
        window.Feminists.shuffle();
        expect($('#result-container li')).toHaveLength(3);

        var listItems = $("#result-container li");
        var actual = [];
        listItems.each(function (idx, li) {
            var item = $(li);
            actual.push(item.text());
        });
        console.log(actual);
        console.log(expected);
        expect(actual).not.toEqual(expected);
        expect(actual[0]).toEqual(expected[1]);
        expect(actual[1]).toEqual(expected[2]);
        expect(actual[2]).toEqual(expected[0]);
    });
});