import { render, screen } from '@testing-library/react';
import { compareWithAnswer, getCompareResult } from './Answer';
import { checkIntermediateInput, checkSubmittedInput } from './validate';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('숫자야구 정답 판별 테스트', () => {
  const answer = [1, 2, 3];

  test('1스트라이크', () => {
    const input = "145";
    expect(compareWithAnswer(input, answer)).toEqual({ strike: 1, ball: 0 });
  })

  test('1볼', () => {
    const input = "245";
    expect(compareWithAnswer(input, answer)).toEqual({ strike: 0, ball: 1 });
  })

  test('1스트라이크 1볼', () => {
    const input = "142";
    expect(compareWithAnswer(input, answer)).toEqual({ strike: 1, ball: 1 });
  })

  test('1스트라이크 2볼', () => {
    const input = "132";
    expect(compareWithAnswer(input, answer)).toEqual({ strike: 1, ball: 2 });
  })

  test('아웃', () => {
    const input = "456";
    expect(compareWithAnswer(input, answer)).toEqual({ strike: 0, ball: 0 });
  })
})

describe('결과 출력 테스트', () => {
  const answer = [1, 2, 3];

  test('1스트라이크', () => {
    const input = "145";
    expect(getCompareResult(input, answer)).toBe("1 Strike");
  })

  test('1볼', () => {
    const input = "345";
    expect(getCompareResult(input, answer)).toBe("1 Ball");
  })

  test('2볼', () => {
    const input = "234";
    expect(getCompareResult(input, answer)).toBe("2 Ball");
  })

  test('1스트라이크 1볼', () => {
    const input = "134";
    expect(getCompareResult(input, answer)).toBe("1 Strike, 1 Ball");
  })

  test('아웃', () => {
    const input = "789";
    expect(getCompareResult(input, answer)).toBe("Out");
  })
})

describe('입력 중간점검 테스트', () => {

  test('0으로 시작', () => {
    const input = "012";
    expect(checkIntermediateInput(input)).toBe("zerostart");
  })

  test('숫자가 아닌 입력', () => {
    const input = "1a";
    expect(checkIntermediateInput(input)).toBe("number");
  })

  test('중복되는 자리수', () => {
    const input = "121";
    expect(checkIntermediateInput(input)).toBe("redundancy");
  })

  test('제대로 된 입력', () => {
    const input = "123";
    expect(checkIntermediateInput(input)).toBe("none");
  })
})

describe('입력 최종점검 테스트', () => {
  test('길이가 3이 아니다', () => {
    const input = "12";
    expect(checkSubmittedInput(input)).toBe("length");
  })

  test('길이가 3인 올바른 입력', () => {
    const input = "123";
    expect(checkSubmittedInput(input)).toBe("none");
  })
})