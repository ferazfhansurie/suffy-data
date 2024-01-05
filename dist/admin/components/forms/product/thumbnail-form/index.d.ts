import { NestedForm } from "../../../../utils/nested-form";
type FormImage = {
    url: string;
    name?: string;
    size?: number;
    nativeFile?: File;
};
export type ThumbnailFormType = {
    images: FormImage[];
};
type Props = {
    form: NestedForm<ThumbnailFormType>;
};
declare const ThumbnailForm: ({ form }: Props) => import("react/jsx-runtime").JSX.Element;
export default ThumbnailForm;
