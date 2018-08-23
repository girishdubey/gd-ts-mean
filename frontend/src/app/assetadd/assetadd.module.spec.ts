import { AssetAddModule } from './assetadd.module';

describe('AssetAddModule', () => {
    let assetAddModule: AssetAddModule;

    beforeEach(() => {
        assetAddModule = new AssetAddModule();
    });

    it('should create an instance', () => {
        expect(assetAddModule).toBeTruthy();
    });
});
