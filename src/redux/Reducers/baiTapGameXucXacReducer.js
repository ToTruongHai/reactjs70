const defaultState = {
  banChon: true, //true tài false xỉu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    {
      soDiem: 1,
      img: "./img/gameXucXac/1.png",
    },
    {
      soDiem: 2,
      img: "./img/gameXucXac/2.png",
    },
    {
      soDiem: 3,
      img: "./img/gameXucXac/3.png",
    },
  ],
};

export const BaiTapGameXucXacReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;

      return { ...state };
    }

    case "PLAY_GAME": {
      let mangXucXacNN = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = {
          soDiem: soNgauNhien,
          img: `./img/gameXucXac/${soNgauNhien}.png`,
        };
        mangXucXacNN.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNN;

      let tongDiem = state.mangXucXac.reduce((diem, xucXac, index) => {
        return (diem += xucXac.soDiem);
      }, 0);

      console.log("sda: ", tongDiem )
      if (
        (tongDiem <= 11 && state.banChon == false) ||
        (tongDiem > 11 && state.banChon == true)
      ) {
          //thắng thì tăng số bàn thắng 1;
          state.soBanThang += 1;
      }

      state.tongSoBanChoi += 1;

      return { ...state };
    }

    default:
      return state;
  }
};
