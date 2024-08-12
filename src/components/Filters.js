import React from 'react';
import { Select, DatePicker } from 'antd';

const { Option } = Select;

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Select
        placeholder="Select Source"
        style={{ width: 200, marginRight: 10 }}
        onChange={(value) => onFilterChange('source', value)}
      >
        <Option value="bbc-news">BBC News</Option>
        <Option value="the-verge">The Verge</Option>
        <Option value="abc-news">ABC NEWS</Option>
      </Select>

      <Select
        placeholder="Select Category"
        style={{ width: 200, marginRight: 10 }}
        onChange={(value) => onFilterChange('category', value)}
      >
        <Option value="general">General</Option>
        <Option value="business">Business</Option>
        <Option value="entertainment">Entertainment</Option>
        <Option value="health">Health</Option>
        <Option value="science">Science</Option>
        <Option value="technology">Technology</Option>
        <Option value="sports">Sports</Option>
      </Select>

      <DatePicker
        placeholder="Select Date"
        onChange={(date, dateString) => onFilterChange('date', dateString)}
      />
    </div>
  );
};

export default Filters;
