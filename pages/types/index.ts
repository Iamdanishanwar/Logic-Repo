export interface ICategory {
    id: number,
    attributes: ICategoryAttribute;
}
export interface ICollectionResponse<T> {
    data: T;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export type TCategory<T> = {
    data: T;
}
export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
export interface IResourceMeta {
    pagination: IPagination;
}
export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta;
}

// aritcle
export interface IImageData {
    data: {
        attributes:{
            url: string;
            formats: {
                small:{
                    url: string;
                }
            }
        }
    }
}
export interface IAuthor {
    data: {
        attributes:{
            firstName: string;
            lastName: string;
            avatar:{
                data: {
                    attributes:{
                        formats:{
                            thumbnail:{
                                url: string;
                            }
                        }
                    }
                }
            }
        }
    }
}
export interface IArticleAttribute {
    Title: string;
    body: string;
    Slug: string;
    Image: IImageData;
    createdAt: string;
    author: IAuthor;
}
export interface IArticle {
    id: number;
    attributes:IArticleAttribute
}