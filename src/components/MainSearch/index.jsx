import {
  SearchBoxContainer,
  InputContainer,
  SearchContainer,
  Button,
} from "./styles";
import iconSearch from "../../assets/images/desktop/icon-search.svg";
import iconLocation from "../../assets/images/desktop/icon-location.svg";

export default function MainSearch() {
  return (
    <SearchBoxContainer>
      <InputContainer >
        <label htmlFor="filter"></label>
        <img src={iconSearch} alt="Search Icon - Magnifying Glass" />
        <input
          style={{ width: "450px" }}
          type="text"
          id="filter"
          placeholder="Filter by title, companies, expertise…"
        />
      </InputContainer>

      <InputContainer >
        <label
          htmlFor="locationFilter"
          placeholder="Filter by location"
        ></label>
        <img src={iconLocation} alt="Location Icon - Map" />
        <input type="text" id="locationFilter" placeholder="Location Filter" />
      </InputContainer>

      <SearchContainer >
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Full Time Only</label>
        <Button type="submit">Search</Button>
      </SearchContainer>
    </SearchBoxContainer>
  );
}
