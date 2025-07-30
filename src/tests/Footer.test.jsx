import { beforeEach, expect, test } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import Footer from '../components/Footer'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

//testear footer 
beforeEach(() => {//Antes de cada test haz esto
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    )
})

test('render footer components', () => {
    const footer = screen.getByTestId('main-footer')
    expect(footer).toBeInTheDocument()

    //H2 dentro del footer
    const heading = within(footer).getByRole('heading', {
        name: /Mariposas de América/i,
        level: 2, //h2
    })
    expect(heading).toBeInTheDocument()

    //Texto de descripción
    const paragraph = within(footer).getByText(/Proyecto desarrollado como/i)
    expect(paragraph).toBeInTheDocument()

    //Enlace a Factoría F5
    const factoriaLink = within(footer).getByRole('link', {
        name: /Visitar sitio web de Factoría F5/i,
    })
    expect(factoriaLink).toHaveAttribute('href', 'https://factoriaf5.org/')
    expect(factoriaLink).toHaveAttribute('target', '_blank')

    //Logo de Factoriía F5
    const logoFactoria = within(footer).getByAltText(/Logo de Factoría F5/i)
    expect(logoFactoria).toBeInTheDocument()

    //paragraph footer-copyright
    const paragraphRights = within(footer).getByText(/Mariposas de América. Todos los derechos reservados./i)
    expect(paragraph).toBeInTheDocument()
})
