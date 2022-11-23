export const healthy = async (req, res) => {
  try {
    res.json({
      status: "200",
      text: "healthy",
    });
  } catch (error) {
    throw error;
  }
};

