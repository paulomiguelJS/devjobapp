import { SearchBoxContainer, InputContainer, Button } from "./styles";

export default function MainSearch() {
  return (
    <SearchBoxContainer>
      <InputContainer>
        <img
          src="/path-to-search-icon.png"
          alt="Search Icon - Magnifying Glass"
        />
        <label htmlFor="filter" placeholder=" Filter by title, companies, expertise…" /> 
        <input type="text" id="filter" placeholder="Filter" />
      </InputContainer>

      <InputContainer>
        <img src="/path-to-location-icon.png" alt="Location Icon - Map" />
        <label htmlFor="locationFilter" placeholder="Filter by location</label>"/>
        <input type="text" id="locationFilter" placeholder="Location Filter" />
      </InputContainer>

      <InputContainer>
        <img src="/path-to-checkbox-icon.png" alt="Checkbox Icon - Checkbox" />
        <label htmlFor="checkbox">Full Time Only</label>
        <input type="checkbox" id="checkbox" />
      </InputContainer>

      <Button type="submit">Search</Button>
    </SearchBoxContainer>
  );
}
