import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService = new CalculationService();

  it('service instance exists', () => {
    expect(service).toBeTruthy();
  });

  it('CalculationService should calculate add correctly', () => {
    expect(service.add(2,  2)).toEqual(4);
  });

  it('CalculationService should calculate subtract correctly', () => {
    expect(service.subtract(4,  2)).toEqual(2);
  });

  it('CalculationService should calculate multiply correctly', () => {
    expect(service.multiply(3,  3)).toEqual(9);
  });

  it('CalculationService should calculate divide correctly', () => {
    expect(service.divide(10,  2)).toEqual(5);
  });

  it('CalculationService should calculate power correctly', () => {
    expect(service.power(10,  2)).toEqual(100);
  });
});
