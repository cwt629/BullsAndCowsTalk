import { render, screen } from '@testing-library/react';
import { compareWithAnswer } from './Answer';
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
