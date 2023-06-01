import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: "FETCH_ALL", payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        const action = { type: "CREATE", payload: data };
        dispatch(action);
    } catch (error) {
        console.log("createPost error = ", error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        const action = { type: "UPDATAE", payload: data };
        dispatch(action);
    } catch (error) {
        console.log("updatePost error = ", error);
    }
};
