const API_BASE = '/api';

export const registerUser = async (userData) => {
    const res = await fetch(`${API_BASE}/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });

    const text = await res.text();
    let data = {};
    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = { message: text };
        }
    }

    console.log("[registerUser] status:", res.status, "body:", data);
    if (!res.ok) {
        throw new Error(data.message || data.error || `Request failed with status ${res.status}`);
    }
    return data;
};