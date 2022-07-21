"use strict";
function AbortSignal() {
    return new AbortController();
}
function timeOutAbort(outTime) {
    const controller = AbortSignal();
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, outTime);
    return { signal: controller.signal, id: timeoutId };
}
function queryParams(data) {
    let _result = [];
    for (let key in data) {
        let value = data[key];
        if (['', undefined, null].includes(value)) {
            continue;
        }
        if (value.constructor === Array) {
            value.forEach((_value) => {
                _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value));
            });
        } else {
            _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return _result.length ? _result.join('&') : '';
}
/**
 * 请求处理
 * @param url
 * @param sendData
 */
function fetchPromise(url, sendData) {
    return fetch(url, sendData)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) return res;
            throw new Error(res.statusText);
        })
        .then(async (res) => {
            switch (sendData.type) {
                case "TEXT":
                    return sendData.isHeaders
                        ? {
                            headers: res.headers,
                            data: await res.text(),
                        }
                        : await res.text();
                case "JSON":
                    return sendData.isHeaders
                        ? {
                            headers: res.headers,
                            data: await res.json(),
                        }
                        : await res.json();
                case "BUFFER":
                    return sendData.isHeaders
                        ? {
                            headers: res.headers,
                            data: await res.arrayBuffer(),
                        }
                        : await res.arrayBuffer();
                case "BLOB":
                    return sendData.isHeaders
                        ? {
                            headers: res.headers,
                            data: await res.blob(),
                        }
                        : await res.blob();
            }
        });
}

/**
 * http请求
 * @param url
 * @param param
 */
export async function net(url, param) {
    let abort = null;
    param && !param.signal && (abort = timeOutAbort(param.timeout || 3000))
    let sendData = {
        isHeaders: param && param.isHeaders,
        isStringify: param && param.isStringify,
        headers: new Headers(
            Object.assign(
                {
                    "content-type": "application/json;charset=utf-8",
                },
                param ? param.headers : {}
            )
        ),
        type: param?.type || "JSON",
        method: param?.method || "GET",
        signal: abort ? abort.signal : param?.signal,

    };
    if (param?.data) {
        if (sendData.method === "GET") url = `${url}?${queryParams(param?.data)}`;
        else
            sendData.body = sendData.isStringify
                ? queryParams(param?.data)
                : JSON.stringify(param?.data);
    }
    return fetchPromise(url, sendData).then((req) => {
        return req;
    });
}
