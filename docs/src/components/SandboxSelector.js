import React, { useState } from 'react';

const SandboxSelector = () => {
  const [selectedOption, setSelectedOption] = useState(1); // Default selected option
  
  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  const link = `https://console.cloud.google.com/storage/browser/qmul-production-sandbox-${selectedOption}_greenuploads`;

  return (
    <div style={{ padding: '0.5em', border: '1px solid #000', borderRadius: '0.1rem' }}>
      <select
        style={{ display: 'block' }}
        onChange={handleOptionChange}
        value={selectedOption}
      >
        <option value="1">Sandbox 1 - QMUL+WSI Core Team Desktop</option>
        <option value="2">Sandbox 2 - External Academic Desktop</option>
        <option value="3">Sandbox 3 - GSK Desktop</option>
        <option value="4">Sandbox 4 - BMS Desktop</option>
        <option value="5">Sandbox 5 - MSD Desktop</option>
        <option value="6">Sandbox 6 - Takeda Desktop</option>
        <option value="7">Sandbox 7 - Pfizer Desktop</option>
        <option value="8">Sandbox 8 - S00050_FFAIR-PRS Desktop</option>
        <option value="9">Sandbox 9 - Maze Therapeutics Desktop</option>
        <option value="10">Sandbox 10 - Novo Nordisk Desktop</option>
        <option value="11">Sandbox 11 - University of Exeter</option>
        <option value="12">Sandbox 12 - Genomics PLC</option>
        <option value="13">Sandbox 13 - AstraZeneca</option>
        <option value="14">Sandbox 14 - External Academic, Consortium access</option>
        <option value="15">Sandbox 15 - 5 Prime Sciences</option>
        <option value="16">Sandbox 16 - Sandbox 16</option>
        <option value="17">Sandbox 17 - Academic, NHS Digital access</option>
      </select>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  );
};

export default SandboxSelector;