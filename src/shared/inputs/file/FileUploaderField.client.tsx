// components/FileUploadField.tsx
import React, { useCallback } from 'react';

interface FileUploadFieldProps {
    value: File[] | null;
    onChange: (files: File[] | null) => void;
    maxFiles?: number;
}

export const FileUploadField: React.FC<FileUploadFieldProps> = ({ value, onChange, maxFiles = 3 }) => {
    const files = value || [];
    const totalFiles = files.length;
    const remainingSlots = Math.max(0, maxFiles - totalFiles);

    // 파일 선택 핸들러
    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList) return;

        const newFilesArray = Array.from(fileList).slice(0, remainingSlots);

        if (newFilesArray.length > 0) {
            const updatedFiles = [...files, ...newFilesArray];
            onChange(updatedFiles);
        }

        // input 값 초기화 (동일 파일 재선택 가능하도록)
        event.target.value = '';
    }, [files, onChange, remainingSlots]);

    // 파일 삭제 핸들러
    const removeFile = useCallback((index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        onChange(newFiles.length > 0 ? newFiles : null);
    }, [files, onChange]);

    // 모든 파일 삭제
    const clearFiles = useCallback(() => {
        onChange(null);
    }, [onChange]);

    return (
        <div className="file-upload-field">
            <div className="file-input-container">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    disabled={remainingSlots <= 0}
                    className="file-input"
                />
                <p className="file-status">
                    최대 {maxFiles}개 파일, 남은 슬롯: {remainingSlots}
                </p>
            </div>

            {files.length > 0 && (
                <div className="file-list">
                    <ul>
                        {files.map((file, index) => (
                            <li key={index} className="file-item">
                                <span className="file-name">{file.name}</span>
                                <span className="file-size">({(file.size / 1024).toFixed(1)} KB)</span>
                                <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="remove-btn"
                                >
                                    삭제
                                </button>
                            </li>
                        ))}
                    </ul>

                    {files.length > 1 && (
                        <button
                            type="button"
                            onClick={clearFiles}
                            className="clear-all-btn"
                        >
                            모두 삭제
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

