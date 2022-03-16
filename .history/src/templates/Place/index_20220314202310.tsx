export type PlaceTemplateProps = {
    place
}

export default function PlacesTemplate({place}:  PlaceTemplateProps) {
    return (
        <h1>{place.name}</h1>
    )
}