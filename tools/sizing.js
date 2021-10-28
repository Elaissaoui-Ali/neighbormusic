const getNewHeight = (width, height, newWidth) => {
    const ratio = height / width;
    return ratio * newWidth
}

export {getNewHeight};
