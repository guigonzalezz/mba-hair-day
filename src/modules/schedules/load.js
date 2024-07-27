import { scheduleFetchByDay } from "../../services/achedule-fetch-by-day";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "./show.js";

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
  const date = selectedDate.value

  const dailySchedules = await scheduleFetchByDay({date})

  schedulesShow({dailySchedules})

  hoursLoad({date, dailySchedules})
}