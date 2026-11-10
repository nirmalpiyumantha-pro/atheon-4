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
        'Hi! sup cocksucker.',
      ],

      i18n: {
        en: {
          title: 'Atheon Assistant',
          subtitle: 'Explore what AI can do for your business.',
          footer: '',
          getStarted: 'New conversation',
          inputPlaceholder: 'Type your message...',
        },
      },
    });

    return () => chat.unmount();
  }, []);

  return <div id="n8n-chat" />;
}