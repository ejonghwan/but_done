import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";


type InitialState = {
  value: AuthState;
};

// 유저 상태를 정의할 타입을 만든다.
type AuthState = {
  isAuth: boolean; // 로그인이 되었는가? 
  username: string; // 유저 닉네임
  uid: string; // id
  isModerator: boolean; // 관리자 계정인가요?
};


export const fetchHoho = createAsyncThunk('hoho/hohozzz', async () => {
  let data = await fetch('http://localhost:8080/api/project')
  let posts = await data.json()
	return posts
});

export const fetchHoho2 = createAsyncThunk('hoho/hohozzz', async () => {
  let data = await fetch('http://localhost:8080/api/project')
  let posts = await data.json()
	return posts
});

const getUser = async () => {
  let data = await fetch('http://localhost:8080/api/project')
  let posts = await data.json()

  console.log('pp?', posts)
}
getUser();



// 로그인 되지 않은 상태
const initialState: InitialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } 
}



export const auth = createSlice({
  name: "auth", 
  initialState, 
  reducers: {
    logOut: () => { 
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      console.log('slice?', state, action)
      return {
        value: {
          isAuth: true, 
          username: action.payload,
          uid: "uid",
          isModerator: false,
        },
      };
    },
    
  },

  extraReducers: (builder) => {

    builder
      .addCase(fetchHoho.pending, state => {
        state.value.isAuth = false
      })
      .addCase(fetchHoho.fulfilled, state => {
        state.value.isAuth = false
      })
      .addCase(fetchHoho.rejected, state => {
        state.value.isAuth = false
      })
      // .addCase(fetchHoho2.pending, state => {
      //   state.value.isAuth = false
      // })
      // .addCase(fetchHoho2.fulfilled, state => {
      //   state.value.isAuth = false
      // })
      // .addCase(fetchHoho2.rejected, state => {
      //   state.value.isAuth = false
      // })

      console.log('aa??', builder)
  },
  // extraReducers: {
	// 	[fetchHoho.pending]: (state) => {
	// 		state.isLoading = true;
	// 	},
	// 	[fetchHoho.fulfilled]: (state, action) => {
	// 		state.isLoading = false;
	// 		state.data = action.payload;
	// 	},
	// 	[fetchHoho.rejected]: (state, action) => {
	// 		state.isLoading = false;
	// 		state.data = action.payload;
	// 	},
	// },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;