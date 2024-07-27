import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    
    const data = await response.json();

    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    alert("Could not fetch the schedules for the selected day");
    console.error(error);
  }
}
