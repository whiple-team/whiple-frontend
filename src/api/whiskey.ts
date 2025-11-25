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

// 검색 API 호출
export const searchWhiskey = async (keyword: string) => {
    //스프링부트 주소 -> 
    const response = await api.get(`/whiskey/search`, {
        params: { keyword },
    });
    return response.data;
};

