const SearchController = require('./SearchController');

describe('SearchController', () => {
    describe('Search Method', () => {
        const mockRequest = {
            query: {},
            body: {}
        };
        const mockResponse = {
            _status: undefined,
            _json: undefined,
            status(v) {
                this._status = v;
                return this;
            },
            json(v) {
                this._json = v;
                return this;
            }
        };
        const mockNext = jest.fn();

        it('should be defined', () => {
            expect(SearchController).toBeDefined();
        });
        
        it('should throw on call without parameters', () => {
            expect(SearchController.search(mockRequest, mockResponse, mockNext)).rejects.toThrow();
        });
    })
    
})