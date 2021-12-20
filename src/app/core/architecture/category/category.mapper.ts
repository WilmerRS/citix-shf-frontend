import { CategoryModel } from 'src/app/core/domain/category.model';
import { Mapper } from "../_base.mapper";
import { CategoryEntity } from "./category.entity";

export class CategoryRepositoryMapper extends Mapper <CategoryEntity, CategoryModel> {
    mapFrom(param: CategoryEntity): CategoryModel {
        return {
            id: param.id,
            name: param.name,
            picture: param.picture,
            selected: false
        };
    }

    mapTo(param: CategoryModel): CategoryEntity {
        return {
          id: param.id,
          name: param.name,
          picture: param.picture,
        };
    }
}
