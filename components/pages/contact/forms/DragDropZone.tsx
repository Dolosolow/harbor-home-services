import { Flex, Center, Text } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useState, useCallback, useEffect } from "react";

import { CloseIcon } from "@/components/icons/CloseIcon";

const DragDropPreview = (props: { imgFiles: any; onClick: (index: number) => void }) => {
  const { imgFiles, onClick } = props;

  return (
    <Flex w="100%" mb={3}>
      {imgFiles.map((file: any, idx: number) => (
        <Flex
          key={idx}
          mr={3}
          cursor="pointer"
          position="relative"
          width="120px"
          height="100px"
          role="group"
          onClick={() => onClick(idx)}
        >
          <Center
            display="none"
            w="120px"
            h="100px"
            position="absolute"
            _groupHover={{ display: "flex", bgColor: "whiteAlpha.700" }}
          >
            <CloseIcon color="blackAlpha.500" boxSize={20} />
          </Center>
          <img src={file.preview} style={{ objectFit: "cover" }} />
        </Flex>
      ))}
    </Flex>
  );
};

export const DragDropZone = (props: { onChange?: (files: any) => void }) => {
  const [files, setFiles] = useState<any[]>([]);

  const handleChange = () => {
    if (props.onChange) props.onChange(files);
  };

  const onPreviewClick = (index: number) => {
    const updatedFiles = files;
    updatedFiles.splice(index, 1);
    setFiles([...updatedFiles]);
  };

  const handleDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      setFiles((prevFiles: any) => [
        ...prevFiles,
        Object.assign(file, { preview: URL.createObjectURL(new Blob([file])) }),
      ]);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    disabled: files.length === 4,
    onDrop: handleDrop,
  });

  useEffect(() => {
    handleChange();
  }, [files]);

  return (
    <>
      {files && <DragDropPreview imgFiles={files} onClick={onPreviewClick} />}
      <Center
        {...getRootProps()}
        cursor="pointer"
        borderWidth="2px"
        borderStyle="dashed"
        borderColor="blackAlpha.200"
        borderRadius={6}
        h={20}
        p={2}
      >
        <input {...getInputProps()} />
        <Text fontSize={14} color="blackAlpha.500">
          {isDragActive
            ? `Drop the image here...`
            : `Drag 'n' drop some files here, or click to select files`}
        </Text>
      </Center>
    </>
  );
};
