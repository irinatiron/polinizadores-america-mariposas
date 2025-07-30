import { beforeEach, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

//testear navbar e hipervínculos
beforeEach(() => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    )
})

test('render the logo link to home', () => {
    //busca la img por su alt
    const logoImg = screen.getByAltText(/blue butterfly/i)

    //verifica que esté en el documento
    expect(logoImg).toBeInTheDocument()

    //El contenedor padre debería ser el <a href="/"
    const link = logoImg.closest('a')//porque testing-library devuelve el <img>, no el <link>. Usamos .closest('a') para subir al nodo padre que es <a> generado por React
    expect(link).toHaveAttribute('href', '/')
})

test('render nav title', () => {
    const titleLink = screen.getByRole('link', { name: /Mariposas de América/i})
    expect(titleLink).toHaveAttribute('href', '/')
})

test('render the menu toggle button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('render home link', () => {
    const iniLink = screen.getByText(/Inicio/i)
    expect(iniLink).toHaveAttribute('href', '/')
})

test('render butterfly cards link', () => {
    const iniLink = screen.getByText(/Fichas Mariposas/i)
    expect(iniLink).toHaveAttribute('href', '/fichas-mariposas')
})

test('render creators link', () => {
    const iniLink = screen.getByText(/Creadoras/i)
    expect(iniLink).toHaveAttribute('href', '/creadoras')
})

test('render form link', () => {
    const iniLink = screen.getByText(/Formulario/i)
    expect(iniLink).toHaveAttribute('href', '/formulario')
})