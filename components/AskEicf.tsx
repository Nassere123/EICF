'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  ExternalLink,
  RotateCcw,
} from 'lucide-react'
import { answer, suggestedQuestions, type AskAnswer } from '@/lib/ask-engine'
import { org } from '@/lib/data'

interface Message {
  sender: 'bot' | 'user'
  text: string
  bullets?: string[]
  sources?: { label: string; href: string }[]
}

const initialMessages: Message[] = [
  {
    sender: 'bot',
    text: `Bonjour ! Je suis l’assistant intelligent de l’ONG EICF. Je réponds à vos questions en m’appuyant exclusivement sur notre base documentaire validée (projets, régions, rapports, partenaires).`,
  },
]

export function AskEicf() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [isTyping, setIsTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, isTyping, open])

  const handleSend = (textToSend?: string) => {
    const q = (textToSend ?? input).trim()
    if (!q) return

    const userMsg: Message = { sender: 'user', text: q }
    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const res: AskAnswer = answer(q)
      const botMsg: Message = {
        sender: 'bot',
        text: res.text,
        bullets: res.bullets,
        sources: res.sources,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 450)
  }

  const handleReset = () => {
    setMessages(initialMessages)
  }

  return (
    <>
      {/* Bouton flottant : icône Robot uniquement, sans texte */}
      {!open && (
        <button
          type="button"
          className="ask-fab"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l’assistant intelligent EICF"
          title="Ouvrir l’assistant intelligent EICF"
        >
          <div className="orb">
            <Bot size={24} />
          </div>
        </button>
      )}

      {/* Panneau de discussion */}
      {open && (
        <div className="ask-panel" role="dialog" aria-labelledby="ask-title">
          {/* En-tête */}
          <div className="ask-head">
            <div className="orb">
              <Bot size={22} />
            </div>
            <div>
              <h3 id="ask-title">ASK EICF</h3>
              <p>
                <span>Base documentaire vérifiée</span> · <span>IA EICF</span>
              </p>
            </div>
            <button
              type="button"
              className="close"
              onClick={handleReset}
              title="Nouvelle conversation"
              style={{ marginRight: '6px' }}
            >
              <RotateCcw size={15} />
            </button>
            <button
              type="button"
              className="close"
              onClick={() => setOpen(false)}
              aria-label="Fermer la discussion"
            >
              <X size={18} />
            </button>
          </div>

          {/* Corps de la conversation */}
          <div className="ask-body" ref={bodyRef}>
            {messages.map((m, idx) => (
              <div key={idx} className={`msg ${m.sender}`}>
                <p>{m.text}</p>
                {m.bullets && m.bullets.length > 0 && (
                  <ul>
                    {m.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {m.sources && m.sources.length > 0 && (
                  <div className="sources">
                    <span>Sources vérifiées :</span>
                    {m.sources.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        onClick={() => setOpen(false)}
                      >
                        {s.label} &rarr;
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="msg bot typing">
                <i />
                <i />
                <i />
              </div>
            )}

            {/* Suggestions initiales */}
            {messages.length === 1 && !isTyping && (
              <div style={{ marginTop: '10px' }}>
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '10px',
                  }}
                >
                  Questions fréquentes :
                </p>
                <div className="suggestions">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleSend(q)}
                    >
                      <span>{q}</span>
                      <ArrowRight size={13} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Zone de saisie */}
          <div className="ask-input">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question à EICF..."
                aria-label="Votre question"
              />
              <button type="submit" aria-label="Envoyer">
                <Send size={15} />
              </button>
            </form>
            <small>
              L’assistant s’appuie sur les documents et projets certifiés d’EICF.
            </small>
          </div>
        </div>
      )}
    </>
  )
}
