const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f485694a7564adde0d932371919c61de',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;