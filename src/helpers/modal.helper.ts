export const openModal = (modalName: string) => {
  try {
    document.querySelector(`#${modalName}`).classList.add('show');
  } catch (error) {
    console.error(error.message);
  }
};

export const closeModal = (modalName: string) => {
  try {
    document.querySelector(`#${modalName}`).classList.remove('show');
  } catch (error) {
    console.error(error.message);
  }
};
