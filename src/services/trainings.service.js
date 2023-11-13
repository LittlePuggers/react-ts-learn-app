import { axiosInstance } from "./apiRoutes";

export const getTrainings = async () => {
  try {
    const result = await axiosInstance.get("/api/trainings");
    const trainings = result.data.trainings;
    // console.log("trainings data:", trainings);
    return trainings;
  } catch (error) {
    console.error("Error during getTrainings:", error);
    // throw error;
  }
};

export const getTrainers = async (studentEmail) => {
  try {
    const result = await axiosInstance.get(
      `/api/trainings/trainers/${studentEmail}`
    );
    const trainers = result.data.trainers;
    return trainers;
  } catch (error) {
    console.error("Error during getTrainers:", error);
  }
};
