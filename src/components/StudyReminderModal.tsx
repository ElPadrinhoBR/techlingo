import React, { useState } from 'react';
import { X, Bell, Flame, CheckCircle, Sparkles, Clock } from 'lucide-react';
import { notificationService } from '../services/notificationService';
import { soundService } from '../services/soundService';

interface StudyReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  streak: number;
  notificationsEnabled: boolean;
  reminderHour: number;
  onUpdateSettings: (enabled: boolean, hour: number) => void;
}

export const StudyReminderModal: React.FC<StudyReminderModalProps> = ({
  isOpen,
  onClose,
  streak,
  notificationsEnabled,
  reminderHour,
  onUpdateSettings
}) => {
  const [selectedHour, setSelectedHour] = useState<number>(reminderHour || 19);
  const [isEnabled, setIsEnabled] = useState<boolean>(notificationsEnabled);
  const [testSent, setTestSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const hoursOptions = [
    { hour: 8, label: '08:00 (Manhã)' },
    { hour: 12, label: '12:00 (Almoço)' },
    { hour: 18, label: '18:00 (Fim de expediente)' },
    { hour: 19, label: '19:00 (Noite)' },
    { hour: 20, label: '20:00 (Noite)' },
    { hour: 21, label: '21:00 (Antes de dormir)' }
  ];

  const handleToggleEnable = async () => {
    soundService.playClick();
    if (!isEnabled) {
      const granted = await notificationService.requestPermission();
      if (granted) {
        setIsEnabled(true);
        onUpdateSettings(true, selectedHour);
      } else {
        alert('As notificações foram bloqueadas no seu navegador. Permita o envio nas configurações do site para receber lembretes de estudo.');
      }
    } else {
      setIsEnabled(false);
      onUpdateSettings(false, selectedHour);
    }
  };

  const handleTestNotification = async () => {
    soundService.playCorrect();
    const status = notificationService.getPermissionStatus();
    if (status !== 'granted') {
      const granted = await notificationService.requestPermission();
      if (!granted) {
        alert('Permissão de notificação necessária!');
        return;
      }
    }
    notificationService.sendStudyReminder(streak);
    setTestSent(true);
    setTimeout(() => setTestSent(false), 3000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(4px)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="animate-pop-in" style={{
        maxWidth: '460px',
        width: '100%',
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        <button
          onClick={() => {
            soundService.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Header Icon */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#33230a',
            border: '2px solid #f59e0b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f59e0b'
          }}>
            <Bell size={32} />
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>
            Lembretes Diários de Estudo
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.4' }}>
            A consistência de <strong>5 minutos por dia</strong> é o segredo para dominar o inglês técnico e nunca perder sua ofensiva de estudo!
          </p>
        </div>

        {/* Current Streak Indicator */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          padding: '0.75rem 1rem',
          borderRadius: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800 }}>
            <Flame size={20} />
            <span>Ofensiva Atual: {streak} {streak === 1 ? 'dia' : 'dias'}</span>
          </div>

          <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>
            Meta diária ativa
          </span>
        </div>

        {/* Reminder Settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={16} color="#38bdf8" />
            Melhor horário para te lembrar:
          </label>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem'
          }}>
            {hoursOptions.map((opt) => {
              const isSelected = selectedHour === opt.hour;
              return (
                <button
                  key={opt.hour}
                  onClick={() => {
                    soundService.playClick();
                    setSelectedHour(opt.hour);
                    onUpdateSettings(isEnabled, opt.hour);
                  }}
                  style={{
                    padding: '0.6rem',
                    borderRadius: '0.65rem',
                    border: isSelected ? '1.5px solid #38bdf8' : '1px solid #243253',
                    backgroundColor: isSelected ? '#0c4a6e' : '#0f172a',
                    color: isSelected ? '#38bdf8' : '#94a3b8',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <button
            onClick={handleToggleEnable}
            className={`btn-3d ${isEnabled ? 'btn-3d-green' : 'btn-3d-blue'}`}
            style={{ padding: '0.85rem', fontSize: '0.95rem' }}
          >
            {isEnabled ? '✓ Lembretes Ativados' : 'Ativar Lembretes no Navegador'}
          </button>

          <button
            onClick={handleTestNotification}
            className="btn-3d btn-3d-secondary"
            style={{ padding: '0.75rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
          >
            <Sparkles size={16} />
            {testSent ? 'Notificação enviada com sucesso!' : 'Testar Notificação Agora'}
          </button>
        </div>
      </div>
    </div>
  );
};
