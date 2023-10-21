import React from 'react';
import clipboardCopy from 'clipboard-copy';

function CopyToClipboardButton({ textToCopy }) {
  const handleCopyToClipboard = async () => {
    try {
      await clipboardCopy(textToCopy);
    //   alert('Text copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:text-gray-100" onClick={handleCopyToClipboard}>Copy to Clipboard</button>
  );
}

export default CopyToClipboardButton;
