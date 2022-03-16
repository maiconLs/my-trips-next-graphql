import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
    it('should render wihtout any marker', () => {
        render(<Map />)
        
        screen.logTestingPlaygroundURL()
    })

    it('should render with the marker in correct place', () => {

    })
} )