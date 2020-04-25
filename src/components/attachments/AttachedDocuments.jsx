import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import ModalLayout from '../layouts/ModalLayout';
import Button from '../buttons/Button';
import {
  Root,
  Label,
  Box,
  DropIcon,
  Empty,
  EmptyHeader,
  EmptyBody,
  EmptyAction,
  EmptyText,
  List,
  Item,
  ItemDetails,
  ItemText,
  RemoveIcon,
  Action,
  DropContent,
  DropCloseIcon,
  DropZone,
  DropZoneSection,
  DropZoneText,
} from './AttachedDocuments.styles';
import documentsUploadSource from '../../assets/images/icons/documents-upload.svg';
import documentUploadSource from '../../assets/images/icons/document-upload.svg';
import removeSource from '../../assets/images/icons/remove.svg';
import closeSource from '../../assets/images/icons/close.svg';

/**
 * The AttachedFiles' component.
 */
const AttachedFiles = props => {
  const { documents, label, onChange, onReject } = props;
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleDrop = useCallback((attachedDocuments, rejectedFiles = []) => {
    const allFiles = [...documents, ...attachedDocuments];

    if (allFiles.length > 4 || rejectedFiles.length > 0) {
      onReject('Puedes subir solo 2 PDF, 1 DWG o 1 RVT');

      return;
    }

    handleClose();
    onChange(attachedDocuments);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf, .dwg, .rvt',
    onDrop: handleDrop,
  });
  const { onClick: handleAttach, ...dropProps } = getRootProps();
  const handleRemove = attachedFile => () => {
    const updatedAttachedFiles = documents.filter(
      image => image.path !== attachedFile.path && image.name !== attachedFile.name,
    );
      
    onChange(updatedAttachedFiles);
  };

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Box>
        {documents.length === 0 && (
          <Empty>
            <EmptyHeader>
              <DropIcon alt="" margin="0 0 15px" src={documentsUploadSource} />
            </EmptyHeader>
            <EmptyBody>
              <EmptyAction onClick={handleOpen}>Sube documentos</EmptyAction>
              <EmptyText>Puedes subir 2 PDF, 1 DWG Y 1 RVT</EmptyText>
            </EmptyBody>
          </Empty>
        )}
        {documents.length > 0 && (
          <List>
            {documents.map((file, index) => (
              <Item key={index}>
                <img alt="" src={documentUploadSource} />
                <ItemDetails>
                  <ItemText>{file.name}</ItemText>
                  <ItemText>{`${Math.round(file.size / 1024)} Kb`}</ItemText>
                </ItemDetails>
                <RemoveIcon alt="" src={removeSource} onClick={handleRemove(file)} />
              </Item>
            ))}
          </List>
        )}
      </Box>
      {documents.length > 0 && <Action onClick={handleOpen}>Sube documentos</Action>}
      <ModalLayout show={show} onClose={handleClose}>
        <DropContent>
          <DropCloseIcon alt="" src={closeSource} onClick={handleClose} />
          <DropZone {...dropProps}>
            <input {...getInputProps()} />
            <DropZoneSection padding="33px 0 18px">
              <DropIcon alt="" src={documentsUploadSource} />
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                Arrastra y suelta aquí documentos PDF, DWG o RVT
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection>
              <DropZoneText>
                O también puedes
              </DropZoneText>
            </DropZoneSection>
            <DropZoneSection padding="13px 0 0">
              <Button variant="primary" onClick={handleAttach}>
                Cargar documentos desde la computadora
              </Button>
            </DropZoneSection>
          </DropZone>
        </DropContent>
      </ModalLayout>
    </Root>
  );
};

AttachedFiles.defaultProps = {
  label: '',
  onReject: () => undefined,
};
AttachedFiles.propTypes = {
  documents: PropTypes.arrayOf(
    PropTypes.instanceOf(window.File),
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onReject: PropTypes.func,
};

export default AttachedFiles;