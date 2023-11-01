import { IArtwork } from "./Artwork"
import { IConfig } from "./Config"
import { IPagination } from "./Pagination"

export interface IArtworkResponse  {
    config: IConfig,
    pagination: IPagination,
    data: IArtwork[]
}