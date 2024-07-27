import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, name, when})
    })
    alert("Appointment successfully scheduled")
  } catch (error) {
    alert("Could not schedule the appointment. Please try again later.")
    console.error(error)
  }
}
