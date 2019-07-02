import {
  formatJSONDate
} from '../tools/tools';

test('should get right date', () => {
  expect(formatJSONDate('2019-03-10T04:15:40.629Z')).toBe('2019-03-10 12:15:40')
})