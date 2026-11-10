'use client';

import { useEffect } from 'react';
import { createChat } from '@n8n/chat';

export default function ChatWidget() {
  useEffect(() => {
    const chat = createChat({
      webhookUrl: 'PASTE_YOUR_N8N_CHAT_URL_HERE',
      mode: 'window',
      loadPreviousSession: false,
      initialMessages: [
        'Hi! What would you like to improve in your business?',
      ],
    });

    return () => chat.unmount();
  }, []);

  return <div id="n8n-chat" />;
}