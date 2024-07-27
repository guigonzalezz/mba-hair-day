import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE"
    })
  } catch (error) {
    console.error(error)
    alert("Could not cancel the appointment")
  }
}
