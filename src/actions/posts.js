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

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = { type: "DELETE", payload: id };
        dispatch(action);
    } catch (error) {
        console.log("deletePost error = ", error);
    }
};

// my likePost

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        const action = { type: "LIKE", payload: data };
        dispatch(action);
    } catch (error) {
        console.log("like error = ", error);
    }
};
