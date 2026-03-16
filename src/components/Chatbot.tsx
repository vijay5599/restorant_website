'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I am your AI concierge for Marcopolo Cafe. How may I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I am currently unable to process your request. Please try again later or call us directly.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl flex flex-col w-[350px] sm:w-[400px] h-[550px] border border-black/5 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-900 text-white px-6 py-5 flex justify-between items-center relative overflow-hidden">
               {/* Decorative grain */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full glass border-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-none mb-1">Marcopolo AI</h3>
                  <p className="text-xs text-primary-200">Online & ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors relative z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 bg-surface-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={message.id}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.sender === 'user' ? 'bg-primary-100 text-primary-800' : 'bg-primary-900 text-white'
                      }`}>
                        {message.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-primary-600 text-white rounded-tr-sm'
                            : 'bg-white text-foreground shadow-sm border border-black/5 rounded-tl-sm'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <span className={`text-[10px] mt-2 block ${message.sender === 'user' ? 'text-primary-200' : 'text-foreground/40'}`}>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="flex gap-3 max-w-[85%] flex-row">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary-900 text-white">
                        <Bot size={14} />
                      </div>
                      <div className="bg-white text-foreground shadow-sm border border-black/5 px-5 py-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center h-[46px]">
                        <motion.div className="w-1.5 h-1.5 bg-primary-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} />
                        <motion.div className="w-1.5 h-1.5 bg-primary-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                        <motion.div className="w-1.5 h-1.5 bg-primary-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-black/5 p-4 bg-white"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full bg-surface-100 border-none rounded-full pl-5 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:bg-white transition-all text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="absolute right-2 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition disabled:opacity-50 disabled:hover:bg-primary-600 shadow-sm"
                >
                  <Send size={16} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-900 text-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all border border-white/10"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
