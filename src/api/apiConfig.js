const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1fbc5032c3a967de42cb24d2ba8cf6eb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;