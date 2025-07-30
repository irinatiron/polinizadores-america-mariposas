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

// test('renders navbar logo', () => {
// const logoNav = screen.getByText('class') falta como seleccionar una img para el logo
// expect(logoNav).toBeDefined()
// expect(logoNav).toHaveAttribute('href', '/')
// })

test('renders nav title', () => {
    const titleLink = screen.getByRole('link',{name: /Mariposas de América/i})
    expect(titleLink).toHaveAttribute('href', '/')
})

