class StockPortfolio {

	constructor() {
		this.stocks = {};
	}

	isEmpty() {
		return Object.keys(this.stocks).length === 0;
	}
	
	buyStock(symbol, shares) {
		if(!this.stocks[symbol]) {
			this.stocks[symbol] = 0;
		}
		this.stocks[symbol] += shares;
	}

	sellStock(symbol, shares) {
		if (this.stocks[symbol]) {
			this.stocks[symbol] -= shares;
			if (this.stocks[symbol] <= 0) {
				delete this.stocks[symbol];
			}
		}
	}
	
	getUniqueStockCount() {
		return Object.keys(this.stocks).length;
	}

	getShares(symbol) {
		return this.stocks[symbol] || 0;
	}

	sellStock(symbol, shares) {
		if(!this.stocks[symbol] || this.stocks[symbol] < shares) {
			throw new Error('not possible to sell amount');
		}
		this.stocks[symbol] -= shares;
		if (this.stocks[symbol] === 0) {
			delete this.stocks[symbol];
		}
	}	
}

module.exports = StockPortfolio;
