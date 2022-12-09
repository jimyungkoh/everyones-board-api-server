import { SetMetadata } from '@nestjs/common';

export const TYPEORM_CUSTOM_REPOSITORY = 'TYPEORM_CUSTOM_REPOSITORY';

// eslint-disable-next-line @typescript-eslint/ban-types
export const CustomRepository = (entity: Function): ClassDecorator => {
  return SetMetadata(TYPEORM_CUSTOM_REPOSITORY, entity);
};
