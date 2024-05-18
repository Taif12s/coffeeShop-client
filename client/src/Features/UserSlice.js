import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

//Login
export const login = createAsyncThunk(
    'users/login', //parameter name
    async (userData) =>{
        try{
            const response = await axios.post("http://127.0.0.1:3002/login",{
                remail:userData.email,
                rpassword:userData.password,
            });
            console.log(response.data.User);
            localStorage.setItem('email',JSON.stringify(response.data.User))
            return response.data.User;
        }
        catch(error){
            alert("Invalid User..")
        }
    }
);

//Regstration
export const registerUser = createAsyncThunk('users/registerUser', //parameter name
async (userData) =>{
        try{
            console.log(userData);
            const response = await axios.post("http://127.0.0.1:3002/registerUser",{
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                password: userData.password,
                pic: "user.jpg",
            });

            const user = response.data.user; //retrieve the response from the server
            return user;
        }
        catch(error){
            console.log(error);
        }
    }
);

//get user details 
export const getProfiles = createAsyncThunk("users/getProfiles", async (userData) => {
    try {
      const response = await axios.get("http://127.0.0.1:3002/getProfiles");
      return response.data.user;
    } 
    catch (error) {
      console.log(error);
    }
});

//updateProfile
export const updateUser = createAsyncThunk("users/updateUser", async (profileData) => {
    try {
        const response = await axios.post("http://127.0.0.1:3002/updateProfile", {
            uemail: profileData.pemail,
            uid: profileData.uid,
        });
        const user = response.data.user;
        return user;
    } catch (error) {
        console.error("Error updating user:", error);
    }
});


//delete user
export const delUser = createAsyncThunk("users/delUser", async (userid) => {
    try {
      await axios.delete(`http://127.0.0.1:3002/delUser/${userid}`);
      return userid;
    } catch (error) {
      console.log(error);
    }
});

const initVal = {
    user:[],
    isSuccess: false,
    isError: false,
    isLoading:false,
    error: null,
}

export const UserSlice = createSlice({
    name: "users",
    initialState:initVal,
    reducers:{ },

    extraReducers:(builder)=>{
        builder
            //login
            .addCase(login.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.user = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
            })
            .addCase(login.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })

            //register
            .addCase(registerUser.pending,(state)=>{
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled,(state,action)=>{
                state.isLoading = false;
            })
            .addCase(registerUser.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })
            
            //userProfile
            .addCase(getProfiles.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getProfiles.fulfilled, (state, action) => {
                state.status = "Sucess";
                state.user = action.payload;
            })
            .addCase(getProfiles.rejected, (state, action) => {
                state.status = "Rejected";
                state.error = action.error.message;
            })

            //updateUser
            .addCase(updateUser.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = "Success";
                const updatedUserIndex = state.user.findIndex((user) => user._id === action.payload._id);
                if (updatedUserIndex !== -1) {
                    state.user[updatedUserIndex].email = action.payload.email;
                }
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = "Rejected";
                state.error = action.error.message;
            })

            //userDel
            .addCase(delUser.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(delUser.fulfilled, (state, action) => {
                state.status = "Sucess";
                state.user = state.user.filter((user) => user._id !== action.payload);
            })
            .addCase(delUser.rejected, (state, action) => {
                state.status = "Rejected";
                state.error = action.error.message;
            });
    },
});
export default UserSlice.reducer;