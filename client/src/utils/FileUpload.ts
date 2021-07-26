import { forEach } from 'lodash';

export const uploadFiles = (files: any, table?: string, table_document_type?: string,
    reference?: any, allowed_types: string[] = ['image/jpeg', 'image/jpg', 'image/png', 'application/vnd.android.package-archive'], allowed_max_size: number = 60000000) => {
    // if (!files.length) {
    //     return {
    //         error: 1,
    //         data: "No files selected"
    //     }
    // }


    let error_flag = false
    let error_message = ""

    let formData: any = new FormData();

    forEach(files, (file: any, index: any) => {
        if (file.size > allowed_max_size) {
            error_flag = true
            error_message = "Check file size of " + file.name
            return
        }

        if (!allowed_types.includes(file.type.toLowerCase())) {
            error_flag = true
            error_message = "Check file type of " + file.name
            return
        }

        let fileName = index === 0 ? 'apk' : index === 1 ? 'icon' : 'images'

        console.log("FILE ", `file${index}`, file)
        formData.append(`${fileName}`, file);
    })


    console.log(files)
    console.log(formData)
    
    for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }

    table && formData.append('table', table)
    table_document_type && formData.append('table_document_type', table_document_type)
    reference && formData.append('reference', reference)

    if (error_flag) {
        return {
            error: 1,
            data: error_message
        }
    }

    return {
        error: 0,
        data: formData
    }

}