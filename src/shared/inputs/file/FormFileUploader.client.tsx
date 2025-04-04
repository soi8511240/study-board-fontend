import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import {FileUploadField} from "./FileUploaderField.client";

interface FormFileUploaderProps<T extends FieldValues = FieldValues> {
    name: FieldPath<T>;
    control: Control<T>;
    maxFiles?: number;
    label?: string;
}

export const FormFileUploader = <T extends FieldValues = FieldValues>
({ name, control, maxFiles = 5, label = '파일 첨부' }: FormFileUploaderProps<T>) => {
    return (
        <div className="form-file-uploader">
            {label && <label htmlFor={name.toString()}>{label}</label>}

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FileUploadField
                        value={field.value}
                        onChange={field.onChange}
                        maxFiles={maxFiles}
                    />
                )}
            />
        </div>
    );
};

