import React, { useState, useEffect } from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';
import CONFIG from '../../config';

const LocationIQAddressInput = ({ onSelect }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const LOCATION_KEY = CONFIG.LOCATION_IQ_KEY;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (input.length < 3) return;

      const response = await fetch(
        `https://us1.locationiq.com/v1/autocomplete?key=${LOCATION_KEY}&q=${input}&format=json`
      );
      const data = await response.json();
      setSuggestions(data);
    }, 1000); // 1 second debounce

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  const handleSelect = (item) => {
    setInput(`${item.address.house_number} ${item.address.road}`);
    setSuggestions([]);
    onSelect({
      street: `${item.address.house_number} ${item.address.road || ""}`,
      city: item.address.city || item.address.town || "",
      suburb: item.address.suburb || "",
      postcode: item.address.postcode || "",
      latitude: item.lat,
      longitude: item.lon,
      full: item
    });
  };

  return (
    <>
      <Form.Control
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search your address"
      />
      {suggestions.length > 0 && (
        <ListGroup className="position-absolute z-3">
          {suggestions.map((item, idx) => (
            <ListGroup.Item key={idx} action onClick={() => handleSelect(item)}>
              {item.display_name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default LocationIQAddressInput;
