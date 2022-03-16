import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
    it('should render wihtout any marker', () => {
        render(<Map />)
        
       expect(screen.getByRole('link', {
            name: /a js library for interactive maps/i
          })).toBeInTheDocument()
    })

    it('should render with the marker in correct place', () => {
        const place = [
            id: '1';
            name: ;
            slug: string;
            location: {
              latitude: number;
              longitude: number;
            };
        ]

        render(<Map places= {[place]}/>)

        expect(screen.)
    })
} )