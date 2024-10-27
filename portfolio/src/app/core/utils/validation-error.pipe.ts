import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationError',
  standalone: true,
  pure: true,
})
export class ValidationErrorPipe implements PipeTransform {
  ERROR_MESSAGE: Record<string, string> = {
    required: 'This field is required.',
    email: 'This field is not a correct email.',
    unknown: "There's something wrong.",
  };

  transform(errors: ValidationErrors | null | undefined): string {
    return errors
      ? Object.entries(errors)
          .map(([key, value]) =>
            value ? this.ERROR_MESSAGE[key] : this.ERROR_MESSAGE['unknown']
          )
          .join()
      : '';
  }
}
