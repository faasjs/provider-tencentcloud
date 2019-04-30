import * as TencentCloud from '../index';

test('properties', function () {
  expect(TencentCloud).toHaveProperty('Scf');
  expect(TencentCloud.Scf).toHaveProperty('action');
  expect(TencentCloud.Scf).toHaveProperty('deploy');
  expect(TencentCloud).toHaveProperty('ApiGateway');
  expect(TencentCloud.ApiGateway).toHaveProperty('action');
  expect(TencentCloud.ApiGateway).toHaveProperty('deploy');
});
