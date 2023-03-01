const API_END_POINT = 'https://cnu1.todo.edu-api.programmers.co.kr/test'

export const request = async (url, options) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, options)
        
        if (!res.ok) {
            throw new Error('API 호출 실패')
        }

        return await res.json()
    } catch (e) {
        alert(e.message)
    }
}