import React from 'react';
import { SensitivityFlags } from '../types';

interface FilterSectionProps {
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  locations: string[];
  setLocations: React.Dispatch<React.SetStateAction<string[]>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  sensitivities: (keyof SensitivityFlags)[];
  setSensitivities: React.Dispatch<React.SetStateAction<(keyof SensitivityFlags)[]>>;
  handleFilterChange: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  startDate, endDate, setStartDate, setEndDate,
  locations, setLocations, categories, setCategories,
  keyword, setKeyword, sensitivities, setSensitivities,
  handleFilterChange
}) => {
  return (
    <div className="filter-section">
      <label>
        開催日範囲：
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        〜
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </label>
      {/* ... 他のフィルタリングのUIも同様に追加 ... */}
      <button onClick={handleFilterChange}>フィルターを適用</button>
    </div>
  );
}

export default FilterSection;
