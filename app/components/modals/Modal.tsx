'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import tw from 'tailwind-styled-components';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ContentBox>
        {/* CONTENT */}
        <ModalLogic $showModal={showModal}>
          <FlexBox>
            {/* HEADER */}
            <CardContainer>
              <CloseButton onClick={handleClose}>
                <IoMdClose size={18} />
              </CloseButton>
              <div className="text-lg font-semibold">{title}</div>
            </CardContainer>
            {/* BODY */}
            <div className="flex-quto relative p-6">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2 p-6">
              <div className="flex w-full flex-row items-center gap-4">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSubmit}
                  />
                )}

                <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </FlexBox>
        </ModalLogic>
      </ContentBox>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = tw.div`
  focus:outline-none bg-neutral-800/70 fixed inset-0 z-50
  flex items-center justify-center overflow-x-hidden outline-none
`;

const ContentBox = tw.div`
relative mx-auto my-6 h-full w-full md:h-auto md:w-4/6
lg:h-auto lg:w-3/6 xl:w-2/5
`;

const ModalLogic = tw.div<{ $showModal: boolean }>`
  translate h-full duration-300
  ${(p) => (p.$showModal ? 'translate-y-0' : 'translate-y-full')}
  ${(p) => (p.$showModal ? 'opacity-100' : 'opacity-0')}
`;

const CloseButton = tw.button`
  absolute left-9 border-0 p-1 transition hover:opacity-70
`;

const FlexBox = tw.div`
  translate relative flex h-full w-full flex-col rounded-lg border-0
  bg-white shadow-lg outline-none focus:outline-none md:h-auto lg:h-auto
`;

const CardContainer = tw.div`
  relative flex items-center justify-center rounded-t border-b-[1px] p-6
`;
