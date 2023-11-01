export interface IPagination {
    "total": number,
    "limit": number,
    "offset": number,
    "total_pages": number,
    "current_page": number,
    "prev_url": string | null,
    "next_url": string
}