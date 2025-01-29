const StockPortfolio = require('./stock-portfolio');

//2.1
test('portfolio starts empty', () => {
        const portfolio = new StockPortfolio();
        expect(Object.keys(portfolio.stocks).length).toBe(0);
});

//2.2
test('portfolio should be empty when no shares owned', () => {
	const portfolio = new StockPortfolio();
	expect(portfolio.isEmpty()).toBe(true);
});

//2.3
test('adding shares to portfolio', () => {
	const portfolio = new StockPortfolio();
	portfolio.buyStock("NStock", 10);
	expect(portfolio.stocks['NStock']).toBe(10);
});

//2.4
test('selling shares', () => {
	const portfolio = new StockPortfolio();
	portfolio.buyStock('NSTOCK', 10);
	portfolio.sellStock('NSTOCK', 5);
	expect(portfolio.stocks['NSTOCK']).toBe(5);
});
	
//2.5
test('count unique stock symobls', () => {
	const portfolio = new StockPortfolio();
	portfolio.buyStock('NSTOCK', 10);
        portfolio.buyStock('nvid', 5);
        expect(portfolio.getUniqueStockCount()).toBe(2);
});

//2.6
test('not contain stocks with zero shares', () => {
	const portfolio = new StockPortfolio();
        portfolio.buyStock('NSTOCK', 10);
        portfolio.sellStock('NSTOCK', 10);
        expect(portfolio.stocks.hasOwnProperty('NSTOCK')).toBe(false);
});

//2.7
test('specific shares #', () => {
	const portfolio = new StockPortfolio();
        portfolio.buyStock("NStock", 10);
        expect(portfolio.getShares('NStock')).toBe(10);
	expect(portfolio.getShares('nvid')).toBe(0);
});

test('cant sell more than owned', () => {
	const portfolio = new StockPortfolio();
	portfolio.buyStock('NSTOCK', 5);
	expect(() => portfolio.sellStock('NSTOCK', 10)).toThrow('not possible');
});

/* 
	I was able to follow the test-approach fairly well with this cycle. There was a bit of confusion on my part at first but I think its just b/c most of it is new to me. Im still learning as I go but some parts i struggle on. I enjoy this methodology since you are confirming you have working sections/code with this. I can also see the importance of having methods such as tdd to try and remove potential problems and headaches down the road. 
*/
