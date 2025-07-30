import { beforeEach, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

//testear footer 
beforeEach(() => {//Antes de cada test haz esto
    render(<Footer />)
})

test('renders Footer component', () => {
    //Busca el footer por su rol semántico
    const footerElement = screen.getByRole('contentinfo')
    // expect(footerElement).toHaveClass('footer')
    expect(footerElement).toBeDefined()
})

test('contains the logo class .footer-logo', () => {
    const pFooterLogo = screen.getByText(/Mariposas de América/i)
    expect(pFooterLogo).toBeDefined()
})

test('contains text description with the class footer-text', () => {
    const pFooterText = screen.getByText(/Proyecto desarrollado con /i)
    expect(pFooterText).toBeDefined
})

test('contains the link with class .footer-brand', () => {
    const linkElemento = screen.getByText(/Factoría F5/i)
    expect(linkElemento).toBeDefined()
})
