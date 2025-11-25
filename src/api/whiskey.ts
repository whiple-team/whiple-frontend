import api from "./axiosInstance";

// 타입 정의
export interface Whiskey {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

// 검색 API 호출 아직 백엔드 없어서 안됨 ㅜ
export const searchWhiskey = async (keyword: string) => {
    const response = await api.get(`/whiskey/search`, {
        params: { keyword },
    });
    return response.data;
};

