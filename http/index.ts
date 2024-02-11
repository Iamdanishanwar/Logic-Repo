import axios from 'axios';
// http://localhost:1337
// BACKEND_API_KEY=2409338209663fa1fc5ac86779bfebf0b6d615bee02a0cea082c6377e2cd7bb4e91c6b71d9efdc094968570e5931494f2a5ca79a125507ebec49ae9e2b35491f6ae74a800313a43441816d3faba787507316b8573c9067f7ac390970dd7dd17cd86d7fa5d779938a134c4b3693cc45b0c6b906b11103d283569accad14fb3d5b
const api = axios.create({
    baseURL: 'http://localhost:1337',
    headers:{
        Authorization:`Bearer 2409338209663fa1fc5ac86779bfebf0b6d615bee02a0cea082c6377e2cd7bb4e91c6b71d9efdc094968570e5931494f2a5ca79a125507ebec49ae9e2b35491f6ae74a800313a43441816d3faba787507316b8573c9067f7ac390970dd7dd17cd86d7fa5d779938a134c4b3693cc45b0c6b906b11103d283569accad14fb3d5b`,

    }
});

// categories

export const fetchCategories = async () => api.get('/api/categories');

export const fetchArticles = async () => api.get('/api/articles');