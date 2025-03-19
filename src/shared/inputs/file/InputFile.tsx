import {useModal} from "@/shared/ui";

type Props = {
    name?: string;
    value?: FileList | null;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    callback?: ()=>void;
}

export function InputFile({name, callback,onChange}:Props) {

    const { callModal } = useModal();
    const validateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 파일 리스트가 없으면 종료
        if (!e.target.files) return;
        const files = e.target.files; // FileList 객체
        const invalidExtensions = ['java', 'jsp', 'exe', 'bat', 'zip', 'asp', 'aspx', 'com', 'dll', 'sys', 'jar', 'js', 'vb', 'vbs']; // 제외하는 확장자 배열

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileExtension = file.name.split('.').pop()?.toLowerCase(); // 파일 확장자

            // 제외 조건에 해당하면 알림 후 파일 선택 초기화
            if (fileExtension && invalidExtensions.includes(fileExtension)) {
                callModal({message: `.${fileExtension} 파일은 업로드할 수 없습니다.`});

                e.target.value = ""; // 파일 선택 초기화
                return;
            }

            if (onChange){
                onChange(e);
            }

        }
    };

    return (
        <input
            type="file"
            name={name}
            onChange={validateFile}
        />
    )
}