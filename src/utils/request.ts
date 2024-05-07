const com_get = (url: string, params: any) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
        })
        .then((res) => res.json())
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

const com_post = (url: string, params: any) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
        })
        .then((res) => res.json())
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

export {
    com_get,
    com_post
}