import { SearchBoxContainer, InputContainer, Button } from "./styles";
import iconSearch from "../../assets/images/desktop/icon-search.svg";
import iconLocation from "../../assets/images/desktop/icon-location.svg";

export default function MainSearch() {
  return (
    <SearchBoxContainer>
      <InputContainer>
        <img src={iconSearch} alt="Search Icon - Magnifying Glass" />
        <label
          htmlFor="filter"
          placeholder=" Filter by title, companies, expertise…"
        />
        <input type="text" id="filter" placeholder="Filter" />
      </InputContainer>

      <InputContainer>
        <img src={iconLocation} alt="Location Icon - Map" />
        <label
          htmlFor="locationFilter"
          placeholder="Filter by location</label>"
        />
        <input type="text" id="locationFilter" placeholder="Location Filter" />
      </InputContainer>

      <InputContainer>
        <label htmlFor="checkbox">Full Time Only</label>
        <input type="checkbox" id="checkbox" />
      </InputContainer>

      <Button type="submit">Search</Button>
    </SearchBoxContainer>
  );
}
