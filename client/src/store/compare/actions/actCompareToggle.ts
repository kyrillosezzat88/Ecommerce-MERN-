import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
import { toast } from "react-toastify";

const actCompareToggle = createAsyncThunk(
  "compares/actCompareToggle",
  async (data: { id: number; name: string }, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    const { id, name } = data;
    try {
      const isRecordExist = await axios.get(
        `/compares?userId=1&productId=${id}`
      );
      console.log({ CompareisRecordExist: isRecordExist });

      if (isRecordExist.data.length > 0) {
        const CompareId = isRecordExist.data[0].id;
        await axios.delete(`/compares/${CompareId}`);
        toast(`${name} has been removed from compare successfully`, {
          type: "error",
        });
        return { type: "remove", id };
      } else {
        await axios.post(`/compares`, { userId: 1, productId: id });
        toast(`${name} has been added to compare successfully`, {
          type: "success",
        });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actCompareToggle;
