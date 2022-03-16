import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
    it('should render wihtout any marker', () => {
        render(<Map />)
        
        screen.getByRole('link', {
            name: /a js library for interactive maps/i
          })
    })

    it('should render with the marker in correct place', () => {

    })
} )