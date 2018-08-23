import { AssetListModule } from './assetlist.module';

describe('AssetListModule', () => {
    let assetListModule: AssetListModule;

    beforeEach(() => {
        assetListModule = new AssetListModule();
    });

    it('should create an instance', () => {
        expect(assetListModule).toBeTruthy();
    });
});
