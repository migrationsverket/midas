import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
  Label,
  Text,
} from 'react-aria-components';
import React from 'react';
import { styled } from '@mvds/theme';
import { Button } from '@mvds/button';
import { X } from 'lucide-react';

export interface FileTriggerProps extends AriaFileTriggerProps {
  /**
   * Label for the file upload button
   * */
  label?: string;
  /**
   * Additional description field
   * */
  description?: string;
}
export const FileUpload = (props: FileTriggerProps) => {
  const [files, setFiles] = React.useState<File[] | null | undefined>(null);
  const handleRemove = (index: number) => {
    setFiles(files?.filter((f, i) => i !== index));
  };
  const handleUpload = (files: FileList | null) => {
    setFiles(files !== null ? Array.from(files) : []);
    // TODO: actually handle files?
  };

  return (
    <FileUploadContainer>
      <AriaFileTrigger
        allowsMultiple={props.allowsMultiple}
        onSelect={(files) => handleUpload(files)}
      >
        <StyledLabel aria-label={'fileUpload'}>{props.label}</StyledLabel>
        <StyledText slot={'description'}>{props.description}</StyledText>
        {/* TODO: check labels */}
        <Button variant={'secondary'} aria-labelledby={'fileUpload'}>
          Välj fil
        </Button>
      </AriaFileTrigger>
      {files && (
        <FileList>
          {files.map((file, index) => (
            <FileBox key={index}>
              {file.name}
              <button onClick={() => handleRemove(index)}>
                <X height={16} width={16} />
              </button>
            </FileBox>
          ))}
        </FileList>
      )}
    </FileUploadContainer>
  );
};

const FileBox = styled('li', {
  backgroundColor: '$gray10',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '14px',
  paddingBottom: '14px',
  paddingLeft: '16px',
  fontSize: '16px',
  '& button': {
    border: 'none',
    marginRight: '10px',
    cursor: 'pointer',
  },
});

const FileList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  margin: 0,
  marginTop: '8px',
  padding: 0,
  gap: '8px',
});

const FileUploadContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
});

const StyledLabel = styled(Label, {
  fontSize: '1rem',
  fontWeight: '$medium',
  marginBottom: '8px',
});

const StyledText = styled(Text, {
  fontSize: '14px',
  fontWeight: '$regular',
  marginBottom: '8px',
});
