import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getData", async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  return res.data;
});

export const weatherSlice = createSlice({
  name: "data",
  initialState: {
    weather: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      const list = action.payload.list.map((item) => {
        item.dt_date = item.dt_txt.slice(0, 10);
        return item;
      });

      state.weather = Object.values(
        list.reduce((acc, obj) => {
          const key = obj["dt_date"];
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
        }, {})
      ).slice(0, 5);
    });
  },
});
export default weatherSlice.reducer;
