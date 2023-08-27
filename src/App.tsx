import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Search from './components/Search';
import EventList from './components/EventList';  // EventListをインポート
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Event, SensitivityFlags } from './types';

function App() {
  const [eventData, setEventData] = useState<Event[] | null>(null);
  const [filteredData, setFilteredData] = useState<Event[] | null>(null);
  const [startDate, setStartDate] = useState<string>("2023-08-25");
  const [endDate, setEndDate] = useState<string>("2023-08-27");
  const [locations, setLocations] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [sensitivities, setSensitivities] = useState<string[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('./event.json');
        setEventData(response.data);
      } catch (error) {
        console.error("Error fetching the JSON eventData:", error);
      }
    };
    fetchEventData();
  }, []);

  useEffect(() => {
    if (eventData) {
      // Implement the filtering logic here
      const filtered = eventData.filter(event => {
        // Implement your filtering conditions
        return true; // This is a placeholder
      });
      setFilteredData(filtered);
    }
  }, [eventData, startDate, endDate, locations, categories, keyword, sensitivities]);

  const handleFilterChange = () => {
    if (!eventData) return;

    let filteredData = [...eventData];

    // 1. 開催日範囲に基づくフィルタリング
    filteredData = filteredData.filter(event => {
      const eventStartDate = new Date(event.開始日);
      return eventStartDate >= new Date(startDate) && eventStartDate <= new Date(endDate);
    });

    // 2. 開催場所に基づくフィルタリング
    if (locations.length) {
      filteredData = filteredData.filter(event => locations.includes(event.市区町村名));
    }

    // 3. カテゴリーに基づくフィルタリング
    if (categories.length) {
      filteredData = filteredData.filter(event => categories.includes(event.カテゴリー));
    }

    // 4. キーワードに基づくフィルタリング
    if (keyword) {
      filteredData = filteredData.filter(event => event.説明.includes(keyword));
    }

    // 5. 感覚過敏タグに基づくフィルタリング
    if (sensitivities.length) {
      filteredData = filteredData.filter(event => {
        return sensitivities.every(sensitivity => event.感覚過敏[sensitivity as keyof SensitivityFlags]);
      });
    }

    // フィルタリングされたデータを設定
    setFilteredData(filteredData);
  };
  // チェックボックスの変更をハンドルする関数
  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>, setState: React.Dispatch<React.SetStateAction<string[]>>) {
    if (e.target.checked) {
      setState(prev => [...prev, e.target.value]);
    } else {
      setState(prev => prev.filter(item => item !== e.target.value));
    }
  }
  return (
    <>
      <div className="App">
        <Header />
        <Search />
      </div>
      <div className="filter-section">
        {/* 開催日範囲のフィルタリング */}
        <label>
          開催日範囲：
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          〜
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </label><br></br>

        <label>
          開催場所：
          {eventData && [...new Set(eventData.map(event => event.市区町村名))].map(location => (
            <div key={location}>
              <input
                type="checkbox"
                value={location}
                onChange={e => handleCheckboxChange(e, setLocations)}
              />
              {location}
            </div>
          ))}
        </label>

        <label>
          カテゴリー：
          {eventData && [...new Set(eventData.map(event => event.カテゴリー))].map(category => (
            <div key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={e => handleCheckboxChange(e, setCategories)}
              />
              {category}
            </div>
          ))}
        </label>

        {/* キーワードのフィルタリング */}
        <label>
          キーワード：
          <input
            type="text"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </label><br></br>

        <label>
          感覚過敏タグ：
          {eventData && [...new Set(eventData.flatMap(event => Object.keys(event.感覚過敏)))].map(sensitivity => (
            <div key={sensitivity}>
              <input
                type="checkbox"
                value={sensitivity}
                onChange={e => handleCheckboxChange(e, setSensitivities)}
              />
              {sensitivity}
            </div>
          ))}
        </label>

        {/* フィルタリングを適用するボタン */}
        <button onClick={handleFilterChange}>フィルターを適用</button>
      </div>

      {filteredData ? <EventList events={filteredData} /> : <div>Loading...</div>}
    </>
  );
}

export default App;
