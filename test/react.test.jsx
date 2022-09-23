import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Calculator, numbers, operations } from '../src/Calculator'

export default Calculator
describe('Calculator', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach((item) => {
      screen.getByText(item)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })
  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach((item) => {
      screen.getByText(item)
    })
  })
  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })
  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('should render 1 in input when clinks on 1', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('should render values in input after several clicks in numbers', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    const two = screen.getByText('2')
    fireEvent.click(two)
    const three = screen.getByText('3')
    fireEvent.click(three)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })
  it('should render values in input after several clicks in numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate user input and show results on input', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)
    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equalSign = screen.getByText('=')
    fireEvent.click(equalSign)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('2')
  })
})
